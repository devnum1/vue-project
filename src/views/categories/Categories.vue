<template>
  <div class="hover-wrapper">
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
            customClasses="mb-20"
            colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-card-title>
            <v-chip> Country:</v-chip>
            <div class="float-right">
              <country-provider></country-provider>
            </div>
          </v-card-title>
          <v-treeview
              v-model="tree"
              :open="open"
              :items="categories"
              item-key="id"
              activatable
              :active="active"
              v-bind:style="rowStyle"
              @update:active="view"
              return-object
              item-children="childs"
          >
            <template slot="prepend" slot-scope="{ item, open }">
              <v-icon v-if="!item.file">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                {{ files[item.file] }}
              </v-icon>
            </template>
            <template slot="append" slot-scope="{ item }">
              {{ item.ads_count }}
              <v-btn
                  :disabled="!item.has_childs"
                  color="primary"
                  x-small
                  class="ml-2"
                  @click.stop="sort(item.childs)"
              >Sort
              </v-btn>
            </template>
          </v-treeview>

          <!-- Categories Sort Dialog -->
          <v-dialog v-model="sortDialog" max-width="700px" @click:outside="this.closeSortDialog">
            <category-sort-table :close="closeSortDialog"></category-sort-table>
          </v-dialog>


          <!-- User Profile Dialog -->
          <v-dialog v-model="dialog" max-width="700px" @click:outside="this.close">
            <v-card>
              <v-card-title>
                Category
              </v-card-title>
              <v-card-text>
                <v-container fluid grid-list-xl pt-0>
                  <v-layout row wrap>
                    <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                      <div>
                        <v-card :loading="loading" height="2px" flat></v-card>
                        <category :is-new="isNew" :close="close" ref="category"></category>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-row justify="space-between" class="mb-4 pr-2 pl-2">
                  <v-btn color="warning" @click.stop="close">Close</v-btn>
                  <div>
                    <v-btn v-if="!isNew" :right="true" color="info" @click.stop="duplicateCategory"
                           class="mr-2"
                           :disabled="!$can(CREATE,RESOURCE)"
                    >
                      Duplicate
                    </v-btn>
                    <v-btn v-if="!isNew" :right="true" color="error" @click.stop="openConfirmationDialog"
                           :disabled="!$can(DELETE,RESOURCE)"
                    >
                      <v-icon small>delete</v-icon>
                      Delete
                    </v-btn>
                  </div>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn class="mt-70" @click="newCategory" color="primary" :disabled="!$can(CREATE,RESOURCE)">
            + {{ $t("message.addNewCategory") }}
          </v-btn>
          <v-btn class="ml-2 mt-70" @click="sort(null)" color="primary">
            Sort
          </v-btn>
          <v-btn class="float-right mt-70" @click="cloneDialog=true" color="error" :disabled="!$is_super">
            <i class="zmdi zmdi-alert-triangle mr-2"></i>Clone
          </v-btn>
        </app-card>
      </v-layout>
    </v-container>
    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="confirmationDialog" max-width="700px" @click:outside="closeConfirmationDialog">
      <v-card>
        <v-card-title>
          <p>Are you sure you want to delete this category?</p>
          <v-alert
              class="text-break"
              border="left"
              type="error"
          ><b class="text-uppercase">Warning:</b> Deleting category will result in deleting all of the ads and
            sub-categories within it.
            Note this action is <b class="text-uppercase">irreversible</b>
          </v-alert>
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="error"
              @click.stop="deleteCategory"
              :loading="loading"
              :disabled="loading"
          >
            Delete
          </v-btn>
          <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--  Clone Dialog  -->
    <v-dialog v-model="cloneDialog" max-width="700px" @click:outside="closeCloneDialog"
              @close="closeCloneDialog">
      <clone-dialog :close="closeCloneDialog"></clone-dialog>
    </v-dialog>
  </div>
</template>

<script>

import Category from "./Category";
import CountryProvider from "../../components/Header/CountryProvider";
import Permissions from "../../store/modules/admin/permissions";
import CloneDialog from "./CloneDialog";
import CategorySortTable from "./SortTable";

export default {
  components: {
    CloneDialog,
    Category,
    CountryProvider,
    CategorySortTable,
  },

  data: () => ({

    /**
     * Permissions Constants
     */
    VIEW: Permissions.actions.view,
    CREATE: Permissions.actions.create,
    UPDATE: Permissions.actions.update,
    DELETE: Permissions.actions.delete,
    RESOURCE: Permissions.resources.category,

    active: [],
    open: [],
    tree: [],
    loading: false,
    rowStyle: {
      cursor: 'pointer'
    },
    dialog: false,
    sortDialog: false,
    isNew: false,
    confirmationDialog: false,
    cloneDialog: false,
  }),
  computed: {
    categories() {
      return this.$store.getters.categories;
    },

    selectedCategory() {
      return this.$store.getters.selectedCategory;
    },

  },

  mounted() {
    this.$store.dispatch('getCategoriesTree')
  },

  watch: {},

  methods: {

    view(category) {
      this.loading = true;
      this.dialog = true;
      this.active = [];
      this.$store.dispatch('fetchSelectedCategory', category[0]).finally(() => {
        this.loading = false;
      });
    },

    newCategory() {
      this.isNew = true;
      let newCategory = {
        name: '',
        name_ar: '',
        image: '',
        parent_id: '',
        src: ''
      }
      this.$store.commit('updateSelectedCategory', {category: newCategory});
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.isNew = false;
      this.$refs.category.changed = false;
      this.$refs.category.imageFile = null;
      let newCategory = {
        name: '',
        name_ar: '',
        image: '',
        parent_id: '',
        src: ''
      };
      this.$store.commit('updateSelectedCategory', {category: newCategory});
    },

    openConfirmationDialog(c) {
      this.confirmationDialog = true;
    },

    closeConfirmationDialog() {
      this.confirmationDialog = false;
    },

    deleteCategory() {
      this.loading = true;
      this.$store.dispatch('deleteCategory', this.selectedCategory).finally(() => {
        this.loading = false;
        this.closeConfirmationDialog();
        this.close();
      });
    },

    closeCloneDialog() {
      this.cloneDialog = false;
    },

    sort(categories) {
      categories === null ? this.$store.commit('setCategoriesToSort', this.categories)
          : this.$store.commit('setCategoriesToSort', categories);
      this.sortDialog = true;
    },

    duplicateCategory() {
      this.loading = true;
      this.$store.dispatch('duplicateCategory', this.selectedCategory.category).finally(() => {
        this.loading = false;
        this.close();
      });
    },

    closeSortDialog() {
      this.$store.commit('setCategoriesToSort', []);
      this.sortDialog = false;
    }
  }
}
</script>