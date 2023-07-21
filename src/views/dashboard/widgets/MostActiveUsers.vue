<template>
  <app-card
      heading="⭐ Most Active Users"
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
          v-for="(user, i) in users"
          :key="user.id"
      >
        <v-sheet
            tile
        >
          <v-row
              class="fill-height"
              alignr="center"
              justify="center"
          >
            <div class="thumbnail mb-2">
              <img
                  :src="user.photo ? user.photo : 'https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg'"
                  width="245" height="250"
                  class="img-responsive mx-auto">
              <v-card-title>{{ user.mobile }}</v-card-title>
              <v-card-subtitle>{{ user.name }}</v-card-subtitle>
              <h5 class="primary--text text-sm-center"><i class="zmdi zmdi-chart mr-2"></i>Ads: {{ user.ads_count }}
              </h5>
            </div>

          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="d-flex" slot="footer">
      <div class="w-50 text-sm-center mx-auto">
        <p class="mb-0 grey--text fs-12 fw-normal">Total Users</p>
        <h4 class="fw-bold">{{ totalUsers }}</h4>
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
    users() {
      return this.$store.getters['dashboard/stats'].users.most_active;
    },

    totalUsers() {
      return this.$store.getters['dashboard/stats'].users.total;
    },
  }
};
</script>
