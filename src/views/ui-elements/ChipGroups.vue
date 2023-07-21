<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.chips')" customClasses="mb-30 mx-auto"
					colClasses="xl12 lg12 md12 sm12 xs12">
					<div class="mb-5">
						<p>The <code>v-chip-group</code> supercharges the <code>v-chip</code> component by providing groupable
							functionality.</p>
					</div>
					<v-card max-width="500" class="mx-auto pa-4">
						<v-chip-group multiple column active-class="primary--text">
							<v-chip v-for="tag in tags1" :key="tag">
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</v-card>
				</app-card>


				<app-card :heading="$t('message.playground')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<v-btn icon class="mr-6">
						<v-icon>mdi-chevron-right</v-icon>
					</v-btn>
					<span class="subheading">Filter your files</span>
					<v-row justify="space-around">
						<v-switch v-model="column" label="Column"></v-switch>
						<v-switch v-model="mandatory" label="Mandatory"></v-switch>
						<v-switch v-model="multiple" label="Multiple"></v-switch>
					</v-row>
					<span class="subheading">Filter by Tags</span>
					<v-card max-width="500" class="mx-auto pa-4">
						<v-chip-group :multiple="multiple" :mandatory="mandatory" :column="column"
							active-class="primary--text">
							<v-chip v-for="tag in tags" :key="tag">
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</v-card>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
	export default {
		data: () => ({
			column: true,
			mandatory: false,
			multiple: true,
			tags: [
				'Work',
				'Home Improvement',
				'Vacation',
				'Food',
				'Drawers',
				'Shopping',
				'Art',
				'Tech',
				'Science',
				'Computer',
				'Creative Writing'
			],
			tags1: [
				'Work',
				'Home Improvement',
				'Vacation',
				'Food',
				'Drawers',
				'Shopping',
				'Art',
				'Tech',
				'Science',
				'Computer',
				'Creative Writing'
			],
		}),
	}
</script>