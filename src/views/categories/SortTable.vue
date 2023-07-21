<template>

  <v-card class="px-2 py-2">

    <v-card-title>
      Categories
    </v-card-title>

    <v-simple-table
        v-bind:style="rowStyle"
    >
      <thead class="thead-dark">
      <tr>
        <!--        <th class="text-left">Id</th>-->
        <th class="text-left">Name</th>
        <th class="text-left">Name Arabic</th>
      </tr>
      </thead>

      <draggable v-model="categories" tag="tbody">
        <tr v-for="category in categories" :key="category.id">
          <!--          <td>{{ f_package.id }}</td>-->
          <td>{{ category.name }}</td>
          <td>{{ category.name_ar }}</td>
        </tr>
      </draggable>

    </v-simple-table>

    <v-card-actions>
      <v-row justify="space-between" class="py-4 px-2">
        <v-btn color="primary"
               @click.stop="save"
               :loading="loading"
               :disabled="loading">
          Save
        </v-btn>
        <v-btn color="warning" @click.stop="cancel">Cancel</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import draggable from "vuedraggable";

export default {
  props: ['close'],

  components: {
    draggable
  },

  oldCategories: null,

  created() {
    this.$options.oldCategories = this.categories;
  },

  computed: {
    categories: {
      get() {
        return this.$store.getters.categoriesToSort;
      },
      set(categories) {
        console.log(categories);
        this.$store.commit('setCategoriesToSort', categories);
      }
    }
  },

  data() {
    return {
      loading: false,
      rowStyle: {
        cursor: 'grab'
      },
      dragging: false
    };
  },

  methods: {
    save() {
      this.loading = true
      this.$store.dispatch('sortCategories', this.categories).finally(() => {
        this.loading = false;
        this.close();
      });
    },

    cancel() {
      this.$store.commit('setCategoriesToSort', this.$options.oldCategories);
      this.close();
    }
  },

};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>