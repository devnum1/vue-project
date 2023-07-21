<template>
   <app-card customClasses="magazine-stats-card crm-stats-card">
   <div class="pa-6 white--text" :class="bgColor">
		<div class="d-custom-flex align-items-center mb-2">
         <span  class="d-inline-block font-2x mr-2">
            <i :class="icon"></i>
         </span>
         <span class="d-inline-block font-lg fw-bold">{{ title }}</span>
      </div> 
      <div class="d-custom-flex align-items-center justify-space-between">
         <slot></slot>  
      </div>
      <div class="d-custom-flex align-items-center justify-space-between">
         <span>{{ viewer }}</span>
         <span>{{ $t('message.trade') }} : {{ trade }} %</span>
      </div>
      </div>
	</app-card>
</template>

<script>
export default {
  props: ["title", "viewer", "trade", "dataSet", "icon", "color", "labels", "extraClass", "bgColor"]
};
</script>
