<template>
	<v-simple-table>
		<thead>
			<tr>
				<th class="text-left">ID</th>
				<th class="text-left">Type</th>
				<th class="text-left">Comment</th>
				<th class="text-left">Ad</th>
				<th class="text-center"></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="report in reports" :key="report.id">
				<td>{{ report.id }}</td>
				<td>{{ report.type }}</td>
				<td>{{ report.comment }}</td>
				<td>{{ report.ad_id }}</td>
				<td>
					<v-btn class="ma-2" color="info" @click.stop=""> View </v-btn>
				</td>
			</tr>
		</tbody>
	</v-simple-table>
</template>

<script>
export default {
	computed: {
		reports() {
			return this.$store.getters.reports;
		},
	},
};
</script>
