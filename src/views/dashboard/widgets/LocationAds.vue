<template>
  <div class="category-progress-wrap">
    <div class="d-custom-flex" v-for="city in topAdsCities" :key="city.id">
      <span class="mr-3 label">{{ city.name }}</span>
      <div class="progress-wrap">
        <span>({{ city.ads_count }}) {{ Math.round((city.ads_count / totalAds) * 100) }}%</span>
        <v-progress-linear :value="Math.round((city.ads_count / totalAds) * 100)" height="24"
                           color="info"></v-progress-linear>
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
    topAdsCities() {
      return this.$store.getters['dashboard/stats'].location.top_ads_per_city;
    },

    totalAds() {
      return this.$store.getters['dashboard/stats'].ads.count.total;
    }
  }
};
</script>