<template>
  <div>
    <v-card-title> Mobile Ad </v-card-title>
    <v-card-text>
      <div class="profile-head app-card mb-30">
        <div class="profile-top mt-4">
          <v-img
            ref="categoryImage"
            class="user-image text-center mb-4"
            :src="ad.src ? ad.src : 'https://via.placeholder.com/350x150.png'"
            height="200px"
            contain
          >
            <v-card-title>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                label="Image"
                clearable
                hide-input
                show-size
                v-model="imageFile"
                @change="changeImage($event, 'en')"
              ></v-file-input>
              <v-btn
                class="mb-30"
                small
                color="error"
                @click.stop="clearImageInput('en')"
              >
                Remove Image
              </v-btn>
            </v-card-title>
          </v-img>
          <v-img
            ref="categoryImage"
            class="user-image text-center mb-8"
            :src="
              ad.src_ar ? ad.src_ar : 'https://via.placeholder.com/350x150.png'
            "
            height="200px"
            contain
          >
            <v-card-title>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                label="Image"
                clearable
                hide-input
                show-size
                v-model="imageFileAr"
                @change="changeImage($event, 'ar')"
              ></v-file-input>
              <v-btn
                class="mb-30"
                small
                color="error"
                @click.stop="clearImageInput('ar')"
              >
                Remove Image
              </v-btn>
            </v-card-title>
          </v-img>
          <div class="user-list-content">
            <div class="text-center">
              <v-flex xs12 sm12 md12 lg12 pb-0>
                <div class="d-flex search-field-wrap justify-center">
                  <div class="w-70">
                    <v-text-field
                      class="pt-0 pr-3"
                      label="Name"
                      v-model="ad.name"
                    >
                    </v-text-field>

                    <v-switch
                      label="External"
                      color="green"
                      v-model="ad.external"
                      :input-value="false"
                      :loading="loading"
                      :disabled="loading"
                      @change=""
                    ></v-switch>

                    <v-text-field
                      v-if="ad.external"
                      class="pt-2 pr-3"
                      label="Referer"
                      hint="https://www.example.com"
                      v-model="ad.referer_link"
                    >
                    </v-text-field>

                    <v-col v-else cols="12" sm="12">
                      <v-select
                        v-model="ad.referer_screen"
                        :items="screens"
                        :item-value="'id'"
                        :item-text="'name'"
                        label="Refers to"
                        hint="Select screen that ad will refer to"
                        persistent-hint
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12">
                      <v-select
                        v-model="ad.screens"
                        :items="screens"
                        :item-value="'id'"
                        :item-text="'name'"
                        label="Appears on"
                        multiple
                        chips
                        hint="Select screens that ad will appear on"
                        persistent-hint
                      ></v-select>
                    </v-col>

                    <v-row justify="center">
                      <v-col cols="12" sm="12" md="12">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="ad.ends_at"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="ad.ends_at"
                              label="Ends"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="ad.ends_at"
                            no-title
                            scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(ad.ends_at)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>

                    <v-switch
                      label="Active"
                      color="green"
                      v-model="ad.active"
                      :input-value="false"
                      :loading="loading"
                      :disabled="loading"
                      @change=""
                    ></v-switch>
                  </div>
                </div>
              </v-flex>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script>
import Permissions from "../../store/modules/admin/permissions";

export default {
  data() {
    return {
      /**
       * Permissions Constants
       */
      VIEW: Permissions.actions.view,
      CREATE: Permissions.actions.create,
      UPDATE: Permissions.actions.update,
      DELETE: Permissions.actions.delete,
      RESOURCE: Permissions.resources.notification,

      isNewOption: false,
      loading: false,
      loader: null,
      changed: false,
      categoryNameDialog: false,
      optionDialog: false,
      confirmationDialog: false,
      imageFile: null,
      imageFileAr: null,
      rules: [
        (value) =>
          !value ||
          value.size < 500000 ||
          "Avatar size should be less than 2 MB!",
      ],
      rowStyle: {
        cursor: "pointer",
      },

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    };
  },

  computed: {
    ad() {
      return this.$store.getters["mobileAds/selectedAd"];
    },

    screens() {
      return this.$store.getters["mobileAds/adPages"];
    },
  },

  methods: {
    changeImage(file, lang) {
      console.log(file);
      if (lang === "en") {
        this.ad.src = URL.createObjectURL(file);
        this.ad.image = file;
      } else {
        this.ad.src_ar = URL.createObjectURL(file);
        this.ad.image_ar = file;
      }
    },

    send() {
      this.loading = true;
      if (!this.isFormDataValid()) {
        this.$notify({
          group: "loggedIn",
          type: "error",
          text: "Title and Body in English and Arabic are required",
        });
        this.loading = false;
      } else {
        this.appendFormDataParams();
        this.$store
          .dispatch("notifications/sendCampaign", this.campaignFormData)
          .finally(() => {
            this.loading = false;
          });
      }
    },

    isFormDataValid() {
      return !(
        this.campaign.title === "" ||
        this.campaign.title_ar === "" ||
        this.campaign.body === "" ||
        this.campaign.body_ar === ""
      );
    },

    // appendFormDataParams() {
    //   this.campaignFormData = new FormData();
    //   this.campaignFormData.append('title', this.campaign.title);
    //   this.campaignFormData.append('title_ar', this.campaign.title_ar);
    //   this.campaignFormData.append('body', this.campaign.body);
    //   this.campaignFormData.append('body_ar', this.campaign.body_ar);
    //   if (this.campaign.image) this.campaignFormData.append('image', this.campaign.image);
    // },

    clearImageInput(image_lang = "en") {
      this.changed = true;
      if (image_lang === "en") {
        this.ad.src = "https://via.placeholder.com/350x150";
        delete this.ad.image;
        this.imageFile = null;
      } else {
        this.ad.src_ar = "https://via.placeholder.com/350x150";
        delete this.ad.image_ar;
        this.imageFileAr = null;
      }
      console.log(this.ad);
    },
  },
};
</script>
