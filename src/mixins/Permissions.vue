<script>

import Permissions from "../store/modules/admin/permissions";

const ADMIN_RESOURCE_ID = 2;
const PERMISSION_RESOURCE_ID = 6;

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
    }
  },

  computed: {
    admin() {
      return this.$store.getters.currentAdmin
    },

    selectedAdmin() {
      return this.$store.getters.selectedAdmin;
    },

    country() {
      return this.$store.getters.selectedCountry;
    },

    selectedAdminPermissions() {
      return this.$store.getters.selectedAdminPermissions;
    }
  },

  methods: {

    $can(action, resource, current_admin = true) {

      // check if admin is super
      const admin = current_admin ? this.admin : this.selectedAdmin;
      if (admin.is_super) return true;

      const permissions = current_admin ? this.admin.permissions : this.selectedAdminPermissions;
      let checkForCountry = true;
      if (resource.id === ADMIN_RESOURCE_ID || resource.id === PERMISSION_RESOURCE_ID) checkForCountry = false;

      // loop to query over permission
      if (!checkForCountry) {
        for (let i = 0; i < permissions.length; i++) {
          let permission = permissions[i];
          if (permission.action.id === action && permission.resource.id === resource.id) {
            return true
          }
        }
      } else {
        for (let i = 0; i < permissions.length; i++) {
          let permission = permissions[i];
          if (permission.action.id === action && permission.resource.id === resource.id && permission.country.id === this.country.id) {
            return true
          }
        }
      }

      return false;
    },

    $is_super() {
      return this.admin.is_super;
    },

    /**
     * CRUD permissions methods
     *
     * It removes permission action coupling with components
     */
    $canView(resource) {
      return this.$can(this.VIEW, resource);
    },

    $canCreate(resource) {
      return this.$can(this.CREATE, resource);
    },

    $canUpdate(resource) {
      return this.$can(this.UPDATE, resource);
    },

    $canDelete(resource) {
      return this.$can(this.DELETE, resource);
    }
  }
}

</script>