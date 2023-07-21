<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.banners')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<div class="mb-5">
						<p>The <code>v-banner</code> component is used as middle-interruptive message to user with 1-2
							actions. It comes in 2 variations, single-line and multi-line (implicit).</p>
					</div>
					<v-banner single-line>
						One line message text string with two actions on tablet / Desktop

						<template v-slot:actions>
							<v-btn text color="deep-purple accent-4">
								Action
							</v-btn>
						</template>
					</v-banner>
				</app-card>
				<app-card :heading="$t('message.playground')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<v-row justify="space-between" class="px-3">
						<v-switch v-model="sticky" label="Sticky"></v-switch>
						<v-switch v-model="singleLine" label="Single-line"></v-switch>
						<v-select v-model="icon" :items="icons" label="Icon" style="max-width: 250px;" clearable></v-select>
						<v-select v-model="color" :items="colors" label="Color" style="max-width: 250px;" clearable>
						</v-select>
						<v-select v-model="iconColor" :items="colors" label="Icon color" style="max-width: 250px;" clearable>
						</v-select>
						<v-slider v-model="elevation" label="Elevation" min="0" max="24" style="width: 100%;" clearable>
						</v-slider>
					</v-row>

					<v-sheet class="overflow-y-auto" max-height="400">
						<v-container style="height: 1500px;">
							<v-banner :sticky="sticky" :single-line="singleLine" :icon="icon" :color="color"
								:icon-color="iconColor" :elevation="elevation">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus
								sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid
								corrupti maiores doloribus soluta optio blanditiis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus
								sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid
								corrupti maiores doloribus soluta optio blanditiis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus
								sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid
								corrupti maiores doloribus soluta optio blanditiis.

								<template v-slot:actions>
									<v-btn text color="deep-purple accent-4">
										Action
									</v-btn>
								</template>
							</v-banner>
						</v-container>
					</v-sheet>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				sticky: false,
				singleLine: true,
				icon: 'mdi-plus',
				color: undefined,
				iconColor: undefined,
				elevation: 4,
				colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
				icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
			}
		}
	}
</script>