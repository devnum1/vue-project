<template>
  <div class="session-wrapper">
    <div
      class="session-center text-center mx-auto my-12"
      style="max-width: 500px"
    >
      <div class="session-table-cell">
        <div class="session-content">
          <img
            :src="appLogo"
            class="img-responsive mb-4"
            width="78"
            height="78"
          />
          <h2 class="mb-4">{{ $t("message.loginToAdmin") }}</h2>
          <p class="fs-14">
            {{ $t("message.enterUsernameAndPasswordToAccessControlPanelOf") }}
            {{ brand }}.
          </p>
          <v-form v-model="valid" class="mb-5">
            <v-text-field
              label="E-mail ID"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              :rules="passwordRules"
              required
              @keyup.enter="submit"
            ></v-text-field>
            <v-checkbox
              color="primary"
              label="Remember me"
              v-model="checkbox"
            ></v-checkbox>
            <div>
              <v-btn large @click="submit" block color="primary" class="mb-2">{{
                $t("message.loginNow")
              }}</v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import AppConfig from "Constants/AppConfig";

export default {
  components: {
    SessionSliderWidget,
  },
  data() {
    return {
      checkbox: false,
      valid: false,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      appLogo: AppConfig.appLogo,
      brand: AppConfig.brand,
    };
  },
  methods: {
    submit() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("signIn", { user });
    },
  },
};
</script>
