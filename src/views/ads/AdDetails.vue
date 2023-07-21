<template>
  <div class="contact-tab-wrapper">
    <v-tabs v-model="active" slider-color="primary">
      <v-tab
        v-for="t in tabHead"
        :key="t.key"
        ripple
        class="text-capitalize"
        @change="changeFilter(t)"
      >
        {{ $t('message' + '.' + t.tab_name) }}
        <v-chip
          v-if="t.key === 'reported' && reportedCount > 0"
          class="ml-2 white--text text-sm-body-2"
          color="red"
          x-small
          title="Reported"
        >
          {{ reportedCount }}
        </v-chip>
      </v-tab>
      <v-tab-item>
        <br />
        <v-layout row wrap>
          <template v-for="(details, index) in ads">
            <ad-card
              :id="index"
              :key="'details' + index"
              :details="details"
              :show-ad="showAd"
              :open-delete-confirmation="openDeleteConfirmation"
              :open-disable-confirmation="openDisableConfirmation"
              :open-enable-confirmation="openEnableConfirmation"
              :tab="selectedTab"
            ></ad-card>
          </template>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <br />
        <v-layout row wrap>
          <template v-for="(details, index) in ads">
            <ad-card
              v-if="selectedTab === 'featured'"
              :id="index"
              :key="'featured' + index"
              :details="details"
              :show-ad="showAd"
              :open-delete-confirmation="openDeleteConfirmation"
              :open-disable-confirmation="openDisableConfirmation"
              :open-enable-confirmation="openEnableConfirmation"
              :tab="selectedTab"
            ></ad-card>
          </template>
        </v-layout>
      </v-tab-item>

      <v-tab-item>
        <br />
        <v-layout row wrap>
          <template v-for="(details, index) in ads">
            <ad-card
              v-if="selectedTab === 'blocked'"
              :key="'blocked' + index"
              :id="index"
              :details="details"
              :show-ad="showAd"
              :open-delete-confirmation="openDeleteConfirmation"
              :open-disable-confirmation="openDisableConfirmation"
              :open-enable-confirmation="openEnableConfirmation"
              :tab="selectedTab"
            ></ad-card>
          </template>
        </v-layout>
      </v-tab-item>

      <v-tab-item>
        <br />
        <v-layout row wrap>
          <template v-for="(details, index) in ads">
            <ad-card
              v-if="selectedTab === 'reported'"
              :id="index"
              :key="'reported' + index"
              :details="details"
              :show-ad="showAd"
              :open-delete-confirmation="openDeleteConfirmation"
              :open-disable-confirmation="openDisableConfirmation"
              :open-enable-confirmation="openEnableConfirmation"
              :tab="selectedTab"
            ></ad-card>
          </template>
        </v-layout>
      </v-tab-item>
    </v-tabs>
    <!-- Ad Details Dialog -->
    <v-dialog
      v-model="adDialog"
      @click:outside="closeAdDialog"
      @close="closeAdDialog"
      ref="adDialog"
    >
      <v-card>
        <v-btn
          class="my-3 ml-2 mr-2 float-right close-icon white--text"
          color="blue-grey lighten-2"
          fab
          small
          @click="closeAdDialog"
        >
          X
        </v-btn>
        <ad-details-page></ad-details-page>
      </v-card>
    </v-dialog>
    <delete-confirmation-dialog
      ref="deleteConfirmationDialog"
      heading="Delete Confirmation"
      message="Are you sure you want to delete this Ad permanently?"
      @onConfirm="deleteAd"
    >
    </delete-confirmation-dialog>
    <delete-confirmation-dialog
      ref="disableConfirmationDialog"
      heading="Disable Confirmation"
      message="Are you sure you want to block this Ad?"
      @onConfirm="disableAd"
    >
    </delete-confirmation-dialog>
    <delete-confirmation-dialog
      ref="enableConfirmationDialog"
      heading="Enable Confirmation"
      message="Are you sure you want to activate this Ad?"
      @onConfirm="enableAd"
    >
    </delete-confirmation-dialog>
  </div>
</template>

<script>
import AdDetailsPage from './AdDetailsPage';
import AdCard from './AdCard';

export default {
  components: {
    AdDetailsPage,
    AdCard,
  },

  data() {
    return {
      adDialogKey: 0,
      adDialog: false,
      active: null,
      selectAdToDelete: null,
      selectAdToDisable: null,
      selectAdToEnable: null,
      open: false,
      tabHead: [
        { key: 'all', tab_name: 'allAds' },
        { key: 'featured', tab_name: 'featured' },
        { key: 'blocked', tab_name: 'blocked' },
        { key: 'reported', tab_name: 'reported' },
      ],
      rowStyle: {
        cursor: 'pointer',
      },
      selectedTab: 'all',
    };
  },
  methods: {
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

    disableAd() {
      this.selectAdToDisable.block = true;
      this.loading = true;
      this.$store.dispatch('activateAd', this.selectAdToDisable).finally(() => {
        this.loading = false;
        this.$refs.disableConfirmationDialog.close();
      });
    },

    enableAd() {
      this.selectAdToEnable.block = false;
      this.loading = true;
      this.$store.dispatch('activateAd', this.selectAdToEnable).finally(() => {
        this.loading = false;
        this.$refs.enableConfirmationDialog.close();
      });
    },

    deleteAd() {
      this.loading = true;
      this.$store.dispatch('deleteAd', this.selectAdToDelete).finally(() => {
        this.loading = false;
        this.$refs.deleteConfirmationDialog.close();
        location.reload();
      });
    },

    openDeleteConfirmation(ad) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectAdToDelete = ad;
    },

    openDisableConfirmation(ad) {
      this.$refs.disableConfirmationDialog.openDialog();
      this.selectAdToDisable = ad;
    },

    openEnableConfirmation(ad) {
      this.$refs.enableConfirmationDialog.openDialog();
      this.selectAdToEnable = ad;
    },

    openDialog() {
      this.open = true;
    },
    close() {
      this.open = false;
    },

    changeFilter(t) {
      this.options.page = 1;
      this.selectedTab = t.key;
      this.$store.commit('resetAds');
      if (t.key === 'blocked') {
        this.options.blocked = true;
        delete this.options.featured;
        delete this.options.reported;
      } else if (t.key === 'featured') {
        this.options.featured = true;
        delete this.options.blocked;
        delete this.options.reported;
      } else if (t.key === 'reported') {
        this.options.reported = true;
        this.options.blocked = false;
        delete this.options.featured;
      } else {
        // All ads tab
        delete this.options.featured;
        delete this.options.reported;
        this.options.blocked = false;
      }
      this.$store.dispatch('fetchAds', this.options);
    },

    breadcrumb(ad) {
      let breadcrumb = '';
      if (ad.breadcrumb.length > 0) {
        ad.breadcrumb.forEach(
          (categoryName) => (breadcrumb += categoryName + ' > ')
        );
      } else breadcrumb = ad.category.name;
      return breadcrumb;
    },
  },

  computed: {
    ads() {
      return this.$store.getters.ads;
    },

    options() {
      return this.$store.getters.filterOptions;
    },

    selectedAd: {
      get: function () {
        return this.$store.getters.selectedAd;
      },

      set: function (value) {
        this.$store.commit('setSelectedAd', value);
      },
    },

    reportedCount() {
      return this.$store.getters.reportedCount;
    },
  },
};
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
