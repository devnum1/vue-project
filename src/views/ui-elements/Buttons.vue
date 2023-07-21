<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card
					:heading="$t('message.flatButton')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p><code>v-button</code> is an HTML button or a tag enhanced with styling and animation to match the Material Design button spec.</p>
					</div>
					<v-btn text class="ma-2">Normal</v-btn>
					<v-btn text class="ma-2" color="primary">Primary</v-btn>
					<v-btn text class="ma-2" color="accent">Accent</v-btn>
					<v-btn text class="ma-2" color="secondary">Secondary</v-btn>
					<v-btn text class="ma-2" color="warning">Warning</v-btn>
					<v-btn text class="ma-2" color="error">Error</v-btn>
					<v-btn text class="ma-2" color="info">Info</v-btn>
					<v-btn text class="ma-2" color="success">Success</v-btn>
					<v-btn text class="ma-2" disabled>Disabled</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.raisedButton')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p><code>v-button</code> is an HTML button or a tag enhanced with styling and for <code>color="primary"</code> Applies specified color to the control</p>
					</div>
					<v-btn class="ma-2" >Normal</v-btn>
					<v-btn class="ma-2" color="primary">Primary</v-btn>
					<v-btn class="ma-2" color="accent">Accent</v-btn>
					<v-btn class="ma-2" color="secondary">Secondary</v-btn>
					<v-btn class="ma-2" color="warning">Warning</v-btn>
					<v-btn class="ma-2" color="error">Error</v-btn>
					<v-btn class="ma-2" color="info">Info</v-btn>
					<v-btn class="ma-2" color="success">Success</v-btn>
					<v-btn class="ma-2" disabled>Disabled</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.gradientButton')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Simply use a class on btn element <code>.gradient-primary</code> Applies specified color to the control</p>
					</div>
					<v-btn class="ma-2 btn-gradient-primary">Primary</v-btn>
					<v-btn class="ma-2 btn-gradient-warning">Warning</v-btn>
					<v-btn class="ma-2 btn-gradient-pink">Pink</v-btn>
					<v-btn class="ma-2 btn-gradient-success">Success</v-btn>
					<v-btn class="ma-2 btn-gradient-purple">Purple</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.buttonDropdownVariants')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Button dropdowns are regular selects with additional styling.</p>
					</div>
					<v-layout row wrap>
						<v-flex xs12 md4 xl4>
							<p>Overflow</p>
							<v-overflow-btn v-bind:items="dropdown_font" label="Select"></v-overflow-btn>
						</v-flex>
						<v-flex xs12 md4 xl4>
							<p>Segmented</p>
							<v-overflow-btn v-bind:items="dropdown_icon" label="Select" segmented></v-overflow-btn>
						</v-flex>
						<v-flex xs12 md4 xl4>
							<p>Editable</p>
							<v-overflow-btn v-bind:items="dropdown_edit" label="Select" editable item-value="text"></v-overflow-btn>
						</v-flex>
					</v-layout>
				</app-card>
				<app-card
					:heading="$t('message.buttonToggle')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Toggle buttons are essentially styled radio or checkboxes, depending on the properties selected. This component is compatible with the v-toolbar component.</p>
					</div>
					<p class="primary--text fw-bold">Exclusive</p>
					<v-btn-toggle v-model="toggle_exclusive">
						<v-btn text>
							<v-icon>format_align_left</v-icon>
						</v-btn>
						<v-btn text>
							<v-icon>format_align_center</v-icon>
						</v-btn>
						<v-btn text>
							<v-icon>format_align_right</v-icon>
						</v-btn>
						<v-btn text>
							<v-icon>format_align_justify</v-icon>
						</v-btn>
					</v-btn-toggle>
				</app-card>
				<app-card
					:heading="$t('message.icon')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Icons can be used for the primary content of a button.</p>
					</div>
					<div class="mb-4">
						<p class="primary--text fw-bold">{{$t('message.normal')}}</p>
						<v-btn icon class="mr-3" color="pink">
							<v-icon>favorite</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" color="indigo">
							<v-icon>star</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" color="green">
							<v-icon>cached</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" color="deep-orange">
							<v-icon>thumb_up</v-icon>
						</v-btn>
					</div>
					<div class="mb-4">
						<p class="primary--text fw-bold">{{$t('message.disabled')}}</p>
						<v-btn icon class="mr-3" disabled>
							<v-icon>favorite</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" disabled>
							<v-icon>star</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" disabled>
							<v-icon>cached</v-icon>
						</v-btn>
						<v-btn icon class="mr-3" disabled>
							<v-icon>thumb_up</v-icon>
						</v-btn>
					</div>
				</app-card>
				<app-card
					:heading="$t('message.floating')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Floating buttons are round and usually contain an icon.</p>
					</div>
					<v-btn fab class="mr-3" dark small color="primary">
						<v-icon dark>remove</v-icon>
					</v-btn>
					<v-btn fab class="mr-3" dark small color="pink">
						<v-icon dark>favorite</v-icon>
					</v-btn>
					<v-btn fab class="mr-3" dark color="indigo">
						<v-icon dark>add</v-icon>
					</v-btn>
					<v-btn fab class="mr-3" dark color="teal">
						<v-icon dark>list</v-icon>
					</v-btn>
					<v-btn fab class="mr-3" dark large color="cyan">
						<v-icon dark>edit</v-icon>
					</v-btn>
					<v-btn fab class="mr-3" dark large color="purple">
						<v-icon dark>android</v-icon>
					</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.loaders')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Using the loading prop, you can notify a user that there is processing taking place. The default behavior is to use a v-progress-circular component but this can be customized.</p>
					</div>
					<v-btn class="gradient-primary ma-2" :loading="loading" @click.native="loader = 'loading'" :disabled="loading">
						Accept Terms
					</v-btn>
					<v-btn class="gradient-success ma-2" :loading="loading3" @click.native="loader = 'loading3'" :disabled="loading3">
						Upload
						<v-icon right dark>cloud_upload</v-icon>
					</v-btn>
					<v-btn class="gradient-pink ma-2" :loading="loading2" @click.native="loader = 'loading2'" :disabled="loading2">
						Custom Loader
						<span slot="loader">Loading...</span>
					</v-btn>
					<v-btn class="gradient-warning ma-2" :loading="loading4" @click.native="loader = 'loading4'" :disabled="loading4">
						Icon Loader
						<span slot="loader" class="custom-loader">
							<v-icon light>cached</v-icon>
						</span>
					</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.sizing')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Buttons can be given different sizing options to fit a multitude of scenarios.</p>
					</div>
					<div class="mb-4">
						<v-btn small class="ma-2" color="primary" dark>Small Button</v-btn>
						<v-btn class="ma-2" color="warning" dark>Normal Button</v-btn>
						<v-btn class="ma-2" color="error" dark large>Large Button</v-btn>
					</div>
					<div class="mb-4">
						<v-btn class="mr-4" color="primary" fab small dark>
							<v-icon>edit</v-icon>
						</v-btn>
						<v-btn class="mr-4" color="warning" fab dark>
							<v-icon>account_circle</v-icon>
						</v-btn>
						<v-btn class="mr-4" color="error" fab large dark>
							<v-icon>alarm</v-icon>
						</v-btn>
					</div>
				</app-card>
				<app-card
					:heading="$t('message.outline')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
					<p>Outline buttons inherit their borders from the current color applied.</p>
					</div>
					<v-btn class="mr-3" outlined color="indigo">Outline Button</v-btn>
					<v-btn class="mr-3" outlined fab color="teal">
						<v-icon>list</v-icon>
					</v-btn>
					<v-btn class="mr-3" outlined large fab color="pink">
						<v-icon>edit</v-icon>
					</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.round')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12 "
				>
					<div class="mb-5">
						<p>Rounded buttons behave the same as regular buttons but have rounded edges.</p>
					</div>
				<v-btn rounded color="success">Rounded Button</v-btn>
				</app-card>
				<app-card
					:heading="$t('message.block')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>Block buttons extend the full available width.</p>
					</div>
					<v-btn block color="warning">Block Button</v-btn>
				</app-card>
				</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
      dropdown_icon: [
        {
          text: "list",
          callback: () => console.log("list")
        },
        {
          text: "favorite",
          callback: () => console.log("favorite")
        },
        {
          text: "delete",
          callback: () => console.log("delete")
        }
      ],
      dropdown_edit: [
        {
          text: "100%"
        },
        {
          text: "75%"
        },
        {
          text: "50%"
        },
        {
          text: "25%"
        },
        {
          text: "0%"
        }
      ],
      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    }
  }
};
</script>