<template>
  <div class="profile-head app-card mb-30">
    <div class="profile-top mt-4">
      <v-img
          ref="categoryImage"
          class="user-image text-center mb-4"
          :src="campaign.src ? campaign.src : 'https://via.placeholder.com/350x150.png'"
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
              @change="changeImage($event)"
          ></v-file-input>
          <v-btn class="mb-30" small color="error" @click.stop="clearImageInput">
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
                    class=" pt-0 pr-3"
                    label="Title"
                    v-model="campaign.title"
                >
                </v-text-field>
                <v-text-field
                    class=" pt-2 pr-3"
                    label="Title Arabic"
                    v-model="campaign.title_ar"
                >
                </v-text-field>

                <v-textarea
                    class=" pt-2 pr-3"
                    label="Body"
                    v-model="campaign.body"
                >
                </v-textarea>
                <v-textarea
                    class=" pt-2 pr-3"
                    label="Body Arabic"
                    v-model="campaign.body_ar"
                >
                </v-textarea>


              </div>
            </div>
          </v-flex>
        </div>
      </div>

      <v-card-actions>
        <div class="search-btn">
          <v-btn color="primary" medium
                 @click="send"
                 :loading="loading"
                 :disabled="loading || !$can(CREATE,RESOURCE)"
          >Send
          </v-btn>
        </div>
      </v-card-actions>
    </div>
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
      rules: [
        value => !value || value.size < 500000 || 'Avatar size should be less than 2 MB!',
      ],
      rowStyle: {
        cursor: 'pointer'
      },
    }
  },

  computed: {
    campaign() {
      return this.$store.getters["notifications/campaign"];
    }
  },

  methods: {

    changeImage(file) {
      console.log(file)
      this.campaign.src = URL.createObjectURL(file);
      this.campaign.image = file;
    },

    send() {
      this.loading = true;
      if (!this.isFormDataValid()) {
        this.$notify({
          group: 'loggedIn',
          type: 'error',
          text: 'Title and Body in English and Arabic are required'
        });
        this.loading = false;
      } else {
        this.appendFormDataParams();
        this.$store.dispatch('notifications/sendCampaign', this.campaignFormData).finally(() => {
          this.loading = false;
        });
      }
    },

    isFormDataValid() {
      return !(this.campaign.title === '' || this.campaign.title_ar === ''
          || this.campaign.body === '' || this.campaign.body_ar === '');
    },

    appendFormDataParams() {
      this.campaignFormData = new FormData();
      this.campaignFormData.append('title', this.campaign.title);
      this.campaignFormData.append('title_ar', this.campaign.title_ar);
      this.campaignFormData.append('body', this.campaign.body);
      this.campaignFormData.append('body_ar', this.campaign.body_ar);
      if (this.campaign.image) this.campaignFormData.append('image', this.campaign.image);
    },

    clearImageInput() {
      this.changed = true;
      this.campaign.src = 'https://via.placeholder.com/150';
      delete this.campaign.image;
      this.imageFile = null;
    },

  }
}

</script>
