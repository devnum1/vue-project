<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>Location Details</h4>
      </div>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>City :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ location.city }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Town :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ location.town }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Local :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ location.sublocality ? location.sublocality : 'Not Set' }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Latitude :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ location.lat }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Longitude :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ location.lng }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Address :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <small>{{ location.formatted_address }}</small>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Address Arabic :</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <small>{{ location.formatted_address_ar }}</small>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>

export default {
  props: ['location']
}
</script>