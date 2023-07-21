<template>
  <div>
    <template v-for="(ad,index) in ads">
      <div :id="index" class="pa-4 white mb-8 product-list d-sm-flex">
        <div class="tab-image">
          <v-img class="mb-2" :contain="true" :src="ad.src" style="width: 100%;"/>
          <v-img :contain="true" :src="ad.src_ar" style="width: 100%;"/>
        </div>
        <div class="section-content pl-sm-6 pt-sm-0 pt-6">
          <h4>{{ ad.name }}</h4>
          <span class="fs-14 d-flex">
						<span class="primary--text"><v-chip small class="mr-2">Ends:</v-chip>
              <s v-if="isAdEnded(ad.ends_at)">{{ ad.ends_at_formatted }}</s>
              <span v-else>{{ ad.ends_at ? ad.ends_at_formatted : '-' }}</span>
              <v-chip v-if="isAdEnded(ad.ends_at)" x-small class="ml-2" color="error">Ended</v-chip>
            </span>
					</span>
          <p class="fs-14 mt-2">
            <v-chip small class="mr-2"> Referer:</v-chip>
            {{ ad.external ? ad.referer_link : getScreenName(ad.referer_screen) }}
          </p>

          <p class="fs-14">
            <v-chip small class="mr-2">
              Hits:
            </v-chip>
            {{ ad.hits }}
          </p>

          <p class="fs-14">
            <v-chip small class="mr-2">
              Active:
            </v-chip>
            <v-chip
                small
                pill
                class="white--text"
                :color="ad.active ? 'green' : 'red'"
            >
              <v-icon x-small v-if="ad.active">check</v-icon>
              <v-icon x-small v-else>block</v-icon>
            </v-chip>

          </p>
        </div>
        <div class="action-btn text-right">
          <div>
            <v-btn fab dark x-small color="primary" @click="openDialog(ad)">
              <v-icon dark small>edit</v-icon>
            </v-btn>
            <v-btn class="mt-2" fab dark x-small color="error" @click="confirm(ad)">
              <v-icon dark small>delete</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>

export default {

  props: ['open', 'openDeleteConfirmation'],

  data() {
    return {}
  },

  computed: {
    ads() {
      return this.$store.getters['mobileAds/ads'];
    }
  },
  methods: {
    openDialog(ad) {
      this.$store.commit('mobileAds/updateSelectedAd', ad);
      this.open();
    },

    confirm(ad) {
      this.$store.commit('mobileAds/updateSelectedAd', ad);
      this.openDeleteConfirmation();
    },

    getScreenName(screen_id) {
      const screens = this.$store.getters['mobileAds/adPages'];
      for (var i = 0; i < screens.length; i++) {
        if (screens[i].id === screen_id) return screens[i].name;
      }
    },

    isAdEnded(ends_date) {
      if (ends_date == null) return false;
      let now = new Date();
      let ends = new Date(ends_date);
      return ends <= now;
    }
  }
}
</script>
<style scoped>
.shoppingCart-btn {
  position: absolute;
  right: 0;
}
</style>