<template>
  <div class="contact-tab-wrapper">
    <v-tabs v-model="active" slider-color="primary">
      <v-tab v-for="t in tabHead" :key="t.key" ripple class="text-capitalize" @change="changeFilter(t)">
        {{ $t('message' + '.' + t.tab_name) }}
      </v-tab>

      <v-tab-item>
        <br>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg-12>
            <template v-if="selectedTab === 'categories'">
              <categories-table></categories-table>
            </template>
          </v-flex>
        </v-layout>
      </v-tab-item>

      <v-tab-item>
        <br>
        <template v-if="selectedTab === 'settings'">
          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-4"> Auto Disable:</v-chip>
            <v-switch
                v-model="settings.auto_disable"

                :loading="loading"
                :disabled="loading"
                @change="toggleAutoDisable"
            ></v-switch>

          </v-layout>

          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-5"> 1~100:</v-chip>
            <v-text-field
                dense
                label="%"
                filled
                v-model="settings.views_ratios.p_0_to_100"
                @change=""
                style="max-width: 200px"
            >
            </v-text-field>
          </v-layout>

          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-5"> 100~500:</v-chip>
            <v-text-field
                dense
                label="%"
                filled
                v-model="settings.views_ratios.p_100_to_500"
                @change=""
                style="max-width: 200px"
            >
            </v-text-field>
          </v-layout>

          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-5"> 500~1000:</v-chip>
            <v-text-field
                dense
                label="%"
                filled
                v-model="settings.views_ratios.p_500_to_1000"
                @change=""
                style="max-width: 200px"
            >
            </v-text-field>
          </v-layout>

          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-5"> 1000~10000:</v-chip>
            <v-text-field
                dense
                label="%"
                filled
                v-model="settings.views_ratios.p_1000_to_10000"
                @change=""
                style="max-width: 200px"
            >
            </v-text-field>
          </v-layout>

          <v-layout row wrap
                    class="px-5"
          >
            <v-chip class="mr-4 mt-5"> 10000 ~ oo:</v-chip>
            <v-text-field
                dense
                label="%"
                filled
                v-model="settings.views_ratios.p_gt_10000"
                @change=""
                style="max-width: 200px"
            >
            </v-text-field>
          </v-layout>

          <!--  New Button  -->
          <v-btn
              :loading ="loading"
              :disabled="loading"
              class="mt-70" color="primary"
              @click="saveSettings"
          >
            Save
          </v-btn>

        </template>


      </v-tab-item>

      <v-tab-item>
        <br>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg-12>
            <template v-if="selectedTab === 'latest_reports'">
              <v-card :loading="loading" height="2px" flat></v-card>
              <reports-table></reports-table>
            </template>
          </v-flex>
        </v-layout>
        <template v-if="selectedTab === 'latest_reports'">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                        v-model="options.page"
                        class="my-4"
                        :length="meta.last_page"
                        @input="fetchPage"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </template>

      </v-tab-item>

    </v-tabs>
    <!-- Ad Details Dialog -->
    <v-dialog v-model="adDialog" @click:outside="closeAdDialog" @close="closeAdDialog" ref="adDialog">
      <v-card>
        <v-btn class="my-3 ml-2 mr-2 float-right close-icon white--text" color="blue-grey lighten-2" fab small
               @click="closeAdDialog">
          X
        </v-btn>
        <!--        <ad-details-page></ad-details-page>-->

      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import ReportsTable from "./ReportsTable";
import CategoriesTable from "./CategoriesTable";

export default {

  components: {
    CategoriesTable,
    ReportsTable,
  },

  created() {
    this.fetchReportCategories();
    this.fetchSpamSettings();
    console.log(this.settings)
  },

  data() {
    return {
      loading: false,
      adDialog: false,
      active: null,
      selectAdToDelete: null,
      selectAdToDisable: null,
      selectAdToEnable: null,
      open: false,
      tabHead: [
        // {key: "latest_reports", tab_name: 'latest_reports'},
        {key: "categories", tab_name: 'categories'},
        {key: "settings", tab_name: 'settings'},
      ],
      rowStyle: {
        cursor: 'pointer'
      },
      selectedTab: 'categories',
    }
  },
  methods: {
    fetchReports() {
      this.$store.commit('resetReports');
      this.loading = true;
      this.$store.dispatch('fetchReports', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    fetchReportCategories() {
      this.loading = true;
      this.$store.dispatch('reports/fetchReportCategories').finally(() => {
        this.loading = false;
      });
    },

    fetchSpamSettings() {
      this.loading = true;
      this.$store.dispatch('reports/fetchSpamSettings').finally(() => {
        this.loading = false;
      });
    },

    saveSettings() {
      this.loading = true;
      this.$store.dispatch('reports/updateSpamSettings').finally(() => {
        this.loading = false;
      });
    },

    closeAdDialog() {
      this.adDialog = false;
      this.$store.commit('resetSelectedAd');
    },
    showAd(ad) {
      this.selectedAd = ad;
      this.$store.commit('setSelectedAd', ad);
      this.adDialog = true;
      this.$store.dispatch('fetchAdReports');
    },

    deleteAd() {
      this.loading = true;
      this.$store.dispatch('deleteAd', this.selectAdToDelete).finally(() => {
        this.loading = false;
        this.$refs.deleteConfirmationDialog.close();
      });
    },

    changeFilter(t) {
      console.log(t)
      this.selectedTab = t.key;
      if (t.key === 'categories') {
        this.fetchReportCategories();
      }
    },

    fetchPage(page) {
      this.options.page = page;
    },

    toggleAutoDisable() {

    },

  },

  watch: {
    options: {
      handler() {
        this.fetchReports();
      },
      deep: true
    }
  },

  computed: {
    reports() {
      return this.$store.getters.reports;
    },

    options() {
      return this.$store.getters.reportsFilterOptions;
    },

    meta() {
      return this.$store.getters.reportsMeta;
    },

    settings() {
      return this.$store.getters["reports/spamSettings"];
    }

  }
}
</script>

<style scoped>

.close-icon {
  position: fixed;
  right: 50px;
  z-index: 100;
  /*float: right;*/
  /*top: 0;*/
}
</style>