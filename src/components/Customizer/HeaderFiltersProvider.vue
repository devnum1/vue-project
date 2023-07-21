<template>
   <div class="header-filter">
      <h5 class="text-sm-center mb-4">{{$t('message.headerFilters')}}</h5>
      <v-list>
         <v-list-item :ripple="false" :class="{'active-theme': headerFilter === activeHeaderFilter}" @click="changeHeaderFilter(headerFilter)" v-for="headerFilter in headerFilters" :key="headerFilter.id">
            <span :class="headerFilter.class"></span>
         </v-list-item>
      </v-list>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
   computed:{
      ...mapGetters(['headerFilters', 'activeHeaderFilter'])
   },
   methods: {
      changeHeaderFilter(filter) {
         this.$store.dispatch('changeHeaderFilter', filter);
      }
   }
}
</script>