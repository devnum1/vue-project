<template>
  <div class="contact-wrapper">
    <page-title-bar></page-title-bar>
    <v-container fluid pt-0 grid-list-xl>
      <v-layout row wrap align-items-center search-wrap>
        <v-flex xs12 sm12 md12 lg12 align-items-center pt-0>
          <app-card
              customClasses="mb-0 py-12"
          >
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg3 align-items-center>
                <h2 class="mb-0">Search</h2>
              </v-flex>
              <v-flex xs12 sm12 md12 lg9 pb-0>
                <div class="d-flex search-field-wrap">
                  <div class="w-70">
                    <v-text-field
                        class=" pt-0 pr-3"
                        label="Search Ads"
                        v-model="search"
                        @keypress.enter="fetchAds"
                    >
                    </v-text-field>
                  </div>
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg3 align-items-center>
                <h2 class="mb-0">User</h2>
              </v-flex>
              <v-flex xs12 sm12 md12 lg9 pb-0>
                <div class="d-flex search-field-wrap">
                  <div class="w-50">
                    <v-text-field
                        class=" pt-0 pr-3"
                        label="Enter user name or mobile"
                        v-model="user"
                        @keypress.enter="resetPageAndFetchAds"
                    >
                    </v-text-field>
                  </div>
                </div>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <div class="search-btn">
                <v-btn color="primary" medium @click="resetPageAndFetchAds">Search</v-btn>
              </div>
            </v-card-actions>
          </app-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <app-card
            colClasses="xl12 lg12 md12 sm12 xs12"
            customClasses="mb-0 client-wrapper"
        >
          <div class="d-sm-inline-flex mb-5">
            <v-chip
                class="ma-2"
                color="secondary"
                v-bind:style="rowStyle"
                @click="showCategoryDialog"
            >
              <v-icon left>
                mdi-home
              </v-icon>
              Select Category
            </v-chip>
            <v-chip
                class="ma-2 featured-label"
                color="primary darken-4"
                label

            >
              {{ selectedCategory ? selectedCategory.name : 'All' }}
            </v-chip>
            <v-btn v-if="selectedCategory !== null" class="mt-2" small color="error" @click.stop="resetCategory">
              <v-icon small>clear</v-icon> Remove
            </v-btn>
          </div>
          <v-card :loading="loading" height="2px" flat></v-card>
          <ad-details></ad-details>
        </app-card>
      </v-layout>
    </v-container>
    <template>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                    v-model="options.page"
                    class="my-4"
                    :length="meta.last_page"
                    @input="fetchPage"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>

    <template>
      <!-- Category Selection Dialog -->
      <v-dialog v-model="categoryDialog" @click:outside="categoryDialog=false" @close="categoryDialog=false"
                max-width="600">
        <v-card class="p-2">
          <v-treeview
              v-model="tree"
              :open="open"
              :items="categories"
              item-key="id"
              activatable
              :active="active"
              v-bind:style="rowStyle"
              @update:active="selectCategory"
              return-object
              item-children="childs"
          >
            <template slot="prepend" slot-scope="{ item, open, leaf }">
              <v-icon v-if="!item.file">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                {{ files[item.file] }}
              </v-icon>
            </template>
            <template slot="append" slot-scope="{ item, open, leaf }">
              {{ item.ads_count }}
            </template>
          </v-treeview>
        </v-card>
      </v-dialog>

    </template>
  </div>
</template>

<script>
import AdDetails from './AdDetails'

export default {

  components: {
    AdDetails
  },

  created() {
    this.options.blocked = false;
    this.$store.dispatch('fetchAds', this.options).finally(() => {
      this.loading = false;
    });
    this.$store.dispatch('getCategoriesTree');
    this.$store.dispatch('fetchReportedCount');
  },

  computed: {
    ads() {
      return this.$store.getters.ads;
    },

    meta() {
      return this.$store.getters.adsMeta;
    },

    categories() {
      return this.$store.getters.categories;
    },

    options() {
      return this.$store.getters.filterOptions;
    }
  },

  data() {
    return {
      adDialog: false,
      loading: true,
      search: "",
      user: "",
      // options: {
      //   page: 1,
      // },

      // Category tree
      categoryDialog: false,
      selectedCategory: null,
      active: [],
      open: [],
      tree: [],
      rowStyle: {
        cursor: 'pointer'
      },

    };
  },

  watch: {
    options: {
      handler() {
        this.fetchAds();
      },
      deep: true
    }
  },

  methods: {

    fetchPage(page) {
      this.options.page = page;
    },

    resetPageAndFetchAds() {
      this.options.page = 1;
      this.fetchAds();
    },

    fetchAds() {
      this.$store.commit('resetAds');
      this.loading = true;
      // if (this.search) this.options.q = this.search;
      if (this.selectedCategory !== null) {
        this.options.category = this.selectedCategory.id;
      } else {
        this.options.category = "";
      }
      // this.options.featured = true;
      this.options.q = this.search;
      this.options.user = this.user;
      this.$store.dispatch('fetchAds', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    showCategoryDialog() {
      this.categoryDialog = true;
    },

    selectCategory(category) {
      this.selectedCategory = category ? category[0] : null;
      this.options.page = 1;
      this.categoryDialog = false;
      this.fetchAds();
    },

    resetCategory() {
      this.selectedCategory = null;
      this.fetchAds();
    }

  }
};
</script>

<style scoped>
.search-btn {
  position: absolute;
  right: 50px;
}
</style>