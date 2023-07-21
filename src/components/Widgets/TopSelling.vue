<template>
  <app-card
      heading="🔥 Most viewed ads"
      :footer="true"
  >

    <v-carousel
        cycle
        light
        class="mx-auto"
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(ad, i) in ads"
          :key="ad.id"
      >
        <v-sheet
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="thumbnail mb-2">
              <img :src="ad.images[0].src" width="245" height="250"
                   class="img-responsive mx-auto">
              <v-card-title class="mx-auto">{{ ad.title }}</v-card-title>
              <h5 class="primary--text text-sm-center"><i class="zmdi zmdi-eye mr-2"></i>{{ ad.views }}</h5>
            </div>

          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="d-flex" slot="footer">
      <div class="w-50 text-sm-center mx-auto">
        <p class="mb-0 grey--text fs-12 fw-normal">Total Views</p>
        <h4 class="fw-bold">{{ totalViews }}</h4>
      </div>
    </div>

  </app-card>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        rtl: this.$store.getters.rtlLayout
      },
    };
  },

  computed: {
    ads() {
      return this.$store.getters['dashboard/stats'].ads.views.most_viewed;
    },

    totalViews() {
      return this.$store.getters['dashboard/stats'].ads.views.total_views;
    }
  }
};
</script>
