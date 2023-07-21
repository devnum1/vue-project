<template>
  <app-card colClasses="xl3 lg4 md4 sm6 xs12">
    <v-layout wrap contact-item-info>
      <v-flex xs12 lg12 md12 sm-12 text-center>
        <v-chip
          v-if="details.is_featured"
          class="ma-2 featured-label"
          color="red darken-4"
          text-color="yellow accent-2"
        >
          <v-icon left> mdi-star </v-icon>
          Featured
        </v-chip>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            class="mx-auto"
            color="white lighten-4"
            max-width="450"
          >
            <div class="tab-image">
              <v-img
                lazy-src="https://via.placeholder.com/250"
                :src="
                  details.images[0]
                    ? details.images[0].thumbnail
                    : 'https://via.placeholder.com/200'
                "
                max-height="350"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out darken-3 v-card--reveal font-2x white--text"
                    style="height: 100%"
                    v-bind:style="rowStyle"
                    @click="showAd(details)"
                  >
                    <v-btn color="primary" @click="showAd(details)">
                      Details
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </div>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 lg12 md12 sm-12 text-center pt-0>
        <h5
          class="primary--text"
          v-bind:style="rowStyle"
          @click="showAd(details)"
        >
          {{ details.title }}
        </h5>
        <div class="xs12 md6">
          <v-chip class="ma-2" small outlined color="pink">
            <v-icon left>mdi-file-tree</v-icon>
            {{ details.category.name }}
          </v-chip>
          <br />
          <v-chip class="ma-2" small outlined color="secondary">
            <v-icon left>home</v-icon>
            {{ details.location.city }} > {{ details.location.town }}
          </v-chip>
          <br />
          <v-chip
            v-if="details.reports_count > 0"
            class="ma-2 mb-7"
            small
            color="error"
            v-bind:style="rowStyle"
            @click="showAd(details)"
          >
            <v-icon left>warning</v-icon>
            Reports : {{ details.reports_count }}
          </v-chip>
        </div>
      </v-flex>
    </v-layout>
    <v-list three-line class="icon">
      <v-list-item :ripple="false" class="pl-0">
        <v-list-item-action class="ma-0">
          <v-list-item-action-text class="d-flex">
            <v-btn
              :disabled="!$can(UPDATE, RESOURCE)"
              v-if="tab === 'blocked'"
              color="green lighten-1"
              class="mr-1 white--text"
              fab
              x-small
              @click="openEnableConfirmation(details)"
              title="Enable"
            >
              <v-icon class="font-md">check</v-icon>
            </v-btn>
            <v-btn
              :disabled="!$can(UPDATE, RESOURCE)"
              v-else
              color="warning"
              class="mr-1"
              fab
              x-small
              @click="openDisableConfirmation(details)"
              title="Disable"
            >
              <v-icon class="font-md">block</v-icon>
            </v-btn>
            <v-btn
              :disabled="!$can(DELETE, RESOURCE)"
              color="error "
              fab
              x-small
              @click="openDeleteConfirmation(details)"
            >
              <v-icon class="font-md">delete</v-icon>
            </v-btn>
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </app-card>
</template>

<script>
import Permissions from '../../store/modules/admin/permissions';

export default {
  props: [
    'details',
    'showAd',
    'openDisableConfirmation',
    'openDeleteConfirmation',
    'openEnableConfirmation',
    'tab',
  ],

  data() {
    return {
      /**
       * Permissions Constants
       */
      VIEW: Permissions.actions.view,
      CREATE: Permissions.actions.create,
      UPDATE: Permissions.actions.update,
      DELETE: Permissions.actions.delete,
      RESOURCE: Permissions.resources.ad,

      rowStyle: {
        cursor: 'pointer',
      },
    };
  },

  methods: {
    fetchAdReports(ad) {
      console.log(ad.id);
    },
  },
};
</script>

<style scoped>
.featured-label {
  position: absolute;
  z-index: 100;
  /*margin-left: -48px;*/
  /*margin-top: 40px;*/
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /*opacity: .8;*/
  position: absolute;
  width: 100%;
  background-color: rgba(13, 106, 127, 0.5);
}
</style>
