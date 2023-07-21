<template>
	<div>
		<page-title-bar></page-title-bar>
      <v-container fluid grid-list-xl pt-0>
         <div class="crypto-dash-wrap"> 
            <crypto-slider></crypto-slider>
            <!-- Stat Cards -->
            <v-layout row wrap border-rad-sm overflow-hidden>
               <stats-card-v7
                  colClasses="xl3 lg3 md3 sm6 xs12 crypto-stats-card"
                  :heading="bitcoin.name"
                  :icon="bitcoin.icon"
               >
                  <line-chart-shadow-v2
                     :dataSet="bitcoin.data"
                     :lineTension="0.4"
                     :dataLabels="bitcoin.chartLabel"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :borderWidth=3
                     :enableGradient="false"
                     :enableShadow="true"
                     :borderColor= "bitcoin.chartBorderColor"
                     :shadowColor= "bitcoin.chartBorderColor"
                  >
                  </line-chart-shadow-v2>  
               </stats-card-v7>
               <stats-card-v7
                  colClasses="xl3 lg3 md3 sm6 xs12 crypto-stats-card"
                  :heading="ethereum.name"
                  :icon="ethereum.icon"
               >
                  <line-chart-shadow-v2
                     :dataSet="ethereum.data"
                     :lineTension="0.4"
                     :dataLabels="ethereum.chartLabel"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :borderWidth=3
                     :enableGradient="false"
                     :enableShadow="true"
                     :borderColor= "ethereum.chartBorderColor"
                     :shadowColor= "ethereum.chartBorderColor"
                  >
                  </line-chart-shadow-v2>  
               </stats-card-v7>
               <stats-card-v7
                  colClasses="xl3 lg3 md3 sm6 xs12 crypto-stats-card"
                  :heading="litecoin.name"
                  :icon="litecoin.icon"
               >
                  <line-chart-shadow-v2
                     :dataSet="litecoin.data"
                     :lineTension="0.4"
                     :dataLabels="litecoin.chartLabel"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :borderWidth=3
                     :enableGradient="false"
                     :enableShadow="true"
                     :borderColor= "litecoin.chartBorderColor"
                     :shadowColor= "litecoin.chartBorderColor"
                  >
                  </line-chart-shadow-v2>  
               </stats-card-v7>
               <stats-card-v7
                  colClasses="xl3 lg3 md3 sm6 xs12 crypto-stats-card"
                  :heading="zcash.name"
                  :icon="zcash.icon"
               >
                  <line-chart-shadow-v2
                     :dataSet="zcash.data"
                     :lineTension="0.4"
                     :dataLabels="zcash.chartLabel"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :borderWidth=3
                     :enableGradient="false"
                     :enableShadow="true"
                     :borderColor= "zcash.chartBorderColor"
                     :shadowColor= "zcash.chartBorderColor"
                  >
                  </line-chart-shadow-v2>  
               </stats-card-v7>                                 
            </v-layout>
            <v-layout row wrap>
               <!-- Currency -->
               <app-card
   					colClasses="xl12 lg12 md12 sm12 xs12"
   					customClasses="mb-0"
   					heading= "BTC/USD"
                  :fullScreen="true"
   					:reloadable="true"
   					:closeable="true" 
   				>
                  <CandleSticks></CandleSticks>
   				</app-card>
            </v-layout>
            <v-layout row wrap>
               <!-- Trade History-->
               <v-flex xl8 lg8 md12 sm12 xs12 pa-0>
                  <app-card
      					colClasses="xl12 lg12 md12 sm12 xs12"
      					customClasses="mb-0 trade-history-warp"
      					:heading="$t('message.tradeHistory')"
                     :fullScreen="true"
      					:reloadable="true"
      					:closeable="true" 
      				>
                     <trade-history></trade-history>
      				</app-card>
                  <v-layout row wrap crypto-row-mrgn>
                     <v-flex xs12 sm12 md7 lg7 pa-0>
                        <!--Exchange Statistics -->
                        <app-card
                           colClasses="xl12 lg12 md12 sm12 xs12"
                           customClasses="mb-0 exchange-statistics"
                           :heading="$t('message.exchangeStatistics')"
                           :fullScreen="true"
                           :reloadable="true"
                           :closeable="true" 
                        >
                           <exchange-statistics></exchange-statistics>
                        </app-card>
                        <!-- Exchange rate -->
                        <app-card
                           colClasses="xl12 lg12 md12 sm12 xs12"
                           customClasses="mb-0"
                           :heading="$t('message.exchangeRate')"
                           :fullScreen="true"
                           :reloadable="true"
                           :closeable="true" 
                        >
                           <exchange-rate></exchange-rate>
                        </app-card>
                     </v-flex>
                     <v-flex xs12 sm12 md5 lg5 pa-0>
                        <!-- Quick trade -->
                        <app-card
                           colClasses="xl12 lg12 md12 sm12 xs12"
                           customClasses="mb-0"
                           :heading="$t('message.quickTrade')"
                           :fullScreen="true"
                           :reloadable="true"
                           :closeable="true" 
                        >
                           <quick-trade></quick-trade>
                        </app-card>
                     </v-flex>
                  </v-layout>   
               </v-flex>
               <v-flex xs12 sm12 md12 lg4 xl4 pa-0>   
                  <!-- Safe Trade -->
                  <app-card
                     colClasses="xl12 lg12 md12 sm12 xs12"
                     customClasses="mb-0"
                     :heading="$t('message.safeTrade')"
                     :fullScreen="true"
                     :reloadable="true"
                     :closeable="true" 
                  >
                     <safe-trade></safe-trade>
                  </app-card>
                  <!-- Recent Trades -->
                  <app-card
      					colClasses="xl12 lg12 md12 sm12 xs12"
      					customClasses="mb-0"
      					:heading="$t('message.recentTrades')"
                     :fullScreen="true"
      					:reloadable="true"
      					:closeable="true" 
      				>
                     <recent-trades></recent-trades>
		            </app-card>
               </v-flex>   
            </v-layout>
            <v-layout row wrap>
               <!-- Coin List -->
               <app-card
   					colClasses="xl12 lg12 md12 sm12 xs12"
   					customClasses="mb-0"
   					:heading="$t('message.coinsList')"
                  :fullScreen="true"
   					:reloadable="true"
   					:closeable="true" 
   				>
                  <coins-list></coins-list>
   				</app-card>
            </v-layout>
         </div>   
   	</v-container>
	</div>
