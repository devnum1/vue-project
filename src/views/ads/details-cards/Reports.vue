<template>
  <div>

    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
            customClasses="mb-30"
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
            <template v-slot:item.delete="{ item }">
              <v-btn :disabled="loading" :loading="loading" color="error " fab x-small
                     @click="openDeleteReportDialog(item)">
                <v-icon class="font-md">delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </app-card>
      </v-layout>
    </v-container>

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

export default {
  data() {
    return {

      rowStyle: {
        cursor: 'pointer'
      },
      selectedReport: null,

      Permissions,
      loading: false,
      search: "",
      options: {},
      headers: [
        {text: "ID", align: "left", value: "id"},
        {text: "Type", value: "type"},
        {text: "Type Ar", value: "type_ar"},
        {text: "Comment", value: "comment"},
        {text: "Delete", value: "delete"},
      ],
      dialog: false,
      blockDialog: false,
    };
  },
  watch: {
    options: {
      handler() {
        this.loading = true;
        this.$store.dispatch('fetchAdReports', this.options)
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
      return this.$store.getters.adReports;
    },
    meta() {
      return this.$store.getters.adReportsMeta;
    },
  },

  methods: {
    fetchAdReports() {
      this.loading = true;
      this.$store.dispatch('fetchAdReports', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    getColor(type) {
      if (type === 'Violence') return 'red'
      else return 'grey'
    },

    openDeleteReportDialog(report) {
      this.selectedReport = report;
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectedReport = report;
    },

    deleteReport() {
      this.loading = true;
      this.$store.dispatch('deleteAdReport', this.selectedReport).then(() => {
        this.$store.dispatch('fetchAdReports');
        this.$store.dispatch('fetchReportedCount');
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

  },
};
</script>
