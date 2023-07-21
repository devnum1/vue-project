<template>
   <app-card customClasses="magazine-stats-card">
		<div class="d-custom-flex align-items-center justify-space-between"
         :style="backgroundColor='black'">

         <div class="stats-card-title">   
				<span class="fs-12">
               <h2>
                  <i :class="icon"></i>
                  {{ title }}
               </h2><br>
            </span>
				<!-- <h5 class="mb-0" :class="extraClass">{{value}}</h5> -->
			</div><br>
			

         <slot></slot>

         
         <div class="stats-card-chart">
            <p>{{ viewer }}</p>
            <p>{{ $t('message.trade') }} : {{ trade }} %</p>
			</div>
		</div>
	</app-card>
</template>

<script>
import LineChartV4 from "Components/Charts/LineChartV4";

export default {
  props: ["title", "viewer", "trade", "dataSet", "icon", "color", "labels", "extraClass"],
  components: {
    LineChartV4
  }
};
</script>
