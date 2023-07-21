<template>
  <v-menu offset-y origin="right top" left content-class="language-dropdown" transition="slide-y-transition"
          nudge-top="-10" class="v-step-3">
    <template v-slot:activator="{ on }">
      <v-btn text icon v-on="on">
        <v-badge right overlap color="error" :value="reports.total" :content="reports.total">
          <i class="zmdi grey--text zmdi-alert-circle zmdi-hc-fw font-lg"></i>
        </v-badge>
      </v-btn>
    </template>
    <div class="dropdown-content">
      <div class="dropdown-top d-custom-flex justify-space-between primary">
        <span class="white--text fw-bold">Ad Reports</span>
      </div>
      <v-list class="dropdown-list">
        <v-list-item v-for="country in countries" :key="country.name" @click="changeCountry(country)">
          <v-badge right overlap color="error" :value="getCountryReportsCount(country)"
                   :content="getCountryReportsCount(country)">
            <i class="zmdi grey--text zmdi-hc-fw font-lg"></i>
          </v-badge>
          <img class="img-responsive mr-3" :src="`/static/flag-icons/${country.icon}.png`">
          <span>{{ country.name }}</span>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<script>
import {
  mapGetters
} from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedCountry", "countries"]),

    reports() {
      return this.$store.getters["adminNotifications/reports"];
    }
  },
  methods: {
    changeCountry(country) {
      this.$store.dispatch('changeCountry', country)
      this.redirectToReports();

      // Reload page
      this.$router.go(0);
    },

    getCountryReportsCount(country) {
      let conn = country.conn;
      return this.reports.countries[conn];
    },

    redirectToReports() {
      this.$router.push({
        name: 'ad-reports',
        // params: {
        //   param1: 'value1',
        //   param2: 'value2'
        // }
      });
    }
  }
};
</script>