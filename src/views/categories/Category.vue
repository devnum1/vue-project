<template>
  <div class="profile-head app-card mb-30">
    <div class="profile-top mt-4">
      <v-img
          ref="categoryImage"
          class="user-image text-center mb-4"
          :src="category.src ? category.src : 'https://via.placeholder.com/150'"
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
          >
          </v-file-input>
          <v-btn class="mb-30" fab x-small color="error" @click.stop="clearImageInput">
            <v-icon small>delete</v-icon>
          </v-btn>
        </v-card-title>

          <v-chip
              small
              label
              color="error"
              class="center mt-15"
              v-if="validationError !== true"
          >
            {{ validationError }}
          </v-chip>


      </v-img>
      <div class="user-list-content">
        <div class="text-center">
          <h3 class="fw-bold">
            {{ category.name }}
            <v-btn class="float-right mb-30" fab x-small color="primary" @click.stop="openCategoryNameDialog">
              <v-icon small>edit</v-icon>
            </v-btn>
          </h3>
          <h3 class="fw-bold"> {{ category.name_ar }}</h3>
        </div>
      </div>
    </div>

    <!-- Category Name Dialog -->
    <v-dialog v-model="categoryNameDialog" max-width="600px">
      <v-card>
        <v-card-title>
          Edit Name
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-xl pt-0>
            <v-layout row wrap>
              <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                <div>
                  <v-text-field
                      v-model="category.name"
                      label="Name"
                      filled
                      @change="changed=true"
                  >
                  </v-text-field>
                  <v-text-field
                      v-model="category.name_ar"
                      label="Name Arabic"
                      filled
                      @change="changed=true"
                  >
                  </v-text-field>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <!--          <v-btn color="primary" disabled @click.stop="">Save</v-btn>-->
          <v-btn color="warning" @click.stop="closeCategoryNameDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="user-activity border-bottom-light-1">
      <ul class="list-inline d-inline-block">
        <li>
          <!--          <span class="fw-bold">{{ category.ads_count }}</span>-->
          <span>Parent: </span>
          <v-chip class="ma-2">{{ category.parent_id }}</v-chip>
          <v-btn class="float-right mt-2" fab x-small color="primary" @click.stop="parentDialog=true">
            <v-icon small>edit</v-icon>
          </v-btn>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab x-small color="info" @click.stop="selectParent(null)" class="mx-2" v-bind="attrs" v-on="on">
                <v-icon small>home</v-icon>
              </v-btn>
            </template>
            <span>Make this main category (has no parent)</span>
          </v-tooltip>
          <!--          <v-btn color="primary" @click.stop="">Select</v-btn>-->
          <v-dialog v-model="parentDialog" max-width="700px">
            <v-card>
              <v-card-text>
                <v-container fluid grid-list-xl pt-0>
                  <v-layout row wrap>
                    <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                      <div>
                        <v-card :loading="loading" height="2px" flat></v-card>
                        <v-treeview
                            v-model="tree"
                            :open="open"
                            :items="categories"
                            item-key="id"
                            activatable
                            :active="active"
                            v-bind:style="rowStyle"
                            @update:active="selectParent"
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
                        </v-treeview>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <!--                <v-btn color="primary" disabled @click.stop="" ref="saveBtn">Save</v-btn>-->
                <v-btn color="warning" @click.stop="closeParentDialog">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </li>
      </ul>
      <v-card-actions>
        <v-btn
            v-if="isNew"
            color="primary"
            :disabled="!changed || loading || !$can(CREATE,RESOURCE)"
            @click.stop="createCategory"
            :loading="loading"
        >Create & Close
        </v-btn>
        <v-btn
            v-else
            color="primary"
            :disabled="!changed || loading || !$can(UPDATE,RESOURCE)"
            @click.stop="updateCategory"
            :loading="loading"
        >Save & Close
        </v-btn>
      </v-card-actions>
    </div>


    <div v-if="!isNew" class="user-activity text-center">
      <ul class="list-inline d-inline-block">
        <li>
          <span class="fw-bold">{{ category.ads_count }}</span>
          <span>Ads</span>
        </li>
      </ul>
    </div>


    <app-card
        v-if="!isNew"
        :heading="$t('message.options')"
        customClasses="mb-30"
        colClasses="xl12 lg12 md12 sm12 xs12"
    >
      <v-simple-table class="border-top-1 border-bottom-light-1">
        <thead>
        <tr>
          <td class="fw-bold">Name</td>
          <td class="fw-bold">Name Arabic</td>
          <td class="fw-bold">Required</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(option,index) in options" :key="option.id" class="border-top-1">
          <td>{{ option.name }}</td>
          <td>{{ option.name_ar }}</td>
          <td>{{ option.required ? "Yes" : "No" }}</td>
          <td>
            <v-btn fab x-small color="primary" @click.stop="openOptionDialog(option,index)"
                   :disabled="loading || !$can(UPDATE,RESOURCE)">
              <v-icon small>edit</v-icon>
            </v-btn>
            <v-btn fab x-small color="error" @click.stop="openConfirmationDialog(option)" class="mx-2"
                   :disabled="loading || !$can(UPDATE,RESOURCE)">
              <v-icon small>delete</v-icon>
            </v-btn>
          </td>
        </tr>
        </tbody>
      </v-simple-table>
      <v-btn class="mt-6" fab x-small color="primary" @click.stop="openOptionDialog(null,null,true)"
             :disabled="loading || !$can(UPDATE,RESOURCE)">
        <v-icon small>add</v-icon>
      </v-btn>
    </app-card>

    <app-card
        v-if="!isNew"
        :heading="$t('message.options')"
        customClasses="mb-30"
        colClasses="xl12 lg12 md12 sm12 xs12"
    >
      <v-simple-table class="border-top-1 border-bottom-light-1">
        <thead>
        <tr>
          <td class="fw-bold">Name</td>
          <td class="fw-bold">Name Arabic</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(option,index) in paymentOptions" :key="option.id" class="border-top-1">
          <td>{{ option.name }}</td>
          <td>{{ option.name_ar }}</td>
          <td>
            <v-switch
                :loading="loading"
                :input-value="option.exist"
                :disabled="loading || !$can(UPDATE,RESOURCE)"
                @change="updateCategoryPaymentType(option)"
            ></v-switch>
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </app-card>


    <!-- Category Option Dialog -->
    <v-dialog v-model="optionDialog" max-width="600px" @click:outside="closeOptionDialog">
      <v-card>
        <v-card-title>
          Category Option
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-xl pt-0>
            <v-layout row wrap>
              <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                <div>
                  <category-option :is-new="isNewOption" :close="closeOptionDialog"></category-option>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <!--                <v-btn color="primary" disabled @click.stop="" ref="saveBtn">Save</v-btn>-->
          <!--          <v-btn color="warning" @click.stop="closeOptionDialog">Close</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!--    <v-card-actions>-->
    <!--      <v-btn color="primary" :disabled="!changed" @click.stop="" ref="saveBtn">Save</v-btn>-->
    <!--    </v-card-actions>-->
    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="confirmationDialog" max-width="500px" @click:outside="closeConfirmationDialog">
      <v-card>
        <v-card-title>
          Are you sure you want to delete this option?
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="error"
              @click.stop="deleteOption"
              :loading="loading"
              :disabled="loading"
          >
            Delete
          </v-btn>
          <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import Option from "./Option";
