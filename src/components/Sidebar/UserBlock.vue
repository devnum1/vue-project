<template>
  <v-list-item class="sidebar-profile">
    <v-list-item-avatar>
      <img src="/static/img/Logo-(Option-3).png" alt="avatar" height="40" width="40" class="img-responsive"/>
    </v-list-item-avatar>
    <v-list-item-content class="ml-3">
      <v-list-item-title><span>{{ admin.name }}</span></v-list-item-title>
    </v-list-item-content>
    <v-menu
        bottom
        offset-y
        left
        content-class="userblock-dropdown"
        nudge-top="-10"
        nudge-right="0"
        transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on" class="ma-0">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <div class="dropdown-content">
        <div class="dropdown-top white--text primary">
          <span class="white--text fs-14 fw-bold d-block">{{ admin.name }}</span>
          <span class="d-block fs-12 fw-normal">{{ admin.email }}</span>
        </div>
        <v-list class="dropdown-list">
          <template v-for="userLink in userLinks" v-if="userLink.id !== 4">
            <v-list-item :to="getMenuLink(userLink.path)" :key="userLink.id">
              <i :class="userLink.icon"></i>
              <span>{{ $t(userLink.title) }}</span>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item @click="logoutUser" :key="userLink.id">
              <i :class="userLink.icon"></i>
              <span>{{ $t(userLink.title) }}</span>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-menu>
  </v-list-item>
</template>

<script>
import {getCurrentAppLayout} from "Helpers/helpers";

export default {

  computed: {
    admin() {
      return this.$store.getters.currentAdmin
    }
  },

  data() {
    return {
      userLinks: [
        {
          id: 1,
          title: 'message.adminProfile',
          icon: 'ti-user mr-3 primary--text',
          path: '/admins/profile'
        },
        // {
        //   id: 2,
        //   title: 'message.inbox',
        //   icon: 'ti-email mr-3 success--text',
        //   path: '/inbox'
        // },
        // {
        //   id: 3,
        //   title: 'message.usersList',
        //   icon: 'ti-bell mr-3 info--text',
        //   path: '/users/users-list'
        // },
        {
          id: 4,
          title: 'message.logOut',
          icon: 'ti-power-off mr-3 error--text'
        }
      ]
    }
  },
  methods: {

    logoutUser() {
      this.$store.dispatch("signOut", this.$router);
    },

    getMenuLink(path) {
      return '/' + getCurrentAppLayout(this.$router) + path;
    }
  }
};
</script>
