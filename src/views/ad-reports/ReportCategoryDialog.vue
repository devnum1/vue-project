<template>
  <v-card>
    <v-card-title>
      Report Category
    </v-card-title>
    <v-card-text>
      <v-container fluid grid-list-xl pt-0>
        <v-layout row wrap>
          <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
            <div>
              <v-card :loading="loading" height="2px" flat></v-card>
              <div class="profile-top mt-4">
                <div class="user-list-content">
                  <v-flex xs12 md12 lg12 sm12 class="col-height-auto">
                    <div>
                      <v-text-field
                          v-model="category.name"
                          label="Name"
                          filled
                          @change="changed=true"
                      >
                      </v-text-field>
                      <v-text-field
                          v-model="category.name_ar"
                          label="Name Arabic"
                          filled
                          @change="changed=true"
                      >
                      </v-text-field>
                      <v-color-picker
                          dot-size="25"
                          mode="hexa"
                          swatches-max-height="200"
                          v-model="category.color"
                      ></v-color-picker>
                    </div>

                  </v-flex>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-row justify="space-between" class="mb-4 pr-2 pl-2">
        <v-btn color="primary"
               @click.stop="save"
               :loading="loading"
               :disabled="loading">
          <div v-if="category.editMode">Save</div>
          <div v-else>Create</div>
        </v-btn>
        <v-btn color="warning" @click.stop="close">Cancel</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

  props: ['saveCategory', 'close'],

  computed: {
    category() {
      return this.$store.getters["reports/selectedCategory"]
    }
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    save() {
      this.loading = true;
      this.saveCategory().then(() => {
        this.loading = false;
        this.close();
      });
    },
  }
}
</script>