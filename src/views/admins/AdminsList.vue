<template>
  <div>
    <page-title-bar></page-title-bar>


    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search" single-line @keypress.enter="getAdmins" v-model="search"></v-text-field>
      <v-btn icon @click="getAdmins">
        <v-icon>search</v-icon>
      </v-btn>
    </v-card-title>

    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card

            customClasses="mb-30"
            colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-data-table
              v-bind:headers="headers"
              v-bind:items="admins"
              :search="search"
              :options.sync="options"
              :server-items-length="meta.total"
              item-key="id"
              :loading="loading"
              loading-text="Loading... Please wait"
              :footer-props="{
                  showFirstLastPage: true
                }"
          >
            <template v-slot:item.edit="{ item }">
              <v-btn
                  class="mr-2" fab x-small color="primary"
                  :disabled="!$can(Permissions.actions.update,Permissions.resources.admin)"
                  @click.stop="showAdminDialog(item)"
              >
                <v-icon small>edit</v-icon>
              </v-btn>

              <v-btn
                  fab x-small color="error"
                  :disabled="!$can(Permissions.actions.delete,Permissions.resources.admin)"
                  @click.stop="showDeleteDialog(item)"
              >
                <v-icon small>delete</v-icon>
              </v-btn>

            </template>
          </v-data-table>

          <!-- Dialog Model -->
          <v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
            <v-card>
              <v-card-title>
                Admin
              </v-card-title>
              <v-card-text>


                <v-form v-model="form.valid" ref="form" lazy-validation>
                  <v-text-field
                      label="Name"
                      v-model="form.name"
                      :rules="form.nameRules"
                      :counter="10"
                      required
                  >
                  </v-text-field>


                  <v-text-field
                      label="E-mail"
                      v-model="form.email"
                      :rules="form.emailRules"
                      required
                  >
                  </v-text-field>

                  <v-text-field
                      label="Mobile"
                      v-model="form.mobile"
                      :rules="form.mobileRules"
                      required
                  >
                  </v-text-field>

                  <v-text-field
                      type="password"
                      label="Password"
                      v-model="form.password"
                      :rules="form.passwordRules"
                      :counter="8"
                      required
                  >
                  </v-text-field>

                  <v-btn
                      @click="submit"
                      :disabled="!form.valid"
                      color="success"
                      class="mr-3 mt-2"
                      :loading="loading"
                  >
                    <div v-if="new_admin">Create</div>
                    <div v-else>{{ $t("message.adminSubmitUpdate") }}</div>
                  </v-btn>
                  <!--                  <v-btn class="mt-2" @click="clear" color="primary">{{ $t("message.clear") }}</v-btn>-->
                  <v-btn class="float-right mt-2" color="warning" @click.stop="closeDialog">Cancel</v-btn>
                </v-form>

              </v-card-text>
            </v-card>
          </v-dialog>

          <v-tooltip top v-if="!$can(Permissions.actions.create,Permissions.resources.admin)">
            <template v-slot:activator="{ on }">
              <span class="mt-70" v-on="on">
                <v-btn disabled color="primary">
                  + {{ $t("message.adminAddNew") }}
                </v-btn>
              </span>
            </template>
            <span><v-icon>warning</v-icon> You are not authorized to do this action</span>
          </v-tooltip>

          <v-btn v-else @click.stop="newAdminDialog" color="primary">
            + {{ $t("message.adminAddNew") }}
          </v-btn>

        </app-card>
      </v-layout>
    </v-container>
    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="confirmationDialog" max-width="500px" @click:outside="closeConfirmationDialog">
      <v-card>
        <v-card-title>
          Are you sure you want to delete this admin?
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="error"
              @click.stop="deleteAdmin"
              :loading="loading"
              :disabled="loading"
          >
            Delete
          </v-btn>
          <v-btn color="warning" @click.stop="closeConfirmationDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>

import Permissions from "../../store/modules/admin/permissions";

export default {
  mounted() {
    this.$store.dispatch('getAdmins').finally(() => {
      this.loading = false;
    });
  },

  computed: {
    admins() {
      return this.$store.getters.admins
    },

    meta() {
      return this.$store.getters.admins_meta;
    }
  },
  data() {
    return {
      Permissions,
      dialog: false,
      search: "",
      new_admin: false,

      // Table data
      loading: true,
      options: {},
      headers: [
        {text: "ID", align: "left", value: "id"},
        {text: "Name", value: "name"},
        {text: "Email", value: "email"},
        {text: "Mobile", value: "mobile"},
        {text: "Edit/Delete", value: "edit"},
      ],

      form: {
        valid: false,
        name: "",
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 10 || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "E-mail must be valid"
        ],
        mobile: "",
        mobileRules: [
          v => !!v || "Mobile is required",
          v => /^\d+$/.test(v) ||
              "Number must be valid"
        ],
        password: "",
        passwordRules: [
          v => !!v || "Password is required",
          v => v.length >= 8 || "Password must be more than 8 characters"
        ]
      },

      confirmationDialog: false,
      adminToDelete: null,
    }
  },

  methods: {
    showAdminDialog(admin) {
      this.dialog = true;
      this.form.name = admin.name;
      this.form.email = admin.email;
      this.form.mobile = admin.mobile;
      this.form.id = admin.id;
    },

    newAdminDialog() {
      this.new_admin = true;
      this.dialog = true;
      this.form.name = "";
      this.form.email = "";
      this.form.mobile = "";
      this.form.password = "";
    },

    submit() {
      if (this.$refs.form.validate()) {
        const admin = {
          id: this.form.id,
          name: this.form.name,
          email: this.form.email,
          mobile: this.form.mobile,
          password: this.form.password
        }
        this.loading = true;
        if (this.new_admin) {
          this.$store.dispatch('createAdmin', admin).finally(() => {
            this.loading = false;
            this.new_admin = false;
            this.dialog = false;
          });
        } else {
          this.$store.dispatch('updateAdmin', {admin: admin, current_admin: false}).finally(() => {
            this.loading = false;
            this.dialog = false;
          });
        }
      }
    },
    clear() {
      this.$refs.form.reset();
    },

    closeDialog() {
      this.new_admin = false;
      this.dialog = false;
    },

    getAdmins() {
      this.loading = true;
      this.options.q = this.search;
      this.$store.dispatch('getAdmins', this.options)
          .finally(() => {
            this.loading = false;
          });
    },

    showDeleteDialog(admin) {
      this.confirmationDialog = true;
      this.adminToDelete = admin;
    },

    closeConfirmationDialog() {
      this.confirmationDialog = false;
      this.adminToDelete = null;
    },

    deleteAdmin() {
      this.loading = true;
      this.$store.dispatch('deleteAdmin', this.adminToDelete)
          .finally(() => {
            this.loading = false;
            this.closeConfirmationDialog();
          });
    },

  },

  watch: {
    options: {
      handler() {
        this.loading = true;
        if (this.search) this.options.q = this.search;
        this.$store.dispatch('getAdmins', this.options)
            .finally(() => {
              this.loading = false;
            });
      },
      deep: true
    }
  },
}
</script>