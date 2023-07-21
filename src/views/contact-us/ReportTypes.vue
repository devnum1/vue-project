<template>
  <div>

    <!--  Loading Bar  -->
    <v-card :loading="loading" height="2px" flat></v-card>

    <v-simple-table>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Type</th>
        <th class="text-left">Type Arabic</th>
        <th class="text-center"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="type in types" :key="type.id">
        <td>{{ type.id }}</td>
        <td>{{ type.type }}</td>
        <td>{{ type.type_ar }}</td>
        <td>
          <v-btn class="ma-2" color="info" fab x-small
                 :disabled="!$can(UPDATE,RESOURCE)"
                 @click="editDialog(type)"
          >
            <v-icon>edit</v-icon>
          </v-btn>

          <v-btn fab dark x-small color="error" @click="confirmDeletion(type)">
            <v-icon dark small>delete</v-icon>
          </v-btn>

        </td>
      </tr>
      </tbody>
    </v-simple-table>

    <v-btn class="mt-5" color="primary" @click="openNewDialog">
      + Add New
    </v-btn>

    <!-- Dialog Model -->
    <v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
      <v-card>
        <v-card-title>
          New/Edit
        </v-card-title>
        <v-card-text>


          <v-text-field label="Title" v-model="selectedType.type" required></v-text-field>
          <v-text-field label="Title Arabic" v-model="selectedType.type_ar" required></v-text-field>

          <v-btn
              @click="save"
              :disabled="loading"
              color="success"
              class="mr-3 mt-2"
              :loading="loading"
          >
            <div>Save</div>
          </v-btn>

          <v-btn class="float-right mt-2" color="warning" @click.stop="closeDialog">Cancel</v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Confirm Dialog Model -->
    <v-dialog v-model="confirmDialog" max-width="500px" @click:outside="closeConfirmDialog">
      <v-card>
        <v-card-title>
          Are you sure you want to delete this type?
        </v-card-title>
        <v-card-text>

          <v-btn
              @click="deleteType"
              :disabled="loading"
              color="error"
              class="mr-3 mt-2"
              :loading="loading"
          >
            <div>Delete</div>
          </v-btn>

          <v-btn class="float-right mt-2" color="warning" @click.stop="closeConfirmDialog">Cancel</v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import Permissions from "../../store/modules/admin/permissions";

const types = ['Warning', 'Search', 'Voucher'];

export default {
  data() {
    return {

      /**
       * Permissions Constants
       */
      VIEW: Permissions.actions.view,
      CREATE: Permissions.actions.create,
      UPDATE: Permissions.actions.update,
      DELETE: Permissions.actions.delete,
      RESOURCE: Permissions.resources.contactUsReport,

      dialog: false,
      confirmDialog: false,
      loading: false,
      newType: false,
    }
  },

  methods: {
    getType(message_type_id) {
      return types[message_type_id - 1];
    },

    fetchTypes() {
      this.$store.dispatch('contactUs/fetchTypes');
    },

    updateMessage() {
      this.loading = true;
      this.$store.dispatch('notifications/updateMessage').finally(() => {
        this.loading = false;
        this.closeDialog();
      });
    },

    editDialog(type) {
      if (!this.newType) this.$store.commit('contactUs/setSelectedType', type);
      else this.$store.commit('contactUs/resetSelectedType');
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.newType = false;
      this.$store.commit('contactUs/resetSelectedType');
    },

    openNewDialog() {
      this.newType = true;
      this.editDialog(null);
    },

    save() {
      this.loading = true;
      if (this.newType) {
        this.$store.dispatch('contactUs/createType').finally(() => {
          this.loading = false;
          this.closeDialog();
        })
      } else {
        this.$store.dispatch('contactUs/updateType').finally(() => {
          this.loading = false;
          this.closeDialog();
        })
      }
    },

    confirmDeletion(type) {
      this.$store.commit('contactUs/setSelectedType', type);
      this.confirmDialog = true;
    },

    closeConfirmDialog() {
      this.$store.commit('contactUs/resetSelectedType');
      this.confirmDialog = false;
    },

    deleteType() {
      this.loading = true;
      this.$store.dispatch('contactUs/deleteType').finally(() => {
        this.loading = false;
        this.closeConfirmDialog();
      })
    },

  },

  computed: {
    types() {
      return this.$store.getters["contactUs/types"];
    },

    selectedType() {
      return this.$store.getters["contactUs/selectedType"];
    }
  },

  created() {
    this.fetchTypes();
  },
}
</script>