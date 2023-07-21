<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl py-0>

      <app-card
          :heading="$t('message.basicValidation')"
          customClasses="mb-30"
      >
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
              class="mr-3"
          >
            {{ $t("message.adminSubmitUpdate") }}
          </v-btn>
          <v-btn @click="clear" color="primary">{{ $t("message.clear") }}</v-btn>
        </v-form>
      </app-card>
    </v-container>
  </div>
</template>

<script>
export default {

  data() {
    return {
      form: {
        valid: false,
        name: this.$store.getters.currentAdmin.name,
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 10 || "Name must be less than 10 characters"
        ],
        email: this.$store.getters.currentAdmin.email,
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "E-mail must be valid"
        ],
        mobile: this.$store.getters.currentAdmin.mobile,
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
      }
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const admin = {
          id: this.$store.getters.currentAdmin.id,
          name: this.form.name,
          email: this.form.email,
          mobile: this.form.mobile,
          password: this.form.password
        }

        this.$store.dispatch('updateAdmin', {admin: admin, current_admin: true});
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
