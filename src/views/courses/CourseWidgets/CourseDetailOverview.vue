<template class="custom-flex">
   <div class="flex xs12 sm12 md12 lg12 xl12 courses-overview">
		<v-expansion-panels>
		    <v-expansion-panel 
		    	v-for="(list,key) in  CourseData.courseDetail.topics" 
		    	:key="key"
		    >
		      <v-expansion-panel-header>{{list.name}}</v-expansion-panel-header>
		      <v-expansion-panel-content>
		        <v-list v-for="(details,key) in list.courseDetail" :key="key">
					<v-list-item  :to="`/${getCurrentAppLayoutHandler() + '/courses/courses-detail'}`">
						<v-list-item-action>
							<v-icon>play_circle_filled</v-icon>	
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title  class="ma-0 layout row wrap justify-space-between">
								<v-flex xs12 sm12 md12 lg12 xl8 py-0 pl-0>
								{{details.name}}
								</v-flex>								
							</v-list-item-title>
						</v-list-item-content>
						<v-list-item-action>
							<v-flex xs12 sm12 md12 lg12 xl4 py-0>
								<div class="ma-0 layout row wrap justify-space-between">
									<div><a href="#" class="fs-12 fw-normal">Preview</a></div>
								</div>
							</v-flex>
						</v-list-item-action>
						<v-list-item-action>
							<v-flex xs12 sm12 md12 lg12 xl4 py-0>
								<div class="ma-0 layout row wrap justify-space-between">
									<div><span class="fs-12 fw-normal">{{details.time}}</span></div>
								</div>
							</v-flex>
						</v-list-item-action>
					</v-list-item>
					<v-divider></v-divider>
				</v-list>
		      </v-expansion-panel-content>
		    </v-expansion-panel>
		  </v-expansion-panels>      
   </div>
</template>

<script>
import CourseData from "../data";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
   data() {
		return {
         CourseData
      }
   },
	methods: {
		getCurrentAppLayoutHandler() {
			return getCurrentAppLayout(this.$router);
    	}
  	}
}
</script>