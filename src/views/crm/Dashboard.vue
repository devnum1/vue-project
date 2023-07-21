<template>
	<div>
		<page-title-bar></page-title-bar>
	  	<v-container fluid pt-0 grid-list-xl>
      	<v-layout row wrap border-rad-sm overflow-hidden crm-stats-card-wrap>
      		<stats-card-v6
            	class="flex xl3 lg3 md6 sm6 xs12"
               :title="visitors.title"
               :viewer="visitors.viewer"
               :icon= "visitors.icon"
               :trade="visitors.trade"
               :bgColor="visitors.card_color"
              >
					
						<line-chart-v3
							:label="visitors.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
							:dataSet= "visitors.chartData"
							:labels="visitors.chartLabel"
						></line-chart-v3>
					
				</stats-card-v6>
            <stats-card-v6
               class="flex xl3 lg3 md6 sm6 xs12"
               :title="revenue.title"
               :viewer="revenue.viewer"
               :trade="revenue.trade"
               :icon= "revenue.icon"
               :bgColor="revenue.card_color"
              >
               
                  <line-chart-v3
                     :label="revenue.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "revenue.chartData"
                     :labels="revenue.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
            <stats-card-v6
               class="flex xl3 lg3 md6 sm6 xs12"
               :title="sales.title"
               :viewer="sales.viewer"
               :trade="sales.trade"
               :icon= "sales.icon"
               :bgColor="sales.card_color"
              >
                  <line-chart-v3
                     :label="sales.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "sales.chartData"
                     :labels="sales.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
            <stats-card-v6
               class="flex xl3 lg3 md6 sm6 xs12"
               :title="deals.title"
               :viewer="deals.viewer"
               :trade="deals.trade"
               :icon= "deals.icon"
               :bgColor="deals.card_color"
              >
               
                  <line-chart-v3
                     :label="deals.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "deals.chartData"
                     :labels="deals.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
         </v-layout>
         <v-layout row wrap>
				<app-card
					:heading="$t('message.projectStatus')"
					colClasses="xl8 lg8 md6 sm12 xs12"
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
				>
					<project-status-v3></project-status-v3> 
				</app-card>

				<app-card
					:heading="$t('message.sales')"
					colClasses="xl4 lg4 md6 sm12 xs12"
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
					>
					<sales></sales> 
				</app-card>
         </v-layout>

			<v-layout row wrap>
				<app-card
					:heading="$t('message.upcomingEvents')"
					colClasses="xl4 lg4 md4 sm12 xs12"
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
				>
					<upcoming-events></upcoming-events>
				</app-card>
            <app-card
					:heading="$t('message.ongoingProjects')"
					colClasses="xl4 lg4 md4 sm12 xs12"
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
				>
					<ongoing-projects></ongoing-projects>
				</app-card>
            <app-card
					:heading="$t('message.projectStatus')"
					colClasses="xl4 lg4 md4 sm12 xs12"
					customClasses="mb-0"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
					:footer="false"
				>
					<project-status-v2></project-status-v2>
				</app-card>
			</v-layout>

         <v-layout row wrap>
            <app-card
					:heading="$t('message.notifications')"
					colClasses="xl4 lg4 md5 sm12 xs12"
					customClasses="mb-0 notification-card-wrap"
					:fullBlock="true"
					:fullScreen="true"
					:reloadable="true"
					:closeable="true"
					:footer="true"
				>
               <notifications-card></notifications-card>
					<div slot="footer" class="text-center">
						<v-btn class="ma-0" color="white" large>View All Notifications</v-btn>
					</div>
				</app-card>
				<v-flex xl8 lg8 md7 sm12 xs12 class="pa-0">
					<chat></chat>
				</v-flex>
			</v-layout>

         <v-layout row wrap>
            <app-card
					colClasses="xl12 lg12 md12 sm12 xs12"
					customClasses="mb-0"
				>
            <tabs-and-table></tabs-and-table>
				</app-card>
         </v-layout>

		</v-container>
	</div>
</template>

<script>

import UpcomingEvents from 'Components//Widgets/UpcomingEvents'
import OngoingProjects from 'Components//Widgets/OngoingProjects'
import ProjectStatusV2 from 'Components//Widgets/ProjectStatusV2'
import Chat from "Components/Widgets/Chat";
import NotificationsCard from 'Components/Widgets/NotificationsCard'
import TabsAndTable from 'Components/Widgets/TabsAndTable'
import LineChartV3 from "Components/Charts/LineChartV3";
import StatsCardV6 from "Components/StatsCardV6/StatsCardV6";
import Sales from 'Components/Charts/PieChartWithLegend'
import ProjectStatusV3 from 'Components/Charts/ColumnChartWithImages'

export default {
   components:{
      UpcomingEvents,
      OngoingProjects,
      ProjectStatusV2,
      Chat,
      NotificationsCard,
      TabsAndTable,
      LineChartV3,
      StatsCardV6,
      Sales,
      ProjectStatusV3
   },
   data() {
    return {
      blog: {
        id: 3,
        thumbnail: "/static/img/blog-3.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      },
      visitors:{
         card_color : "primary",
         icon : "zmdi zmdi-account-add",
         title : "Visitors",
         viewer : "+ 41",
         trade : "30",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Visitors",
         bgColor:"primary",
         chartData : [30, 5, 26,10,30]
      },
      revenue:{
         card_color : "success",
         icon : "zmdi zmdi-money-box",
         title : "Revenue",
         viewer : "+ 4381",
         trade : "60",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Revenue",
         chartData : [1, 26, 8,22,1]
      },
      sales: {
         card_color : "warning",
         icon : "zmdi zmdi-shopping-cart",
         title : "Sales",
         viewer : "+ 2611",
         trade : "80",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Sales",
         chartData : [ 30, 5, 26,10,30 ]
      },
      deals: {
         card_color : "error",
         icon : "ti-thumb-up",
         title : "Deals",
         viewer : "+ 611",
         trade : "40",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Deals",
         chartData : [1, 26, 8,22,1]
      }
    };
  }
 
};
</script>
