<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.listItemGroups')" customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12">
					<v-list>
						<v-list-item-group v-model="model">
							<v-list-item v-for="(item, i) in items" :key="i">
								<v-list-item-icon>
									<v-icon v-text="item.icon"></v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title v-text="item.text"></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</app-card>

				<app-card :heading="$t('message.playground')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<v-row justify="space-around">
						<v-switch v-model="multiple" class="mx-2" label="Multiple"></v-switch>
						<v-switch v-model="mandatory" class="mx-2" label="Mandatory"></v-switch>
						<v-switch v-model="flat" class="mx-2" label="Flat"></v-switch>
						<v-switch v-model="dense" class="mx-2" label="Dense"></v-switch>
						<v-col cols="12">
							<v-slider v-model="count" min="0" max="25" label="Items count"></v-slider>
						</v-col>
					</v-row>

					<v-card class="mx-auto" max-width="400">
						<v-list :flat="flat" :dense="dense">
							<v-list-item-group v-model="model" :multiple="multiple" :mandatory="mandatory" color="indigo">
								<v-list-item v-for="i in count" :key="i">
									<v-list-item-icon>
										<v-icon v-text="item.icon"></v-icon>
									</v-list-item-icon>

									<v-list-item-content>
										<v-list-item-title v-text="item.text"></v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</v-list-item-group>
						</v-list>
					</v-card>
				</app-card>




			</v-layout>
		</v-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items: [
					{
						icon: 'mdi-inbox',
						text: 'Inbox',
					},
					{
						icon: 'mdi-star',
						text: 'Star',
					},
					{
						icon: 'mdi-send',
						text: 'Send',
					},
					{
						icon: 'mdi-email-open',
						text: 'Drafts',
					},
				],
				model: 1,
				item: {
					icon: 'mdi-wifi',
					text: 'Wifi',
				},
				model: 1,
				multiple: false,
				mandatory: false,
				flat: false,
				dense: false,
				count: 4,
			}
		}
	}
</script>