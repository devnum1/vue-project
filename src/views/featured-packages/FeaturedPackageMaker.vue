<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl fluid>
      <iframe src="https://dev.jufrah.com/tools/fcmaker" frameborder="0" style="min-height: 720px"></iframe>
    </v-container>
  </div>
</template>

<script>
import Permissions from "../../store/modules/admin/permissions";


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
      RESOURCE: Permissions.resources.featuredPackage,

    };
  },

  methods: {
      }
};
</script>
