import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
// store
import { store } from '../store/store';

Vue.use(Vuetify);

export default new Vuetify({	
	theme:{
		themes: {
			light: store.getters.selectedTheme.theme,
			dark: store.getters.selectedTheme.theme
		},
	},
	icons: {
		iconfont: 'md',  // 'md' or 'mdi' denotes Material Icons
	},
})