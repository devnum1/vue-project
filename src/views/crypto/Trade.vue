<template>
   <div>
		<page-title-bar></page-title-bar>
      <v-container fluid grid-list-xl pt-0>
         <crypto-slider></crypto-slider>
         <v-layout row wrap>
				<!-- Wallet Address -->
            <app-card
               :heading="$t('message.walletAddress')"
               colClasses="xl4 lg4 md6 sm6 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <wallet-address></wallet-address>
            </app-card>
				<!-- Buy Crypto Currency -->
            <app-card
                  :heading="$t('message.buyCryptocurrency')"
                  colClasses="xl4 lg4 md6 sm6 xs12"
                  customClasses="mb-0"
                  :fullScreen="true"
                  :reloadable="true"
                  :closeable="true"
               >
               <buy-cryptocurrency></buy-cryptocurrency>
            </app-card>
				<!-- Expenditure Stats -->
            <app-card
                  :heading="$t('message.expenditureStats')"
                  colClasses="xl4 lg4 md12 sm12 xs12"
                  customClasses="mb-0"
                  :fullScreen="true"
                  :reloadable="true"
                  :closeable="true"
               >
               <expenditure-stats></expenditure-stats>
            </app-card>
         </v-layout>
         <v-layout row wrap>
				<!-- Sell Crypto Currency -->
            <app-card
               :heading="$t('message.sellCryptocurrency')"
               colClasses="xl4 lg4 md6 sm6 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <sell-cryptocurrency></sell-cryptocurrency>
            </app-card>
				<!-- Transfer Crypto Currency -->
            <app-card
               :heading="$t('message.transferCryptocurrency')"
               colClasses="xl4 lg4 md6 sm6 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <transfer-cryptocurrency></transfer-cryptocurrency>
            </app-card>
				<!-- Exchange Rate -->
            <app-card
               :heading="$t('message.exchangeRate')"
               colClasses="xl4 lg4 md12 sm12 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <exchange-rate></exchange-rate>
            </app-card>
         </v-layout>
         <v-layout row wrap>
				<!-- Buy Or Sell -->
            <app-card
               :heading="$t('message.buyOrSell')"
               colClasses="xl8 lg8 md12 sm12 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <buy-or-sell></buy-or-sell>
            </app-card>
				<!-- Recent Trades -->
            <app-card
               :heading="$t('message.recentTrades')"
               colClasses="xl4 lg4 md12 sm12 xs12"
               customClasses="mb-0" 
               :fullScreen="true"
               :reloadable="true"
               :closeable="true"
            >
               <recent-trades></recent-trades>
            </app-card>
         </v-layout>
      </v-container>
   </div>
</template>

<script>
import WalletAddress from "Components/Widgets/WalletAddress";
import BuyCryptocurrency from "Components/Widgets/BuyCryptocurrency";
import SellCryptocurrency from "Components/Widgets/SellCryptocurrency";
import TransferCryptocurrency from "Components/Widgets/TransferCryptocurrency";
import ExchangeRate from "Components/Widgets/ExchangeRate";
import RecentTrades from "Components/Widgets/RecentTrades";
import BuyOrSell from "Components/Widgets/BuyOrSell";
import ExpenditureStats from "Components/Charts/PieChartWithLegend";


export default {
   components:{
      WalletAddress,
      BuyCryptocurrency,
      SellCryptocurrency,
      TransferCryptocurrency,
      ExchangeRate,
      RecentTrades,
      BuyOrSell,
      ExpenditureStats,


   }

}
</script>
