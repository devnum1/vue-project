<template>
    <app-card  
        class="about-instructor"
        v-if="CourseData.courseDetail"
        :heading="$t('message.aboutInstructor')"
		  colClasses="xs12 sm12 md12 lg12 xl12"
		  contentCustomClass="pt-0"
    >
	 	<div class="layout row wrap align-center justify-start mx-0 mt-0 mb-4">
			<div class="image-wrap mb-2">
				<img :src="CourseData.courseDetail.instructorInformation.image">
			</div>
			<div class="instructor-meta">
				<h4>{{CourseData.courseDetail.instructorInformation.name}}</h4>  
				<v-list 
					class="incentive-list"
					v-for="(feature,key) of CourseData.courseDetail.instructorInformation.features"
					:key="key"
				>
					<v-list-item>
						<v-list-item-action class="my-0 mr-1">
							<v-icon>{{feature.icon}}</v-icon>
						</v-list-item-action>
						<v-list-item-content class="py-0">
							<v-list-item-title><p class="mb-0">{{feature.feature}}</p></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</div>
	 	</div>
		<p>{{ CourseData.courseDetail.instructorInformation.content}}</p>
   </app-card>
</template>

<script>
import CourseData from "../data";
export default {
   data(){
		return{
         CourseData
      }
   }
}
</script>