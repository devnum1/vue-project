<template>
   <div>
		 <v-list class="card-list top-selling management-wrap">
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Budget :</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.budget }} </h5>
				</v-list-item-action>			
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Client:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.client }}</h5>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Department:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.department }}</h5>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Duration:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.duration }}</h5>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Project Manager:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.projectManager }}</h5>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Team:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="d-inline-block py-0 my-0">
					<img class="img-circle thumb-gap rounded-circle" width="30" height="30" 
						v-for="(img,index) in managementData.teamImage" :key="index"
						:src="img"/>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Status:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0" :class="managementData.statusColor">{{ managementData.status }}</h5>
				</v-list-item-action>
			</v-list-item>
			<v-list-item class="py-4">
				<v-list-item-content class="py-0">
					<v-list-item-title>Deadline:</v-list-item-title>
				</v-list-item-content>
				<v-list-item-action class="my-0">
					<h5 class="mb-0">{{ managementData.deadline }}</h5>
				</v-list-item-action>
			</v-list-item>
		</v-list>
   </div>
</template>
<script>

export default {
   props:['managementData']
}
</script>