<template>
	<div class="theme-color">
		<h5 class="text-sm-center mb-4">{{$t('message.selectTheme')}}</h5>
		<v-list>
			<v-list-item :ripple="false" v-for="theme in themes" :key="theme.id" @click="changeTheme(theme)"
				:class="{'active-theme': selectedTheme === theme}">
				<span :class="theme.bgColor"></span>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters(["themes", "selectedTheme"])
		},
		methods: {
			changeTheme(theme) {
				switch (theme.id) {
					case 1:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					case 2:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					case 3:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					case 4:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					case 5:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					case 6:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
					default:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light = theme.theme;
						this.$vuetify.theme.themes.dark = theme.theme;						
						break;
				}
			}
		}
	};
</script>