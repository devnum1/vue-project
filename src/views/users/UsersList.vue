<template>
  <div>
    <page-title-bar></page-title-bar>

    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search" single-line @keypress.enter="getUsers" v-model="search"></v-text-field>
      <v-btn icon @click="getUsers">
        <v-icon>search</v-icon>
      </v-btn>
      <v-chip> Country:</v-chip>
      <div class="float-right">
        <country-provider></country-provider>
      </div>
    </v-card-title>

    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
            customClasses="mb-30"
            colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-data-table
              v-bind:headers="headers"
              v-bind:items="users"
              :search="search"
              :options.sync="options"
              :server-items-length="meta.total"
              item-key="id"
              :loading="loading"
              loading-text="Loading... Please wait"
              :footer-props="{
                  showFirstLastPage: true
                }"

              @click:row="showUser"
              class="table-cursor"
              v-bind:style="rowStyle"
          >

            <template v-slot:item.blocked="{ item }">
                {{ item.blocked ? '🔴' : '🟢' }}
            </template>

          </v-data-table>
          <!-- User Profile Dialog -->
          <v-dialog v-model="dialog" max-width="600px">
            <v-card>
              <v-card-title>
                User Profile
              </v-card-title>
              <v-card-text>
                <v-container fluid grid-list-xl pt-0>
                  <v-layout row wrap>
                    <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                      <div>
                        <user-detail></user-detail>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-btn v-if="selectedUser.blocked" color="error" @click.stop="blockDialog=true">Unblock</v-btn>
                <v-btn v-else color="error" @click.stop="blockDialog=true">Block</v-btn>
                <v-btn color="warning" @click.stop="dialog=false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="blockDialog">
            <v-card>
              <v-card-title>
                <p v-if="selectedUser.blocked"> Are you sure you want to unblock this user ?</p>
                <p v-else> Are you sure you want to block this user ?</p>
              </v-card-title>
              <v-card-actions>
                <v-btn v-if="selectedUser.blocked" color="error" @click.stop="unblock">Yes</v-btn>
                <v-btn v-else color="error" @click.stop="block">Yes</v-btn>
                <v-btn color="secondary" @click.stop="blockDialog=false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import Permissions from "../../store/modules/admin/permissions";
import UserDetail from "Components/Widgets/UserDetail";
import CountryProvider from "../../components/Header/CountryProvider";

export default {
  data() {
    return {

      rowStyle: {
        cursor: 'pointer'
      },

      Permissions,
      loading: true,
      search: "",
      options: {},
      headers: [
        {text: "ID", align: "left", value: "id"},
        {text: "Name", value: "name"},
        {text: "Mobile", value: "mobile"},
        {text: "Email", value: "email"},
        {text: "Blocked", value: "blocked"},
      ],
      dialog: false,
      blockDialog: false,
    };
  },
  watch: {
    options: {
      handler() {
        this.loading = true;
        if (this.search) this.options.q = this.search;
        this.$store.dispatch('getUsers', this.options)
            .finally(() => {
              this.loading = false;
            });
      },
      deep: true
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    meta() {
      return this.$store.getters.meta;
    },
    selectedUser() {
      return this.$store.getters.selectedUser;
    }
  },
  mounted() {
    this.$store.dispatch('getUsers')
        .finally(() => {
          this.loading = false;
        });
  },
  methods: {
    getUsers() {
      this.loading = true;
      this.options.q = this.search;
      this.$store.dispatch('getUsers', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    showUser(user) {
      this.$store.commit('updateSelectedUser', user);
      this.dialog = true;
    },

    block() {
      this.blockDialog = false;
      this.$store.dispatch('block', this.selectedUser)
          .then(() => {
          });
    },

    unblock() {
      this.blockDialog = false;
      this.$store.dispatch('unblock', this.selectedUser)
          .then(() => {
          });
    },


  },
  components: {
    UserDetail,
    CountryProvider
  }
};
</script>
