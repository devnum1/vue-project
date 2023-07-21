<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid pt-0 grid-list-xl>

      <!-- Actions -->
      <div class="d-md-inline-flex mb-5">
        <v-select
            :items="pages"
            :item-value="'id'"
            :item-text="'name'"
            label="Page"
            class="mr-md-5" return-object
            v-model="selectedPage"
            @change="changePage"
        ></v-select>
      </div>

      <!-- list view -->
      <v-layout row wrap align-items-center search-wrap>
        <v-flex xs12 sm10 md8 lg8 class="mx-auto">
          <div>
            <v-card :loading="loading" height="2px" flat></v-card>
            <AdsList :open="open" :open-delete-confirmation="openConfirmationDialog"></AdsList>
          </div>
        </v-flex>
      </v-layout>

      <!--   Ad Dialog   -->
      <v-dialog v-model="dialog" max-width="700px" @click:outside="close" @close="close">
        <v-card>
          <ad-dialog></ad-dialog>
          <v-card-actions>
            <v-btn
                @click="save"
                :disabled="loading"
                color="primary"
                class="mr-3 mt-2"
                :loading="loading"
            >
              <div>Save</div>
            </v-btn>

            <v-btn class="float-right mt-2" color="warning" @click.stop="close">Cancel</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

      <!-- Delete Confirmation Dialog -->
      <v-dialog v-model="confirmationDialog" max-width="700px" @close="closeConfirmationDialog">
        <v-card>
          <v-card-title>
            <p>Are you sure you want to delete this ad?</p>
            <v-alert
                class="text-break"
                border="left"
                type="error"
            ><b class="text-uppercase">Warning:</b> Deleting ad will result in deleting it from all mobile screens if it
              appears in any.
              Note this action is <b class="text-uppercase">irreversible</b>
            </v-alert>
          </v-card-title>
          <v-card-actions>
            <v-btn
                color="error"
                @click.stop="deleteAd"
                :loading="loading"
                :disabled="loading"
            >
              Delete
            </v-btn>
            <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn color="primary" @click="openNewDialog">
        + Add New
      </v-btn>
    </v-container>
  </div>
</template>
<script>

import AdsList from './AdsList';
import AdDialog from './AdDialog';

export default {
  components: {
    AdsList,
    AdDialog,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      newAd: false,
      confirmationDialog: false,
    };
  },
  methods: {
    changePage(page) {
      this.loading = true;
      this.$store.commit('mobileAds/resetAds');
      this.$store.commit('mobileAds/setSelectedPage', page);
      this.$store.dispatch('mobileAds/fetchAds').finally(() => {
        this.loading = false;
      });
    },

    open() {
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.newAd = false;
      this.$store.commit("mobileAds/resetSelectedAd");
    },

    openNewDialog() {
      this.newAd = true;
      this.open();
    },

    save() {
      this.validateData();
      this.createFormData();
      this.loading = true;
      if (this.newAd) {
        this.$store.dispatch('mobileAds/createAd', this.formData).finally(() => {
          this.loading = false;
          this.close();
        })
      } else {
        this.$store.dispatch('mobileAds/updateAd', this.formData).finally(() => {
          this.loading = false;
          this.close();
        })
      }
    },

    validateData() {
      return true;
    },

    createFormData() {
      this.formData = new FormData();
      console.log(this.ad)
      this.formData.append('name', this.ad.name);
      this.formData.append('external', this.ad.external ? 1 : 0);
      this.formData.append('referer_link', this.ad.referer_link ? this.ad.referer_link : "");
      this.formData.append('referer_screen', this.ad.referer_screen ? this.ad.referer_screen : "");
      this.formData.append('ends_at', this.ad.ends_at ? this.ad.ends_at : "");

      for (var i = 0; i < this.ad.screens.length; i++) {
        let screens = this.ad.screens;
        if (typeof screens[i]["id"] !== "undefined") {
          this.formData.append('screens[]', this.ad.screens[i].id);
        } else {
          this.formData.append('screens[]', this.ad.screens[i]);
        }
      }

      this.formData.append('active', this.ad.active ? 1 : 0);
      if (this.ad.image) this.formData.append('image', this.ad.image);
      if (this.ad.image_ar) this.formData.append('image_ar', this.ad.image_ar);
    },

    deleteAd() {
      this.loading = true;
      this.$store.dispatch('mobileAds/deleteAd').finally(() => {
        this.loading = false;
        this.closeConfirmationDialog();
      })
    },

    openConfirmationDialog() {
      this.confirmationDialog = true;
    },

    closeConfirmationDialog() {
      this.confirmationDialog = false;
      this.$store.commit('mobileAds/resetSelectedAd');
    }

  },

  computed: {
    pages() {
      return this.$store.getters["mobileAds/adPages"];
    },

    ad() {
      return this.$store.getters["mobileAds/selectedAd"];
    },

    selectedPage: {
      get() {
        return this.$store.getters["mobileAds/selectedPage"];
      },
      set(page) {
        this.$store.commit('mobileAds/setSelectedPage', page);
        console.log(this.selectedPage)
      }
    }
  },

  created() {
    this.$store.dispatch('mobileAds/fetchAds');
  },
}
</script>