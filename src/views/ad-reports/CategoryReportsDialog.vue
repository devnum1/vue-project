<template>
  <div>


    <app-card
        colClasses="xl12 lg12 md12 sm12 xs12"
    >
      <v-card-title>
        Reports
      </v-card-title>
      <v-data-table
          v-bind:headers="headers"
          v-bind:items="reports"
          :options.sync="options"
          :server-items-length="meta.last_page"
          item-key="id"
          :loading="loading"
          loading-text="Loading... Please wait"
          :footer-props="{
                  showFirstLastPage: true
                }"
          class="table-cursor"
          v-bind:style="rowStyle"
      >
        <template v-slot:item.type="{ item }">
          <v-chip
              :color="item.type_color"
              dark
          >
            {{ item.type }}
          </v-chip>
        </template>

        <template v-slot:item.ad="{ item }">
          <v-btn :disabled="loading" :loading="loading" color="primary" small
                 @click="openDeleteReportDialog(item)">
            View Ad
          </v-btn>
        </template>

        <template v-slot:item.delete="{ item }">
          <v-btn class="mr-2" :disabled="loading || item.handled || !$can(UPDATE,RESOURCE)" :loading="loading"
                 color="info" fab x-small
                 @click="handleReport(item)">
            <v-icon>check</v-icon>
          </v-btn>

          <v-btn :disabled="loading || !$can(DELETE,RESOURCE)" :loading="loading" color="error " fab x-small
                 @click="openDeleteReportDialog(item)">
            <v-icon class="font-md">delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </app-card>


    <delete-confirmation-dialog
        ref="deleteConfirmationDialog"
        heading="Delete Confirmation"
        message="Are you sure you want to delete this report?"
        @onConfirm="deleteReport"
    >
    </delete-confirmation-dialog>

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
      RESOURCE: Permissions.resources.adReport,

      rowStyle: {
        cursor: 'pointer'
      },
      selectedReport: null,

      Permissions,
      loading: true,
      search: "",
      options: {},
      headers: [
        {text: "ID", align: "left", value: "id"},
        // {text: "Type", value: "type"},
        // {text: "Type Ar", value: "type_ar"},
        {text: "Comment", value: "comment"},
        {text: "Ad", value: "ad"},
        {text: "Handle / Delete", value: "delete"},
      ],
      dialog: false,
      blockDialog: false,
    };
  },
  watch: {
    options: {
      handler() {
        this.loading = true;
        this.$store.dispatch('reports/fetchCategoryReports', this.options)
            .finally(() => {
              this.loading = false;
            });
      },
      deep: true
    }
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    reports() {
      return this.$store.getters["reports/categoryReports"];
    },
    meta() {
      return this.$store.getters["reports/categoryReportsMeta"];
    },
  },

  methods: {
    fetchCategoryReports() {
      this.loading = true;
      this.$store.dispatch('reports/fetchCategoryReports', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    openDeleteReportDialog(report) {
      this.selectedReport = report;
      console.log(report)
      this.$refs.deleteConfirmationDialog.openDialog();
    },

    deleteReport() {
      this.loading = true;
      this.$store.commit('setSelectedAd', {id: this.selectedReport.ad_id})
      this.$store.dispatch('deleteAdReport', this.selectedReport).then(() => {
        this.$store.dispatch('reports/fetchCategoryReports');
        this.$store.dispatch('reports/fetchReportCategories');
        this.$store.dispatch('adminNotifications/fetchNotifications');
      }).finally(() => {
        this.loading = false
        this.$refs.deleteConfirmationDialog.close();
      });
    },

    openDialog() {
      this.open = true;
    },
    close() {
      this.open = false;
    },

    handleReport(report) {
      this.loading = true;
      this.$store.dispatch("reports/handleReport", report).then(() => {
        this.$store.dispatch('reports/fetchCategoryReports');
        this.$store.dispatch('reports/fetchReportCategories');
        this.$store.dispatch('adminNotifications/fetchNotifications');
        this.loading = false;
      })
    },

  },
};
</script>
