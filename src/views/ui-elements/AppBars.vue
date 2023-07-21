<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card :heading="$t('message.appBars')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<div class="mb-5">
						<p>The <code>v-app-bar</code> component is pivotal to any graphical user interface (GUI), as it
							generally is the primary source of site navigation.</p>
					</div>
					<v-app-bar color="primary" dark>
						<v-app-bar-nav-icon></v-app-bar-nav-icon>

						<v-toolbar-title>Page title</v-toolbar-title>

						<div class="flex-grow-1"></div>

						<v-btn icon>
							<v-icon>mdi-heart</v-icon>
						</v-btn>

						<v-btn icon>
							<v-icon>mdi-magnify</v-icon>
						</v-btn>

						<v-menu left bottom>
							<template v-slot:activator="{ on }">
								<v-btn icon v-on="on">
									<v-icon>mdi-dots-vertical</v-icon>
								</v-btn>
							</template>

							<v-list>
								<v-list-item v-for="n in 5" :key="n" @click="() => {}">
									<v-list-item-title>Option {{ n }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-app-bar>
				</app-card>
				<app-card :heading="$t('message.playground')" customClasses="mb-30" colClasses="xl12 lg12 md12 sm12 xs12">
					<v-row justify="center">
						<v-col cols="6" md="4">
							<v-select v-model="color" label="Color" :items="colors"></v-select>
						</v-col>
						<v-col cols="12"></v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="elevateOnScroll" label="Elevate-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="hideOnScroll" label="Hide-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="fadeOnScroll" label="Fade-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="fadeImgOnScroll" label="Fade-img-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="invertedScroll" label="Inverted scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="collapse" label="Collapse"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="collapseOnScroll" label="Collapse-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="shrinkOnScroll" label="Shrink-on-scroll"></v-switch>
						</v-col>
						<v-col cols="6" md="3" lg="2">
							<v-switch v-model="extended" label="Extended"></v-switch>
						</v-col>
					</v-row>
					<v-card class="overflow-hidden">
						<v-app-bar absolute dark scroll-target="#playground-example" :color="color"
							:elevate-on-scroll="elevateOnScroll" :hide-on-scroll="hideOnScroll" :fade-on-scroll="fadeOnScroll"
							:fade-img-on-scroll="fadeImgOnScroll" :inverted-scroll="invertedScroll" :collapse="collapse"
							:collapse-on-scroll="collapseOnScroll" :shrink-on-scroll="shrinkOnScroll" :extended="extended">
							<v-app-bar-nav-icon></v-app-bar-nav-icon>

							<v-toolbar-title>Title</v-toolbar-title>

							<div class="flex-grow-1"></div>

							<v-btn icon>
								<v-icon>search</v-icon>
							</v-btn>
						</v-app-bar>
						<v-sheet id="playground-example" class="overflow-y-auto" min-height="400">
							<v-container>

							</v-container>
						</v-sheet>
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
				elevateOnScroll: false,
				hideOnScroll: false,
				fadeOnScroll: false,
				fadeImgOnScroll: false,
				invertedScroll: false,
				collapse: false,
				collapseOnScroll: false,
				shrinkOnScroll: false,
				extended: false,
				color: 'accent',
				colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
			}
		}
	}
</script>