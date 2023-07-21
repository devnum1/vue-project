<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.default')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>By default, progress circular uses the applications secondary color.</p>
					</div>
					<template>
						<div class="text-center">
							<v-progress-circular :value="20" color="primary" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="40" color="error" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="60" color="success" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="80" color="warning" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="100" color="info" class="mx-2"></v-progress-circular>
						</div>
					</template>
				</app-card>
				<app-card :heading="$t('message.colored')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>Alternate colors can be applied.</p>
					</div>
					<template>
						<div class="text-center">
							<v-progress-circular :value="100" color="blue-grey" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="80" color="deep-orange lighten-2" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="60" color="brown" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="40" color="lime" class="mx-2"></v-progress-circular>
							<v-progress-circular :value="20" color="indigo darken-2" class="mx-2"></v-progress-circular>
						</div>
					</template>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card :heading="$t('message.indeterminate')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>An indeterminate progress circular animates forever.</p>
					</div>
					<template>
						<div class="text-center">
							<v-progress-circular indeterminate color="primary" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate color="red" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate color="purple" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate color="green" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate color="amber" class="mx-2"></v-progress-circular>
						</div>
					</template>
				</app-card>
				<app-card :heading="$t('message.sizeAndWidth')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>The progress circular component can have an altered width and size.</p>
					</div>
					<template>
						<div class="text-center">
							<v-progress-circular indeterminate :size="50" color="primary" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate :width="3" color="red" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate :size="70" :width="7" color="purple" class="mx-2">
							</v-progress-circular>
							<v-progress-circular indeterminate :width="3" color="green" class="mx-2"></v-progress-circular>
							<v-progress-circular indeterminate :size="50" color="amber" class="mx-2"></v-progress-circular>
						</div>
					</template>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card :heading="$t('message.rotate')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>The <code>rotate</code> prop gives you the ability to customize the
							<code>v-progress-circular's</code> origin.</p>
					</div>
					<div class="text-center">
						<v-progress-circular class="ma-2" :rotate="360" :size="100" :width="15" :value="value" color="teal">
							{{ value }}
						</v-progress-circular>

						<v-progress-circular class="ma-2" :rotate="-90" :size="100" :width="15" :value="value" color="primary">
							{{ value }}
						</v-progress-circular>

						<v-progress-circular class="ma-2" :rotate="90" :size="100" :width="15" :value="value" color="red">
							{{ value }}
						</v-progress-circular>

						<v-progress-circular class="ma-2" :rotate="180" :size="100" :width="15" :value="value" color="pink">
							{{ value }}
						</v-progress-circular>
					</div>

				</app-card>
				<app-card :heading="$t('message.determinate')" colClasses="xs12 md6 determinate-progress">
					<div class="mb-6">
						<p>The progress linear component can have a determinate state modified by
							<code>v-model</code>.</p>
					</div>
					<v-progress-linear v-model="valueDeterminate" height="7" color="pink"></v-progress-linear>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card :heading="$t('message.indeterminate')" colClasses="xs12 md6">
					<div class="mb-6">
						<p>Just as with the progress circular component, progress linear has an indeterminate state.</p>
					</div>
					<v-progress-linear indeterminate color="green" height="7"></v-progress-linear>
				</app-card>
				<app-card :heading="$t('message.buffer')" colClasses="xs12 md6">
					<div class="mb-4">
						<p>A buffer state represents two values simultaneously. The primary value is controlled by the model,
							whereas the buffer is controlled by the
							<code>buffer-value</code> prop.</p>
					</div>
					<v-progress-linear v-model="value" :buffer-value="bufferValue" color="yellow" height="7">
					</v-progress-linear>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				interval: {},
				value: 0,
				valueDeterminate: 50,
				buffer: 10,
				bufferValue: 20
			};
		},
		beforeDestroy() {
			clearInterval(this.interval);
		},
		methods: {
			startBuffer() {
				this.interval = setInterval(() => {
					this.buffer += Math.random() * (15 - 5) + 5;
					this.bufferValue += Math.random() * (15 - 5) + 5;
				}, 2000);
			}
		},
		mounted() {
			this.interval = setInterval(() => {
				if (this.value === 100) {
					return (this.value = 0);
				}
				this.value += 10;
			}, 1000);
			this.startBuffer();
		}
	};
</script>