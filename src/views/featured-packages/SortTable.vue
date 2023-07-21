<template>

  <v-card class="px-2 py-2">

    <v-card-title>
      Package
    </v-card-title>

    <v-simple-table
        v-bind:style="rowStyle"
    >
      <thead class="thead-dark">
      <tr>
        <!--        <th class="text-left">Id</th>-->
        <th class="text-left">Name</th>
        <th class="text-left">Name Arabic</th>
        <th class="text-left">Cost</th>
      </tr>
      </thead>

      <draggable v-model="packages" tag="tbody">
        <tr v-for="f_package in packages" :key="f_package.id">
          <!--          <td>{{ f_package.id }}</td>-->
          <td>{{ f_package.name }}</td>
          <td>{{ f_package.name_ar }}</td>
          <td>{{ f_package.cost }}</td>
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

  oldPackages: null,

  created() {
    this.$options.oldPackages = this.packages;
  },

  computed: {
    packages: {
      get() {
        return this.$store.getters.packages;
      },
      set(list) {
        this.$store.commit('setPackages', list);
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
      this.$store.dispatch('sortPackages', this.packages).finally(() => {
        this.loading = false;
        this.close();
      });
    },

    cancel() {
      this.$store.commit('setPackages', this.$options.oldPackages);
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