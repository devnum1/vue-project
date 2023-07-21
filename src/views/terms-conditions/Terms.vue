<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl pt-0>
      <app-card>

        <!-- Actions -->
        <div class="d-md-inline-flex mb-5">
          <v-select
              :items="langs"
              :item-value="'id'"
              :item-text="'title'"
              label="Language"
              class="mr-md-5" return-object
              v-model="selectedLang"
              @change="switchLang"
          ></v-select>
        </div>

        <wysiwyg v-model="currentTerms.terms" @change="saved=false"/>

        <v-btn
            color="primary"
            class="mt-5"
            :loading="loading"
            :disabled="saved || loading || !$canUpdate(RESOURCE)"
            @click="save">
          Save
        </v-btn>

      </app-card>

    </v-container>

  </div>
</template>

<script>

import Permissions from "../../store/modules/admin/permissions";

const languages = [
  {
    id: 1,
    title: "English"
  },
  {
    id: 2,
    title: "Arabic"
  },
];

export default {
  data: function () {
    return {

      RESOURCE: Permissions.resources.terms,

      langs: languages,
      selectedLang: languages[0],
      saved: true,
      loading: false,
    };
  },
  methods: {
    switchLang(lang) {
      this.selectedLang = lang;
    },

    save() {
      this.loading = true;
      this.$store.dispatch('terms/updateTerms', this.currentTerms)
          .then(() => this.saved = false)
          .finally(() => {
            this.loading = false;
          });
    },

    fetchTerms() {
      this.$store.dispatch('terms/fetchTerms');
    }
  },

  created() {
    this.fetchTerms();
  },

  computed: {
    allTerms() {
      return this.$store.getters['terms/terms'];
    },

    currentTerms() {
      return this.allTerms[this.selectedLang.id - 1];
    }
  }
};
</script>
