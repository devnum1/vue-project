<template>
	<div>
      <page-title-bar></page-title-bar>
		<v-container fluid pt-0 grid-list-xl>
			<v-layout row wrap align-items-center search-wrap>
            <v-flex xs12 sm12 md12 lg12  align-items-center pt-0>
               <app-card
                  customClasses="mb-0 py-12"
               >
                  <v-layout row wrap >
                     <v-flex xs12 sm12 md12 lg3 align-items-center>
								<h2 class="mb-0">Search</h2> 
                     </v-flex>      
                     <v-flex xs12 sm12 md12 lg9 pb-0> 
                        <div class="d-flex search-field-wrap">   
                           <div class="w-75">
                              <v-text-field 
                                 class=" pt-0 pr-3"
                                 label="Search Projects"
                              >
                              </v-text-field>
                           </div>
                           <div>
                              <v-btn color="primary" class="my-0 ml-0 mr-2" medium>Search</v-btn>
                              <v-btn color="primary m-0" medium>Add<i class="material-icons">add</i></v-btn>
                           </div>
                        </div>
                     </v-flex>
                   </v-layout>
               </app-card>
            </v-flex>   
         </v-layout>   
         <div class="d-flex justify-space-between align-items-center pa-6 project-grid-title">
            <div class="title">
               <h3 class="mb-0">{{$t('message'+'.'+viewType)}}</h3>
            </div>

            <div class="text-right project-icon"> 
               <v-icon class="mr-2" :class="{active: isActive == 'grid'}" style="cursor: pointer;" @click="girdView(1)">apps</v-icon>
               <v-icon :class="{active: isActive == 'list'}" style="cursor: pointer;" @click="listView(2)">list</v-icon>
            </div>
         </div>      
			<v-layout row wrap>
            <app-card
               v-for="(data,index) in projectData" :key="index"
               :heading="$t('message'+'.'+data.name)"
					colClasses="xl4 lg4 md6 sm6 xs12" 
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
               v-show="selectedView == 'grid'"
				>
					<ProjectGridView :managementData="data"></ProjectGridView>
				</app-card>  
			</v-layout>
         <v-layout 
            row wrap
            v-show="selectedView == 'list'"
            >
            <app-card
               colClasses="xl12 lg12 md12 sm12 xs12"
               customClasses="mb-0"
            >             
            <ProjectListView ></ProjectListView>
            </app-card>
         </v-layout>
		</v-container>
	</div>
</template>

<script>

// widgets
import ProjectGridView from "Components/Widgets/ProjectGrid";
import ProjectListView from "Components/Widgets/ProjectList";
// import { projectData } from "./data.js";
import api from "Api";


export default {
   components: {
      ProjectGridView,
      ProjectListView
   },
   data() {
      return {
         projectData: [],
         viewType: "projectGrid",
         selectedView: "grid",
         isActive: 'grid'
      };
   },
   mounted() {
      this.getProjectData();
   },
   methods:{
      getProjectData() {
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
      listView(){
         this.viewType = "projectList";
         this.selectedView = "list";
         this.isActive = 'list';
      },
      girdView(){
         this.viewType = "projectGrid";
         this.selectedView = "grid";
         this.isActive = "grid";         
      }
  }
};
</script>