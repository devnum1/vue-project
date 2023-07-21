<template>
	<div>
      <page-title-bar></page-title-bar>
		<v-container fluid pt-0 grid-list-xl>
         <v-layout row wrap>
            <app-card
               :heading="$t('message.invoices')"
					colClasses="xl6 lg6 md12 sm12 xs12 pt-0"
					customClasses="mb-0"
				>
            	<invoice></invoice>
            </app-card>
            
            <app-card
               :heading="$t('message.payments')"
					colClasses="xl6 lg6 md12 sm12 xs12 pt-0"
					customClasses="mb-0"
				>
            	<payments></payments>
            </app-card>
			</v-layout>

         <v-layout row wrap>
            <app-card
					colClasses="xl12 lg12 md12 sm12 xs12"
					customClasses="mb-0"
				>
            <TabsAndTable></TabsAndTable>
            </app-card>
			</v-layout>

         <v-layout row wrap>
            <app-card
               :heading="$t('message.taxRates')"
					colClasses="xl6 lg6 md12 sm12 xs12"
					customClasses="mb-0"
				>
            	<TaxRates></TaxRates>
            </app-card>

            <app-card
               :heading="$t('message.addTickets')"
					colClasses="xl6 lg6 md12 sm12 xs12"
					customClasses="mb-0"
				>
               <add-tickets></add-tickets>
            </app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import TabsAndTable from "Components/Widgets/TabsAndTable";
import Invoice from "Components/Widgets/Invoice";
import Payments from "Components/Widgets/Payments";
import TaxRates from "Components/Widgets/TaxRates";
import AddTickets from "Components/Widgets/AddTickets";

export default {
  components: {
     TabsAndTable,
     Invoice,
     Payments,
     TaxRates,
     AddTickets
  }
};
</script>
