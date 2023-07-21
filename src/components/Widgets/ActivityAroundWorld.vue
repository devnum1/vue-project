<template>
   <div class="activity-around-world">
      <v-layout row wrap>
         <v-flex xl12 lg12 md12 xs12>
            <ul class="list-unstyled pl-0 country-progress">
               <li v-for="activitiy in activitiesInWorld" :key="activitiy.id" class="d-custom-flex align-items-center py-4">
						<img class="img-responsive mr-4" width="45" height="30" :src="`/static/flag-icons/${activitiy.iso}.png`">
						<div class="w-100">
							<div class="mb-2 d-custom-flex justify-space-between align-items-center">
								<h6 class="mb-0">{{activitiy.name}}</h6>
								<span class="fs-12 fw-normal grey--text">{{activitiy.value}}%</span>
							</div>
							<v-progress-linear :value="activitiy.value" height="4" class="ma-0"></v-progress-linear>
						</div>
               </li>
            </ul>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      activitiesInWorld: [
        {
          id: 1,
          iso: "icons8-austria",
          value: "42",
          name: "Austria - 4100"
        },
        {
          id: 2,
          iso: "icons8-japan",
          value: "31",
          name: "Japan-2300"
        },
        {
          id: 3,
          iso: "icons8-usa",
          value: "93",
          name: "USA-2300"
        },
        {
          id: 4,
          iso: "icons8-china",
          value: "15",
          name: "China-800"
        },
        {
          id: 5,
          iso: "icons8-france",
          value: "38",
          name: "France-3521"
        }
      ]
    };
  }
};
</script>