<template>
   <div>
      <div class="top-selling-widget project-gallery-wrap">
         <slick :options="slickOptions">
               <div v-for="(img,index) in images" :key="index">
                  <img class="img-responsive" :src="img"/>
               </div>
         </slick>
      </div>
   </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick,
  },
  data() {
    return {
      images:[
         "/static/img/gridlist-1.jpg",
         "/static/img/gridlist-4.jpg",
         "/static/img/gridlist-5.jpg"
      ],
      slickOptions: {
         infinite: true,
         speed: 0,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         dots: false,
         fade: false,
         cssEase: 'linear',
         arrows: false,
         rtl: this.$store.getters.rtlLayout
      },
    };
  }
};
</script>
