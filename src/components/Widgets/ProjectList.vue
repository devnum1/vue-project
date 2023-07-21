<template>
  <div class="table-responsive">
     <v-data-table
       :headers="headers"
       :items="projectData"
       class="elevation-1"
     >
      <template v-slot:item="{ item }">
        <tr>
         <td>{{ item.id }}</td>
         <td class="text-left">
            <router-link class="black--text" :to="`/${getCurrentAppLayoutHandler() + '/crm/projectDetails/'+ item.id}`">{{ item.name }}</router-link>         
         </td>
         <td class="text-left">{{ item.budget }}</td>
         <td class="text-left">{{ item.duration }}</td>
         <td class="text-left text-nowrap">{{ item.client }}</td>
         <td class="text-left text-nowrap">
            <img class="img-circle thumb-gap rounded-circle" width="25" height="25" 
                  v-for="(img,index) in item.teamImage" :key="index"
                  :src="img"/>
         </td>
         <td class="text-left" >
           <v-chip v-if="item.status == 'Active'" color="primary" text-color="white">{{ item.status }}</v-chip>
           <v-chip v-else color="error" text-color="white">{{ item.status }}</v-chip>
         </td>
         <td class="text-left">{{ item.deadline }}</td>
        </tr> 
       </template>      
     </v-data-table>
  </div>
</template>
<script>
import { getCurrentAppLayout } from "Helpers/helpers";
import api from "Api";   
export default {
   // ['shahsi'],
   data () {
      return {
         projectData: [],
         headers: [
          { text: 'Id', value: 'id', sortable: false},
          { text: 'Project Name', value: 'name', sortable: false},
          { text: 'Budget', value: 'budget', sortable: false},
          { text: 'Duration', value: 'duration', sortable: false},
          { text: 'Client', value: 'client', sortable: false},
          { text: 'Team', value: 'teamImage', sortable: false},
          { text: 'Status', value: 'status', sortable: false},
          { text: 'Deadline', value: 'deadline', sortable: false}          
        ]
      }
   },
   mounted(){
      this.getProjectData();
      // console.log(this.projectData+"mounted");
   },
   methods:{
      getProjectData(){
         this.loader = true;
         api
            .get("vuely/projectDetails.js")
            .then(response => {
               this.loader = false;
               this.projectData = response.data;
               // console.log(this.projectData);
               
            })
            .catch(error => {
               console.log("error" + error);
            });
      },
      getCurrentAppLayoutHandler() {
         return getCurrentAppLayout(this.$router);
      }
   }
}
</script>

