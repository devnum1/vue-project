<template>
   <div class="app-card-content pt-0">
      <div class="desc-wrap">   
         <h6>Description :</h6>
         <p>
            {{ managementData.description }}
         </p>
      </div>   
      <div class="mb-4 project-team">
         <h6>Team Members :</h6>
         <div>
            <img class="img-circle thumb-gap rounded-circle" width="30px" height="30px" 
               v-for="(img,index) in managementData.teamImage" :key="index"
               :src="img"/>            
         </div>
      </div>   
      <div class="deadline-info mb-4">
         <h6>Deadline :</h6>
         <p>{{ managementData.deadline }}</p>
      </div>   
      <div class="progress-bar mb-5">
         <h6 class="v-input__prepend-outer mb-5">
            Progress : {{ managementData.progressValue }} %
         </h6>
         <v-flex d-flex justify-content-space-between text-center pa-0>
            <v-progress-linear v-model="managementData.progressValue" color="primary" height="7"></v-progress-linear>
         </v-flex>
      </div>   
      <div class="button-wrap text-right"> 
         <v-btn color="primary" medium 
            :to="`/${getCurrentAppLayoutHandler() + '/crm/projectDetails/'+ managementData.id}`">
            Learn More
         </v-btn>
      </div>            
   </div>
</template>
<script>
import api from "Api";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
   props:['managementData'],
   data() {
      return {
      };
   },
   methods: {
      getCurrentAppLayoutHandler() {
         return getCurrentAppLayout(this.$router);
      }
   }
};
</script>