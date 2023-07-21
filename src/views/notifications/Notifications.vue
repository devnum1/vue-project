<template>
  <div class="contact-wrapper">
    <page-title-bar></page-title-bar>
    <v-container fluid pt-0 grid-list-xl>
      <v-layout row wrap>
        <app-card
            colClasses="xl12 lg12 md12 sm12 xs12"
            customClasses="mb-0 client-wrapper"
        >
          <div class="contact-tab-wrapper">
            <v-tabs v-model="active" slider-color="primary">
              <v-tab v-for="t in tabHead" :key="t.key" ripple class="text-capitalize" @change="changeTab(t)">
                {{ $t('message' + '.' + t.tab_name) }}
              </v-tab>

              <v-tab-item>
                <br>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg-12>
                    <messages-table></messages-table>
                  </v-flex>
                </v-layout>

              </v-tab-item>

              <v-tab-item>
                <br>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg-12>
                    <campaign></campaign>
                  </v-flex>
                </v-layout>

              </v-tab-item>

            </v-tabs>

          </div>
        </app-card>
      </v-layout>
    </v-container>
  </div>

</template>

<script>

import MessagesTable from "./MessagesTable";
import Campaign from "./Campaign";

export default {

  created() {
    this.$store.dispatch('notifications/fetchMessages');
  },

  components: {
    MessagesTable,
    Campaign,
  },

  data() {
    return {
      active: null,
      tabHead: [
        {key: "messages", tab_name: 'messages'},
        {key: "campaign", tab_name: 'campaign'},
      ],
      rowStyle: {
        cursor: 'pointer'
      },
      selectedTab: 'messages',
    }
  },
  methods: {

    fetchMessages() {
      this.$store.dispatch('notifications/fetchMessages');
    },

    changeTab(t) {
      this.selectedTab = t.key;
    },

  },

  computed: {

    messages() {
      return this.$store.getters["notifications/messages"];
    },

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