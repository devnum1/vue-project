<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>Cateory Details</h4>
      </div>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Category :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.category.name }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Category Arabic :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.category.name_ar }}</h5>
        </v-list-item-action>
      </v-list-item>
      <div v-for="option in ad.options" :key="option.id">
        <v-list-item class="py-4">
          <v-list-item-content class="py-0">
            <v-list-item-title>{{ option.name }} :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="my-0">
            <h5 class="mb-0">{{ option.value.value }}</h5>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="py-4">
          <v-list-item-content class="py-0">
            <v-list-item-title>{{ option.name_ar }} :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="my-0">
            <h5 class="mb-0">{{ option.value.value_ar }}</h5>
          </v-list-item-action>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>
<script>

export default {
  computed: {
    ad() {
      return this.$store.getters.selectedAd;
    }
  }
}
</script>