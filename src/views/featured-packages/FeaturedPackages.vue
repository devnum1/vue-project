<template>
  <div>
    <page-title-bar></page-title-bar>
    <app-section-loader :status="loader"></app-section-loader>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xl12 md12 lg12 sm12 xs12>
          <div>
            <div class="pricing-wrapper">
              <div class="pricing-list">
                <v-layout row wrap row-eq-height>
                  <app-card
                      colClasses="xs12 sm4 md4 lg4 w-full"
                      customClasses="text-center"
                      :fullBlock="true"
                      v-for="f_package in packages"
                      :key="f_package.id"
                  >
                    <div class="pricing-icon mb-30">
                      <img :src="f_package.src ? f_package.src : '/static/img/pricing-icon.png'" alt="package card"
                           class="img-responsive" width=""
                           height=""/>
                    </div>
                    <h2 class="primary--text pricing-title">{{ f_package.name }}</h2>
                    <h2 class="primary--text pricing-title">{{ f_package.name_ar }}</h2>
                    <div class="mb-4">
                      <h2 class="amount-title">$ {{ f_package.cost }}</h2>
                      <span class="text-muted small">
                        <v-chip> Duration:</v-chip>
                        {{ f_package.duration_in_days }} Days</span>
                    </div>
                    <ul class="price-detail list-unstyled">
                      <li>
                        <v-chip> Limit:</v-chip>
                        {{ f_package.limit ? f_package.limit + ' Days' : 'Unlimited' }}
                      </li>
                    </ul>
                    <v-btn class="mr-2" color="primary" fab small @click="edit(f_package)" :disabled="!$can(UPDATE,RESOURCE)">
                      <v-icon small>edit</v-icon>
                    </v-btn>
                    <v-btn fab small color="error" @click.stop="openConfirmationDialog(f_package)"
                           :disabled="!$can(DELETE,RESOURCE)"
                    >
                      <v-icon small>delete</v-icon>
                    </v-btn>
                  </app-card>
                </v-layout>
              </div>
            </div>
          </div>
        </v-flex>

        <!-- Package Dialog -->
        <v-dialog v-model="dialog" max-width="700px" @click:outside="this.close">
          <package-dialog :is-new="newPackage" :close="close" ref="packageDialog"></package-dialog>
        </v-dialog>

        <!-- Package Sort Dialog -->
        <v-dialog v-model="sortDialog" max-width="700px" @click:outside="this.close">
          <package-sort-table :close="close"></package-sort-table>
        </v-dialog>

        <!-- Confirmation Dialog-->
        <v-dialog v-model="confirmationDialog" max-width="500px" @click:outside="closeConfirmationDialog">
          <v-card>
            <v-card-title>
              Are you sure you want to delete this package?
            </v-card-title>
            <v-card-actions>
              <v-btn
                  color="error"
                  @click.stop="deletePackage"
                  :loading="loading"
                  :disabled="loading"
              >
                Delete
              </v-btn>
              <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn class="mt-70 mr-2" @click="create" color="primary" :disabled="!$can(CREATE,RESOURCE)">
          + Add New
        </v-btn>
        <v-btn class="mt-70" @click="openSortDialog" color="info" :disabled="!$can(UPDATE,RESOURCE)">
          Sort
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PackageDialog from "./PackageDialog"
import PackageSortTable from "./SortTable"
import Permissions from "../../store/modules/admin/permissions";
import draggable from "vuedraggable";

export default {

  components: {
    PackageDialog,
    PackageSortTable,
    draggable,
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
      RESOURCE: Permissions.resources.featuredPackage,

      loader: true,
      loading: false,
      switchPlan: true,
      dialog: false,
      sortDialog: false,
      newPackage: false,
      confirmationDialog: false,
    };
  },

  computed: {
    packages() {
      return this.$store.getters.packages;
    }
  },

  created() {
    this.fetchPackages();
  },

  methods: {

    fetchPackages() {
      this.$store.dispatch('fetchPackages').then(() => {
        this.loader = false;
      });
    },

    deletePackage() {
      this.loading = true;
      this.$store.dispatch('deletePackage').finally(() => {
        this.closeConfirmationDialog();
        this.close();
      });
    },


    close() {
      this.newPackage = false;
      this.dialog = false;
      this.sortDialog = false;
      this.loading = false;
      if (this.$refs.packageDialog !== undefined) this.$refs.packageDialog.imageFile = null;
      this.$store.commit('updateSelectedPackage', {});
    },

    openDialog() {
      this.dialog = true;
    },

    edit(f_package) {
      this.$store.commit('updateSelectedPackage', f_package);
      this.openDialog();
    },

    create() {
      this.newPackage = true;
      this.$store.commit('updateSelectedPackage', {
        name: '',
        name_ar: '',
        cost: '',
        points: '',
        src: '',
        font_color: '',
        image: '',
        limit: ''
      });
      this.openDialog();
    },

    openConfirmationDialog(f_package) {
      this.$store.commit('updateSelectedPackage', f_package);
      this.confirmationDialog = true;
    },

    closeConfirmationDialog() {
      this.$store.commit('updateSelectedPackage', {});
      this.confirmationDialog = false;
    },

    openSortDialog() {
      this.sortDialog = true;
    },


  }
};
</script>
