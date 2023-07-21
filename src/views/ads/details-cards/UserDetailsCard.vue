<template>
  <div>
    <v-list class="card-list top-selling management-wrap">
      <div class="sec-title mb-4">
        <h4>User Details</h4>
      </div>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>ID:</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ user.id }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>User:</v-list-item-title>
        </v-list-item-content>
        <h5>{{ user.name }}</h5>
        <v-list-item-action class="d-inline-block py-0 my-0">
          <img class="img-circle thumb-gap rounded-circle" width="30" height="30" :src="user.image"/>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Mobile:</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ user.mobile }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Email:</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ user.email }}</h5>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="py-4">
        <v-list-item-content class="py-0">
          <v-list-item-title>Ads:</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <h5 class="mb-0">{{ user.total_ads }}</h5>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>

export default {
  props: ['user']
}
</script>