import Permissions from "../../store/modules/admin/permissions";

const categoryOptionTemplate = {
  name: '',
  name_ar: '',
  required: false,
}

export default {

  props: ['isNew', 'close'],

  components: {
    CategoryOption: Option
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

      isNewOption: false,
      loading: false,
      loader: null,
      changed: false,
      categoryNameDialog: false,
      optionDialog: false,
      confirmationDialog: false,
      imageFile: null,
      validationError: "",
      rules: [
        value => {
          this.validationError = !value || value.size < 2000000 || 'Image size should be less than 2 MB!'
          if (this.validationError !== true) {
            this.category.src = 'https://via.placeholder.com/150';
            this.category.image = '';
          }
          return this.validationError;
        },
      ],
      active: [],
      open: [],
      tree: [],
      rowStyle: {
        cursor: 'pointer'
      },
      parentDialog: false,
    }
  },

  computed: {
    category() {
      return this.$store.getters.selectedCategory.category;
    },
    options() {
      return this.$store.getters.selectedCategory.options;
    },
    categories() {
      return this.$store.getters.categories;
    },
    parent: {
      get() {
        return this.category.parent_id;
      },
      set(value) {
        this.category.parent_id = value;
      }
    },
    paymentOptions() {
      return this.$store.getters.categoryPaymentOptions;
    },
  },

  watch: {
    category: {
      handler() {
      }
    },
  },

  methods: {

    changeImage(file) {
      console.log(file)
      this.changed = true;
      if (file !== null) {
        this.category.src = URL.createObjectURL(file);
        this.category.image = file;
      }
      console.log(this.validationError);
    },

    openCategoryNameDialog() {
      this.categoryNameDialog = true;
    },

    closeCategoryNameDialog() {
      this.categoryNameDialog = false;
    },

    openOptionDialog(option, index = null, isNew = false) {
      this.isNewOption = isNew;
      let categoryOption = option !== null ? option : {
        name: '',
        name_ar: '',
        required: false,
      };
      this.$store.commit('setSelectedOption', categoryOption);
      this.$store.commit('setSelectedOptionIndex', index);
      this.optionDialog = true;
    },

    closeOptionDialog() {
      this.optionDialog = false;
      this.isNewOption = false;
      this.$store.commit('setSelectedOption', categoryOptionTemplate);
      this.$store.commit('setSelectedOptionIndex', null);
    },

    openConfirmationDialog(option) {
      this.confirmationDialog = true;
      this.selectedOption = option;
    },

    closeConfirmationDialog() {
      this.confirmationDialog = false;
      this.selectedOption = categoryOptionTemplate;
    },

    deleteOption() {
      this.loading = true;
      this.$store.dispatch('deleteOption', this.selectedOption).finally(() => {
        this.loading = false;
        this.confirmationDialog = false;
      });
    },

    selectParent(category) {
      this.parent = category ? category[0].id : null;
      this.changed = true;
      this.parentDialog = false;
    },

    closeParentDialog() {
      this.parentDialog = false;
      this.open = [];
      this.active = [];
      this.tree = [];
    },

    updateCategory() {
      this.loading = true;
      if (!this.isFormDataValid()) {
        this.$notify({
          group: 'loggedIn',
          type: 'error',
          text: 'Name in English and Arabic are required'
        });
        this.loading = false;
      } else {
        this.appendFormDataParams();
        this.$store.dispatch('updateCategory', this.categoryFormData).finally(() => {
          this.loading = false;
          this.changed = false;
          this.close();
        });
      }
    },

    createCategory() {
      this.loading = true;
      if (!this.isFormDataValid()) {
        this.$notify({
          group: 'loggedIn',
          type: 'error',
          text: 'Name in English and Arabic are required'
        });
        this.loading = false;
      } else {
        this.appendFormDataParams();
        this.$store.dispatch('createCategory', this.categoryFormData).finally(() => {
          this.loading = false;
          this.close();
        });
      }
    },

    updateCategoryPaymentType(payment_option) {
      payment_option.exist = !payment_option.exist;
      this.loading = true;
      this.$store.dispatch('updateCategoryPayment', payment_option).finally(() => {
        this.loading = false;
      });
    },

    isFormDataValid() {
      return !(this.category.name === '' || this.category.name_ar === '');
    },

    appendFormDataParams() {
      this.categoryFormData = new FormData();
      this.categoryFormData.append('name', this.category.name);
      this.categoryFormData.append('name_ar', this.category.name_ar);
      this.categoryFormData.append('image', this.category.image);
      this.category.parent_id = this.category.parent_id === null ? '' : this.category.parent_id;
      this.categoryFormData.append('parent_id', this.category.parent_id);
    },

    clearImageInput() {
      this.changed = true;
      this.category.src = 'https://via.placeholder.com/150';
      this.category.image = '';
      this.imageFile = null;
    },

    createOption() {
      this.$refs.option.createOption();
    }

  }
}

</script>
