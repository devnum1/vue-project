<template>
  <div>
    <v-simple-table>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Type</th>
        <th class="text-left">Title</th>
        <th class="text-left">Title Ar</th>
        <th class="text-left">Body</th>
        <th class="text-left">Body Ar</th>
        <th class="text-center"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="message in messages" :key="message.id">
        <td>{{ message.id }}</td>
        <td>{{ getType(message.type_id) }}</td>
        <td>{{ message.title }}</td>
        <td>{{ message.title_ar }}</td>
        <td>{{ message.body }}</td>
        <td>{{ message.body_ar }}</td>
        <td>
          <v-btn class="ma-2" color="info" fab x-small
                 :disabled="!$can(UPDATE,RESOURCE)"
                 @click="editDialog(message)"
          >
            <v-icon>edit</v-icon>
          </v-btn>

        </td>
      </tr>
      </tbody>
    </v-simple-table>

    <!-- Dialog Model -->
    <v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
      <v-card>
        <v-card-title>
          {{ getType(selectedMessage.type_id) }}
        </v-card-title>
        <v-card-text>


          <v-text-field label="Title" v-model="selectedMessage.title" required></v-text-field>
          <v-text-field label="Title Arabic" v-model="selectedMessage.title_ar" required></v-text-field>
          <v-text-field label="Body" v-model="selectedMessage.body" required></v-text-field>
          <v-text-field label="Body Arabic" v-model="selectedMessage.body_ar" required></v-text-field>

          <v-btn
              @click="updateMessage"
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
      RESOURCE: Permissions.resources.notificationMessage,

      dialog: false,
      loading: false,
    }
  },

  methods: {
    getType(message_type_id) {
      return types[message_type_id - 1];
    },

    updateMessage() {
      this.loading = true;
      this.$store.dispatch('notifications/updateMessage').finally(() => {
        this.loading = false;
        this.closeDialog();
      });
    },

    editDialog(message) {
      this.$store.commit('notifications/updateSelectedMessage', message);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },


  },

  computed: {
    messages() {
      return this.$store.getters["notifications/messages"];
    },

    selectedMessage() {
      return this.$store.getters["notifications/selectedMessage"];
    }
  }
}
</script>