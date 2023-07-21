<template>
  <div>
    <page-title-bar></page-title-bar>

    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search" single-line @keypress.enter="" v-model="search"></v-text-field>
      <v-btn icon @click="">
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
          <v-simple-table>
            <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Mobile</th>
              <th class="text-center"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="admin in admins" :key="admin.id" v-if="admin.id !== 1">
              <td>{{ admin.id }}</td>
              <td>{{ admin.name }}</td>
              <td>{{ admin.email }}</td>
              <td>{{ admin.mobile }}</td>
              <td>
                <v-btn class="ma-2" color="info"
                       v-if="true"
                       :disabled="!$can(VIEW,Permissions.resources.permission)"
                       @click.stop="showAdmin(admin)"
                >
                  View
                </v-btn>

              </td>
            </tr>
            </tbody>
          </v-simple-table>


          <!-- Dialog Model -->
          <v-dialog v-model="dialog" max-width="700px">
            <v-card>
              <v-card-title>
                Admin
                <v-spacer></v-spacer>
                <v-overlay :value="loading">
                  <v-progress-circular
                      indeterminate
                      size="64"
                  ></v-progress-circular>
                </v-overlay>

                <v-chip class="mr-1"> Super:</v-chip>
                <v-switch
                    :input-value="selectedAdmin.is_super"
                    :disabled="loading || !$is_super()"
                    @change="toggleSuper"
                ></v-switch>
                <v-spacer></v-spacer>
                <v-chip> Country:</v-chip>
                <div class="float-right">
                  <country-provider></country-provider>
                </div>
              </v-card-title>
              <v-card-text>
                <v-simple-table>
                  <thead>
                  <tr>
                    <th class="text-left">Resource</th>
                    <th class="text-left">View</th>
                    <th class="text-left">Create</th>
                    <th class="text-left">Update</th>
                    <th class="text-left">Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="resource in Permissions.resources" :key="resource.id">
                    <td>{{ resource.name }}</td>
                    <td>
                      <v-switch
                          :input-value="$can(VIEW,resource,false)"
                          :disabled="loading || selectedAdmin.is_super"
                          @change="updateAdminPermission($can(VIEW,resource,false),resource,VIEW)"
                      ></v-switch>
                    </td>
                    <td>
                      <v-switch
                          :input-value="$can(CREATE,resource,false)"
                          :disabled="loading || selectedAdmin.is_super"
                          @change="updateAdminPermission($can(CREATE,resource,false),resource,CREATE)"
                      ></v-switch>
                    </td>
                    <td>
                      <v-switch
                          :input-value="$can(UPDATE,resource,false)"
                          :disabled="loading || selectedAdmin.is_super"
                          @change="updateAdminPermission($can(UPDATE,resource,false),resource,UPDATE)"
                      ></v-switch>
                    </td>
                    <td>
                      <v-switch
                          :input-value="$can(DELETE,resource,false)"
                          :disabled="loading || selectedAdmin.is_super"
                          @change="updateAdminPermission($can(DELETE,resource,false),resource,DELETE)"
                      ></v-switch>
                    </td>
                  </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
              <v-card-actions>
                <v-btn color="error" @click.stop="closeDialog">Close</v-btn>
              </v-card-actions>
            </v-card>
            <v-overlay :value="loading">
              <v-progress-circular
                  indeterminate
                  size="64"
              ></v-progress-circular>
            </v-overlay>
          </v-dialog>

        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>


<script>

import Permissions from "../../store/modules/admin/permissions";
import CountryProvider from "../../components/Header/CountryProvider";

const ADMIN_RESOURCE_ID = 2;
const PERMISSION_RESOURCE_ID = 6;

export default {

  components: {
    CountryProvider
  },

  beforeCreate() {
    this.$store.dispatch('getAdmins');
  },

  computed: {
    admins() {
      return this.$store.getters.admins
    },

    selectedAdmin() {
      return this.$store.getters.selectedAdmin;
    },

    selectedAdminPermissions() {
      return this.$store.getters.selectedAdminPermissions;
    },

    selectedCountry() {
      return this.$store.getters.selectedCountry;
    },

  },
  data() {
    return {
      Permissions,
      VIEW: Permissions.actions.view,
      CREATE: Permissions.actions.create,
      UPDATE: Permissions.actions.update,
      DELETE: Permissions.actions.delete,
      search: "",
      loading: false,
      dialog: false,
      overlay: false,
    }
  },

  methods: {
    showAdmin(admin) {
      this.loading = true;
      this.$store.commit('setSelectedAdmin', admin);

      this.$store.dispatch('fetchAdminPermissions', admin).then(() => {
        this.loading = false;
        this.dialog = true;
      })
    },

    closeDialog() {
      this.$store.commit('setSelectedAdmin', {});
      this.dialog = false;
    },

    updateAdminPermission(flag, resource, action) {
      this.loading = true;
      let permission = {
        admin: this.selectedAdmin,
        admin_id: this.selectedAdmin.id,
        resource_id: resource.id,
        action_id: action,
        flag: flag
      }

      if (resource !== ADMIN_RESOURCE_ID || resource !== PERMISSION_RESOURCE_ID) permission.country_id = this.selectedCountry.id;

      this.$store.dispatch('updateAdminPermission', permission).then(() => {
        this.loading = false;
      });
    },

    toggleSuper() {
      this.loading = true;
      this.$store.dispatch('changeSuper', this.selectedAdmin).then(() => {
        this.loading = false;
        this.$store.dispatch('getAdmins').then(() => {
          this.closeDialog();
        })
      });
    },

  }
}
</script>