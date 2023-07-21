<template>
  <div class="category-progress-wrap">
    <div class="d-custom-flex" v-for="category in topAdsCategories" :key="category.id">
      <span class="mr-3 label">{{ category.name }}</span>
      <div class="progress-wrap">
        <span>({{ category.ads_count }}) {{ Math.round((category.ads_count / totalAds) * 100) }}%</span>
        <v-progress-linear :value="Math.round((category.ads_count / totalAds) * 100)" height="24" color="info"></v-progress-linear>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {};
  },

  computed: {
    topAdsCategories() {
      return this.$store.getters['dashboard/stats'].categories.top_ads;
    },

    totalAds() {
      return this.$store.getters['dashboard/stats'].ads.count.total;
    }
  }
};
</script>