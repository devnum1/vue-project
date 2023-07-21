<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.colorPickers')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<div class="mb-5">
						<p>The <code>v-color-picker</code> allows you to select a color using a variety of input methods.</p>
					</div>
					<div class="d-flex justify-center">
						<v-color-picker></v-color-picker>
					</div>
				</app-card>

				<app-card :heading="$t('message.playground')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<div>
						<v-container>
							<v-row justify="space-around">
								<v-switch v-model="showSwatches" class="mx-2" label="Show Swatches"></v-switch>
								<v-switch v-model="hideInputs" class="mx-2" label="Hide Inputs"></v-switch>
								<v-switch v-model="hideCanvas" class="mx-2" label="Hide Canvas"></v-switch>
								<v-switch v-model="hideModeSwitch" class="mx-2" label="Hide Mode Switch"></v-switch>

								<v-col class="mx-2" cols="6" md="3">
									<v-select v-model="mode" :items="modes" label="Mode"></v-select>
								</v-col>
							</v-row>
						</v-container>

						<v-color-picker v-model="color" :hide-canvas="hideCanvas" :hide-inputs="hideInputs"
							:hide-mode-switch="hideModeSwitch" :mode.sync="mode" :show-swatches="showSwatches" class="mx-auto">
						</v-color-picker>
					</div>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				color: '#8E00FF',
				hideCanvas: false,
				hideInputs: false,
				hideModeSwitch: false,
				mode: 'rgba',
				modes: ['rgba', 'hsla', 'hexa'],
				showSwatches: false,
			}
		}
	}
</script>