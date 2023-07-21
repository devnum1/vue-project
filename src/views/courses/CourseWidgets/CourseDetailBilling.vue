<template>
   <app-card
      class="course-detail-billing-wrap cpb-24"
   >
      <div class="price-wrap">
         <span class="cmr-8 discount-price d-inline-block">${{CourseData.courseDetail.billingDetails.totalPrice*(100-CourseData.courseDetail.billingDetails.discountPercent)/100}}</span>
         <span class="cmr-8 base-price d-inline-block"><del>${{CourseData.courseDetail.billingDetails.totalPrice}}</del></span>
         <span class="discount-value d-inline-block">{{CourseData.courseDetail.billingDetails.discountPercent}} % off</span>
      </div>
      <p class="price-duration error--text ">
         <v-icon class="cmr-8">timer</v-icon>
         <span class="font-weight-bold cmr-8"> {{CourseData.courseDetail.billingDetails.discountTime}} </span> left at this price!
      </p>
      <div class="button-wrap">
         <v-btn 
            :to="`/${getCurrentAppLayoutHandler() + '/courses/sign-in'}`"
            class="error pa-4" block>{{$t('message.addToCart')}}
         </v-btn>
         <p class="text-center">{{CourseData.courseDetail.billingDetails.guarntee}}day money back garuntee</p>
      </div>
      <div class="incentives"> 
         <h4>Includes</h4>  
         <v-list 
            class="incentive-list"
            v-for="(feature,key) of CourseData.courseDetail.billingDetails.includes"
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
      <div class="coupon-available text-center">
         <a href="javascript:void(0)" class="accent-text">Have a coupon?</a>
      </div>
      <v-divider></v-divider>
      <div class="coupon-available text-center px-3">
         <a href="javascript:void(0)" class="accent-text">Share</a>
      </div>
   </app-card>
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
