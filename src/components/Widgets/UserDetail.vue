<template>
  <div class="profile-head app-card mb-30">
    <div class="profile-top border-bottom-light-1">
      <div class="user-image text-center mb-4">
        <img :src="user.photo ? user.photo : 'https://via.placeholder.com/150'" class="rounded-circle" alt="user image"
             height="200px"/>
      </div>
      <div class="user-list-content">
        <div class="text-center">
          <h3 class="fw-bold">{{ user.name }}</h3>
          <h4 class="mb-30 mt-3">{{ user.mobile }}</h4>
        </div>
      </div>
    </div>
    <div class="user-activity text-center">
      <ul class="list-inline d-inline-block">
        <li>
          <span class="fw-bold">{{user.ads_count}}</span>
          <span>Ads</span>
        </li>
<!--        <li>-->
<!--          <span class="fw-bold">{{user.ads_count}}</span>-->
<!--          <span>Featured</span>-->
<!--        </li>-->
      </ul>
    </div>

    <v-simple-table>
      <tbody>
      <tr>
        <td>Email</td>
        <td>{{ user.email ? user.email : 'Not Set' }}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td v-if="user.gender === 'Male'">
          <v-icon>man</v-icon>
        </td>
        <td v-else-if="user.gender === 'Female'">
          <v-icon>female</v-icon>
        </td>
        <td v-else>Not Set</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>{{ user.lang === 'ar' ? 'Ar' : 'En'}}</td>
      </tr>
      <tr>
        <td>Notify</td>
        <td>{{ user.notify ? '✅' : '❌' }}</td>
      </tr>
      <tr>
        <td>Blocked</td>
        <td>{{ user.blocked ? '🔴' : '🟢' }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.getters.selectedUser;
    }
  }
}

</script>
