<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>Featured Details</h4>
      </div>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Package :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.package : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Price :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.price : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Ends :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ ad.is_featured ? ad.featured.ends : '-' }}</h5>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ['ad'],
};
</script>
