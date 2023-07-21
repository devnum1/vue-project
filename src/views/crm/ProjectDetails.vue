<template>
	<div>
		<app-section-loader :status="loader"></app-section-loader>
		<page-title-bar></page-title-bar>
		<v-container fluid pt-0 grid-list-xl>
			<div v-if="selectedManagement !== null">
				<div class="pa-6 project-detail-title">
					<h3 class="mb-0">{{ $t('message'+'.'+selectedManagement.name) }}</h3>
				</div>
				<v-layout row wrap>
					<app-card
						colClasses="xl8 lg8 md12 sm12 xs12"
						customClasses="mb-0"
					>
						<!-- Description Details -->
                  <div class="sec-title mb-4">
						   <h4>Description</h4>
                  </div>
                  <div class="sec-content">
   						<p class="mb-2 fw-bold fs-14">{{ descriptionDetails.decriptionHeading }}</p>
   						<p>{{ descriptionDetails.description }}</p>
   						<ul class="pl-3">
   							<li v-for="(point,index) in descriptionDetails.descriptionPoints" :key="index">
   								{{ point }}
   							</li>
   						</ul>
                  </div>
					</app-card>
					<!--selectedProject -->
					<app-card
						colClasses="xl4 lg4 md12 sm12 xs12"
					>
						<management-details :managementData="selectedManagement"></management-details>
					</app-card>
				</v-layout>
				<!-- Files Uploaded -->
				<v-layout row wrap>
					<app-card
						:heading="$t('message.filesUploaded')"
						colClasses="xl8 lg8 md8 sm6 xs12"
						customClasses="mb-0"
					>
						<files-uploaded></files-uploaded>
					</app-card>
					<!-- Progress Bar -->
					<app-card
						colClasses="xl4 lg4 md4 sm6 xs12"
					>
                  <div class="mb-5">
						   <h5>Progress: {{ valueDeterminate }}%</h5>                 
						   <v-progress-linear class="my-2" v-model="valueDeterminate" color="primary" height="7"></v-progress-linear>
                  </div>
                  <div class="mb-5">
                     <h5>Progress: {{ valueDeterminate1 }}%</h5>                 
                     <v-progress-linear class="my-2" v-model="valueDeterminate1" color="primary" height="7"></v-progress-linear>
					   </div>
                   <div>
                     <h5>Progress: {{ valueDeterminate2 }}%</h5>                 
                     <v-progress-linear class="my-2" v-model="valueDeterminate2" color="primary" height="7"></v-progress-linear>
                  </div>
               </app-card>
				</v-layout>
				<v-layout row wrap>
					<!-- Statistics -->
					<app-card
						:heading="$t('message.statistics')"
						colClasses="xl8 lg8 md8 sm6 xs12"
						customClasses="mb-0"
					>
						<statistics
							:data="statisticsData.data"
							:labels="statisticsData.labels"
							:label="statisticsData.label"
							:labelX="statisticsData.label1"
							:labelY="statisticsData.label2"
						>
						</statistics>
					</app-card>
					<!-- Project Gallery -->
					<app-card
						:heading="$t('message.projectGallery')"
						colClasses="xl4 lg4 md4 sm6 xs12"
					>
						<project-gallery></project-gallery>
					</app-card>
				</v-layout>
			</div>
		</v-container>
	</div>
</template>

<script>

import api from "Api";

// Widgets
import FilesUploaded from 'Components/Widgets/FilesUploaded'
import ProjectGallery from 'Components/Widgets/ProjectGallery'
import ManagementDetails from 'Components/Widgets/ManagementDetails'
import Statistics from 'Components/Widgets/Statistics'

export default {
   components: {
      FilesUploaded,
      ProjectGallery,
      ManagementDetails,
      Statistics
   },
   data() {
      return {
			selectedManagement: null,
			loader: false,
			projectData: null,
			statisticsData: {
				labels: ['January', 'February', 'March', 'April', 'May','June', 'July'],
				data: ['60', '5', '100', '60', '170', '25', '60'],
				label: 'Progress',
				label1: 'Time',
				label2: 'Cost' 
			},
         valueDeterminate:"60",
         valueDeterminate1:"80",
         valueDeterminate2:"100",
         descriptionDetails:{
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            decriptionHeading : "Integer pharetra mi eu libero convallis ultricies",
            descriptionPoints : [
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               "Donec auctor sapien eget sem blandit pharetra.",
               "In sed tellus congue, rhoncus mi quis, iaculis magna.",
               "Vestibulum at mauris semper, tristique nulla et, tristique nulla.",
               "Vestibulum at mauris semper, tristique nulla et, tristique nulla."
            ]
         }
		};
	},
	mounted (){
		this.getProjectData();
	},
	methods:{
		getProjectData(){
			this.loader = true;
				api
					.get("vuely/projectDetails.js")
					.then(response => {
						this.loader = false;
						this.projectData = response.data;
						for (var i = 0; i < this.projectData.length; i++){
							if(this.projectData[i].id == this.$route.params.id){
								this.selectedManagement = {
									client: this.projectData[i].client,
									budget: this.projectData[i].budget,
									duration: this.projectData[i].duration,
									name: this.projectData[i].name,
									teamImage: this.projectData[i].teamImage,
									status: this.projectData[i].status,
									statusColor: this.projectData[i].statusColor,
									deadline: this.projectData[i].deadline,
									department: this.projectData[i].department,
									projectManager: this.projectData[i].projectManager
								}
							}
						}				
					})
					.catch(error => {
						console.log("error" + error);
					});
			
	   }
   }
};
</script>