</template>

<script>
// data.js 
import { statsCardData } from "Views/crypto/data.js";

// Widgets 
import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
import { ChartConfig } from "Constants/chart-config";
import LineChartShadowV2 from "Components/Charts/LineChartShadowV2";
import TradeHistory from "Components/Widgets/TradeHistory";
import QuickTrade from "Components/Widgets/QuickTrade";
import RecentTrades from "Components/Widgets/RecentTrades";
import CoinsList from "Components/Widgets/CoinsList";
import ExchangeRate from "Components/Widgets/ExchangeRate";
import SafeTrade from "Components/Widgets/SafeTrade";
import ExchangeStatistics from "Components/Widgets/ExchangeStatistics";
import CandleSticks from "Components/Charts/CandleSticks";

export default {
   components:{
      StatsCardV7,
      LineChartShadowV2,
      TradeHistory,
      QuickTrade,
      RecentTrades,
      CoinsList,
      ExchangeRate,
      SafeTrade,
      ExchangeStatistics,
      CandleSticks
   },
   data() { 
    return {
       statsCardData,
       ChartConfig,
         bitcoin:{
            icon : "cc BTC primary--text",
            name : "Bitcoin",
            color : "primary",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.primary,            
         },
         ethereum:{
            icon : "cc ETH success--text",
            name : "Ethereum",
            color : "success",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.success,
         },
         litecoin:{
            icon : "cc LTC error--text",
            name : "Litecoin",
            color : "warn",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.danger,
           
         },
         zcash:{
            icon : "cc ZEC-alt info--text",
            name : "Zcash",
            color : "accent",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.info,
            
         }      
      }
   }
}
</script>
