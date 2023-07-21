<template>
  <v-card>
    <v-card-title>
      <p>Are you sure you want to clone this categories?</p>
      <v-alert
          class="text-break"
          border="left"
          type="error"
      ><b class="text-uppercase">Warning:</b> Cloning category will result in deleting all of the ads and
        sub-categories within it in the selected country.
        Note this action is <b class="text-uppercase">irreversible</b>
      </v-alert>
    </v-card-title>
    <v-card-title>
      <v-chip> From:</v-chip>
      <div class="float-right">
        <country-provider></country-provider>
      </div>
    </v-card-title>
    <v-col
        cols="12"
        sm="6"
    >
      <v-select
          v-model="selectedCountries"
          :items="countries"
          label="To"
          multiple
          chips
          hint="Select countries to clone current categories to"
          persistent-hint
          :item-value="'conn'"
          :item-text="'name'"
      ></v-select>
    </v-col>
    <v-card-actions>
      <v-btn
          color="error"
          @click.stop="clone"
          :loading="loading"
          :disabled="loading"
      >
        Clone
      </v-btn>
      <v-btn color="warning" @click.stop="close">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CountryProvider from "../../components/Header/CountryProvider";

export default {
  components: {
    CountryProvider,
  },

  props: ['close'],

  data() {
    return {
      selectedCountries: [],
      loading: false,
    }
  },

  methods: {
    clone() {
      this.loading = true;
      this.$store.dispatch('cloneCategories', this.selectedCountries).finally(() => {
        this.loading = false;
        this.close();
      });
    },


  },

  computed: {
    countries() {
      let allCountries = this.$store.getters.countries;
      let otherCountries = [];
      for (let i = 0; i < allCountries.length; i++) {
        if (allCountries[i].id !== this.selectedCountry.id) otherCountries.push(allCountries[i]);
      }
      return otherCountries;
    },

    selectedCountry() {
      return this.$store.getters.selectedCountry;
    }
  }
}

</script>