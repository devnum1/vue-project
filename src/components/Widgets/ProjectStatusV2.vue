<template>
   <div>
      <app-section-loader :status="loader"></app-section-loader>
      <vue-perfect-scrollbar style="height:310px" :settings="settings">
         <v-list class="card-list top-selling project-status">
          <v-list-item ripple v-for="( project, index ) in progressStatus" :key="index">
              <v-list-item-content class="py-1">
                  <v-list-item-subtitle>
                     <div class="d-custom-flex justify-space-between align-items-center mb-4">
                        <div>
                           <span class="fw-bold">Project {{ project.id }}</span>
                        </div>
                        <div>
                           <v-badge :class="project.btnStatus">{{project.status}}</v-badge>
                        </div>                     
                     </div>
                     <v-progress-linear class="my-0" v-model="project.valueDeterminate" color="primary" height="7"></v-progress-linear>
                  </v-list-item-subtitle>
              </v-list-item-content>

          </v-list-item>
        </v-list>
      </vue-perfect-scrollbar>
   </div>
</template>
<script>
import api from "Api";
export default {
  data() {
    return {
      loader: false,
      progressStatus:[
         {
            id:'1',
            status:'Completed',
            btnStatus:"success",
            valueDeterminate:60,
         },
         {
            id:'2',
            status:'Pending',
            btnStatus:"error",
            valueDeterminate:40,
         },
         {
            id:'3',
            status:'Ongoing',
            btnStatus:"warning",
            valueDeterminate:20,
         },
         {
            id:'4',
            status:'Completed',
            btnStatus:"info",
            valueDeterminate:90,
         }
      ],
      settings: {
        maxScrollbarLength: 160
      }
    };
  }
};
</script>