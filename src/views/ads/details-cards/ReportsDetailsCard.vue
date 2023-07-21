<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>Reports Details</h4>
      </div>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Count :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ reports.length }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Types :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item-action class="py-4">
      </v-list-item-action>
      <v-btn :disabled="loading" color="primary" medium @click="showReports">View All</v-btn>
      <v-btn class="ml-2 white--text" :loading="loading" color="green lighten-1" medium @click="clearAdReports">Clear Ad
        Reports
      </v-btn>
    </v-list>

    <template>
      <!-- Category Selection Dialog -->
      <v-dialog v-model="reportsDialog" @click:outside="reportsDialog=false" @close="reportsDialog=false"
                max-width="600">
        <v-card class="p-2">
          <reports></reports>
        </v-card>
      </v-dialog>

    </template>

  </div>

</template>
<script>

import Reports from './Reports'

export default {
  props: ['ad'],

  components: {
    Reports
  },

  data() {
    return {
      reportsDialog: false,
      loading: false,
    }
  },

  computed: {
    reports() {
      return this.$store.getters.adReports;
    }
  },

  methods: {
    showReports() {
      this.reportsDialog = true;
    },

    clearAdReports() {
      this.loading = true;
      this.$store.dispatch('deleteAdReport').then(() => {
        this.$store.commit('resetAdReports');
        this.$store.dispatch('fetchReportedCount');
        this.$store.dispatch('adminNotifications/fetchNotifications');
      }).finally(() => this.loading = false)
    },
  }
}
</script>