<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <v-container fluid p-10 grid-list-xl>
      <div>
        <div class="pa-6 project-detail-title">
          <h3 class="mb-0">{{ ad.title }}</h3>
        </div>
        <v-layout row wrap>
          <app-card
              colClasses="xl8 lg8 md12 sm12 xs12"
              customClasses="mb-0"
          >
            <!-- Description Details -->
            <div class="sec-title mb-4">
              <h4>Description</h4>
            </div>
            <div class="sec-content">
              <p>{{ ad.description }}</p>
            </div>
          </app-card>
          <!--selectedProject -->
          <app-card
              colClasses="xl4 lg4 md12 sm12 xs12"
          >
            <ad-details-card :ad="ad"></ad-details-card>
          </app-card>
        </v-layout>
        <v-layout row wrap>
          <app-card
              colClasses="xl6 lg6 md12 sm12 xs12"
          >
            <category-details-card :ad="ad"></category-details-card>
          </app-card>
          <app-card
              colClasses="xl6 lg6 md12 sm12 xs12"
          >
            <user-details-card :user="ad.user"></user-details-card>
          </app-card>
        </v-layout>

        <!--    Category Details    -->
        <v-layout row wrap>
          <app-card
              colClasses="xl8 lg8 md12 sm12 xs12"
          >
            <location-details-card :location="ad.location"></location-details-card>
          </app-card>
          <app-card
              colClasses="xl4 lg4 md12 sm12 xs12"
          >
            <featured-details-card :ad="ad"></featured-details-card>
          </app-card>
        </v-layout>

        <!--    Reports Details    -->
        <v-layout v-if="ad.reports_count > 0" row wrap>
          <app-card
              colClasses="xl8 lg8 md12 sm12 xs12"
          >
            <reports-details-card :ad="ad"></reports-details-card>
          </app-card>
        </v-layout>

        <v-layout row wrap>
          <!-- Gallery -->
          <app-card
              :heading="$t('message.images')"
              colClasses="xl8 lg8 md8 sm12 xs12"
              customClasses="mb-0"
          >
            <div>
              <div class="top-selling-widget project-gallery-wrap">
                <div v-for="(img,index) in adImages" :key="index">
                  <img class="img-responsive" :src="img.src"/>
                </div>
              </div>
            </div>
          </app-card>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>

// Widgets
import UserDetailsCard from './details-cards/UserDetailsCard';
import AdDetailsCard from './details-cards/AdDetailsCard';
import LocationDetailsCard from './details-cards/LocationDetailsCard';
import CategoryDetailsCard from './details-cards/CategoryDetailsCard';
import FeaturedDetailsCard from './details-cards/FeaturedDetailsCard';
import ReportsDetailsCard from './details-cards/ReportsDetailsCard';


export default {
  components: {
    UserDetailsCard,
    AdDetailsCard,
    LocationDetailsCard,
    CategoryDetailsCard,
    FeaturedDetailsCard,
    ReportsDetailsCard,
  },

  data() {
    return {
      loader: false,
    };
  },

  computed: {
    ad() {
      return this.$store.getters.selectedAd;
    },
    adImages() {
      return this.$store.getters.selectedAdImages;
    }
  },
  methods: {}
};
</script>
