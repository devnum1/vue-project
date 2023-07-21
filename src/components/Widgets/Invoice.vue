<template>
	<div class="table-responsive">
		<app-section-loader :status="loader"></app-section-loader>
		<v-data-table :headers="headers" :items="invoice" hide-default-footer>
			<template v-slot:item="{ item }">
				<tr>
					<th v-for="header in headers" :key="header.text">
						{{ header.text }}
					</th>
				</tr>
			</template>
			<template v-slot:item="{ item }">
				<tr>
					<td>{{ item.id }}</td>
					<td class="text-nowrap">
						{{ item.name }}
					</td>
					<td>{{ item.date }}</td>
					<td>
						<v-badge :class="item.labelClasses">{{ item.status }}</v-badge>
					</td>
					<td>{{ item.amount }}</td>
				</tr>
			</template>
		</v-data-table>
	</div>
</template>

<script>
	import api from "Api";

	export default {
		data() {
			return {
				loader: true,
				invoice: [],
				headers: [
					{
						text: "#",
						sortable: false,
						value: "#"
					},
					{
						text: "Buyer",
						sortable: false,
						value: "Buyer"
					},
					{
						text: "Date",
						sortable: false,
						value: "Date"
					},
					{
						text: "Status",
						sortable: false,
						value: "status"
					},
					{
						text: "Amount",
						sortable: false,
						value: "amount"
					}
				]
			};
		},
		mounted() {
			this.getInvoice();
		},
		methods: {
			getInvoice() {
				const self = this;
				api
					.get("vuely/invoice.js")
					.then(response => {
						self.loader = false;
						self.invoice = response.data;
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
</script>