<template>
   <div>
      <app-section-loader :status="loader"></app-section-loader>
      <vue-perfect-scrollbar style="height:310px" :settings="settings">
         <v-list class="card-list top-selling ongoing-projects">
          <v-list-item ripple v-for="( project, index ) in ongoingProjects" :key="index">
              <v-list-item-content>
                  <v-list-item-subtitle>
                     <h4 class="mb-4">Project {{project.id}}</h4>
                     <div class="mb-4">
                        <div class="d-flex align-items-center">
                           <span class="d-inline-block mb-2 fw-bold w-50">
                              <i class="zmdi zmdi-account-circle v-input__prepend-outer"></i> 
                              {{ $t('message.supervisor') }} :
                           </span> 
                           <span class="mb-2 w-50 text-truncate">{{project.supervisor}}</span>
                        </div>
                        <div class="d-flex align-items-center">
                           <span class="d-inline-block mb-2 fw-bold w-50">
                              <i class="zmdi zmdi-time v-input__prepend-outer"></i> 
                              {{ $t('message.duration') }} :
                           </span>   
                           <span class="mb-2 w-50 text-truncate">{{project.duration}}</span>
                        </div>
                        <div class="d-flex align-items-center">
                           <span class="d-inline-block mb-2 fw-bold w-50">
                              <i class="zmdi zmdi-money v-input__prepend-outer"></i> 
                              {{ $t('message.netWorth') }} :
                           </span>
                           <span class="mb-2 w-50 text-truncate">{{project.netWorth}}</span>  
                        </div>
                        <div class="d-flex align-items-center">
                           <span class="d-inline-block mb-2 fw-bold w-50">
                              <i class="zmdi zmdi-email v-input__prepend-outer"></i> 
                              {{ $t('message.email') }} : 
                           </span>
                           <span class="mb-2 w-50 text-truncate">{{project.email}}</span>   
                        </div>
                        <div class="d-flex align-items-center">
                           <span class="d-inline-block mb-2 fw-bold w-50">
                              <i class="zmdi zmdi-phone v-input__prepend-outer"></i> 
                              {{ $t('message.phone') }} :
                           </span>
                           <span class="mb-2 w-50 text-truncate">{{project.phone}}</span>   
                        </div>
                     </div>   
                     <div class="d-custom-flex justify-space-between align-items-center mb-4">
                        <span class="fw-bold">Progress :</span>
                        <span>{{ valueDeterminate }}%</span>
                     </div>  
                     <!-- <v-flex row justify-content-space-between text-center> -->
                        <v-progress-linear class="my-0" v-model="valueDeterminate" color="primary" height="7"></v-progress-linear>
                     <!-- </v-flex> -->
                  </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </v-list>
      </vue-perfect-scrollbar>
   </div>
</template>
<script>
export default {
  data() {
    return {
      loader: false,
      ongoingProjects: [
         {
            id: '1',
            supervisor : 'John Gena',
            duration:'3 Weeks',
            netWorth:'$2364378',
            email:'support@theironnetwork.org',
            phone:'+01 3456 25378'
         }
      ],
      valueDeterminate:30,
      settings: {
        maxScrollbarLength: 160
      }
    };
  }
};
</script>