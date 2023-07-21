<template>
  <v-card>
    <v-card-title> Package </v-card-title>
    <v-card-text>
      <v-container fluid grid-list-xl pt-0>
        <v-layout row wrap>
          <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
            <div>
              <v-card :loading="loading" height="2px" flat></v-card>
              <div class="profile-top mt-4">
                <v-img
                  ref="categoryImage"
                  class="user-image text-center mb-4"
                  :src="
                    selectedPackage.src
                      ? selectedPackage.src
                      : 'https://via.placeholder.com/150'
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
                      v-model="imageFile"
                      @change="changeImage($event)"
                    ></v-file-input>
                    <v-btn
                      class="mb-30"
                      fab
                      x-small
                      color="error"
                      @click.stop="clearImageInput"
                    >
                      <v-icon small>delete</v-icon>
                    </v-btn>
                  </v-card-title>
                </v-img>
                <div class="user-list-content">
                  <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                    <div>
                      <v-text-field
                        v-model="selectedPackage.name"
                        label="Name"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-text-field
                        v-model="selectedPackage.name_ar"
                        label="Name Arabic"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-text-field
                        v-model="selectedPackage.cost"
                        label="Cost"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-chip color="red" text-color="white" small>
                        <v-icon small left> warning </v-icon>
                        Min Cost : {{ minCost }}
                      </v-chip>
                      <v-text-field
                        v-model="selectedPackage.duration_in_days"
                        label="Featured Duration in Days"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-text-field
                        v-model="selectedPackage.points"
                        label="Points"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-text-field
                        v-model="selectedPackage.limit"
                        label="Time Limit"
                        filled
                        @change="changed = true"
                      >
                      </v-text-field>
                      <v-color-picker
                        dot-size="25"
                        mode="hexa"
                        swatches-max-height="200"
                        v-model="selectedPackage.font_color"
                      ></v-color-picker>
                    </div>
                  </v-flex>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-row justify="space-between" class="mb-4 pr-2 pl-2">
        <v-btn
          color="primary"
          @click.stop="save"
          :loading="loading"
          :disabled="loading"
          >Save
        </v-btn>
        <v-btn color="warning" @click.stop="close">Cancel</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import Permissions from '../../store/modules/admin/permissions';

export default {
  props: ['isNew', 'close'],

  computed: {
    selectedPackage() {
      return this.$store.getters.selectedPackage;
    },
    minCost() {
      return this.country.id == 1 ? 5 : 1;
    },
  },

  data() {
    return {
      /**
       * Permissions Constants
       */
      VIEW: Permissions.actions.view,
      CREATE: Permissions.actions.create,
      UPDATE: Permissions.actions.update,
      DELETE: Permissions.actions.delete,
      RESOURCE: Permissions.resources.category,

      loading: false,

      imageFile: null,
      rules: [
        (value) =>
          !value ||
          value.size < 500000 ||
          'Avatar size should be less than 2 MB!',
      ],
    };
  },

  methods: {
    changeImage(file) {
      this.changed = true;
      this.selectedPackage.src = URL.createObjectURL(file);
      this.selectedPackage.image = file;
    },

    clearImageInput() {
      this.changed = true;
      this.selectedPackage.src = 'https://via.placeholder.com/150';
      this.selectedPackage.image = '';
      this.imageFile = null;
    },

    save() {
      if (this.isNew) this.createPackage();
      else this.updatePackage();
    },

    createPackage() {
      this.appendFormDataParams();
      this.loading = true;
      this.$store
        .dispatch('createPackage', this.packageFormData)
        .then(() => {
          this.loading = false;
          this.imageFile = null;
          this.close();
        })
        .finally(() => (this.loading = false));
    },

    updatePackage() {
      this.appendFormDataParams();
      this.loading = true;
      this.$store
        .dispatch('updatePackage', this.packageFormData)
        .finally(() => {
          this.loading = false;
          this.imageFile = null;
          this.close();
        });
    },

    appendFormDataParams() {
      this.packageFormData = new FormData();
      this.packageFormData.append('name', this.selectedPackage.name);
      this.packageFormData.append('name_ar', this.selectedPackage.name_ar);
      this.packageFormData.append('cost', this.selectedPackage.cost);
      this.packageFormData.append(
        'duration_in_days',
        this.selectedPackage.duration_in_days
      );
      this.packageFormData.append(
        'limit',
        this.selectedPackage.limit ? this.selectedPackage.limit : ''
      );
      this.packageFormData.append('points', this.selectedPackage.points);
      this.packageFormData.append(
        'font_color',
        this.selectedPackage.font_color
      );
      if (this.selectedPackage.image != undefined)
        this.packageFormData.append('image', this.selectedPackage.image);
    },
  },
};
</script>
