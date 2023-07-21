<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.simpleDialogs')"
					colClasses="lg12"
				>
					<div class="mb-4">
						<p>Choosing an option immediately commits the option and closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.</p>
					</div>
					<v-btn class="ma-2" color="primary" @click.stop="dialog = true">Open Dialog 1</v-btn>
					<v-btn class="ma-2" color="success" @click.stop="dialog2 = true">Open Dialog 2</v-btn>
					<v-btn class="ma-2" color="error" @click.stop="dialog3 = true">Open Dialog 3</v-btn>
					<v-menu bottom offset-y>
						<template v-slot:activator="{ on }">
							<v-btn color="warning" v-on="on">A Menu</v-btn>
						</template>
						<v-list>
							<v-list-item v-for="(item, i) in items" :key="i" @click="">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<!-- Dialog Model 1 -->
					<v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" overlay=false scrollable>
						<v-card>
							<v-toolbar color="primary" dark class="dialog-toolbar mb-6">
								<v-btn icon @click.native="dialog = false" dark>
									<v-icon>close</v-icon>
								</v-btn>
								<v-toolbar-title>Settings</v-toolbar-title>
								<v-spacer></v-spacer>
								<v-toolbar-items>
									<v-btn dark text @click.native="dialog = false">Save</v-btn>
									<v-menu bottom right offset-y>
										<template v-slot:activator="{ on }">
											<v-btn v-on="on" dark icon>
												<v-icon>more_vert</v-icon>
											</v-btn>
										</template>
										<v-list>
											<v-list-item v-for="(item, key) in items" :key="key" @click="">
												<v-list-item-title>{{ item.title }}</v-list-item-title>
											</v-list-item>
										</v-list>
									</v-menu>
								</v-toolbar-items>
							</v-toolbar>
							<v-card-text>
								<v-btn class="ma-2" color="warning" @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
								<v-tooltip right>
									<template v-slot:activator="{ on }">
										<v-btn color="primary" v-on="on">Tool Tip Activator</v-btn>
									</template>
									Tool Tip
								</v-tooltip>
								<v-list three-line subheader>
									<v-subheader>User Controls</v-subheader>
									<v-list-item>
										<v-list-item-content>
											<v-list-item-title class="fw-normal">Content filtering</v-list-item-title>
											<v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded
											</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-list-item>
										<v-list-item-content>
											<v-list-item-title class="fw-normal">Password</v-list-item-title>
											<v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list>
								<v-divider></v-divider>
								<v-list three-line subheader>
									<v-subheader>General</v-subheader>
									<v-list-item>
										<v-list-item-action>
											<v-checkbox v-model="notifications"></v-checkbox>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title class="fw-normal">Notifications</v-list-item-title>
											<v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-list-item>
										<v-list-item-action>
											<v-checkbox v-model="sound"></v-checkbox>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title class="fw-normal">Sound</v-list-item-title>
											<v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-list-item>
										<v-list-item-action>
											<v-checkbox v-model="widgets"></v-checkbox>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title class="fw-normal">Auto-add widgets</v-list-item-title>
											<v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-card-text>
							<div style="flex: 1 1 auto;"></div>
						</v-card>
					</v-dialog>
					<!-- Dialog Model 2 -->
					<v-dialog v-model="dialog2" max-width="500px">
						<v-card>
							<v-card-title>
								Dialog 2
							</v-card-title>
							<v-card-text>
								<v-btn color="success" @click.stop="dialog3 = !dialog3">Open Dialog 3</v-btn>
								<v-select v-bind:items="select" label="A Select List" item-value="text"></v-select>
							</v-card-text>
							<v-card-actions>
								<v-btn color="error" @click.stop="dialog2=false">Close</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<!-- Dialog Model 3 -->
					<v-dialog v-model="dialog3" max-width="500px">
						<v-card>
							<v-card-title>
								<span>Dialog 3</span>
								<v-spacer></v-spacer>
								<v-menu bottom left>
									<template v-slot:activator="{ on }">
										<v-btn icon v-on="on">
											<v-icon>more_vert</v-icon>
										</v-btn>
									</template>
									<v-list>
										<v-list-item v-for="(item, i) in items" :key="i" @click="">
											<v-list-item-title>{{ item.title }}</v-list-item-title>
										</v-list-item>
									</v-list>
								</v-menu>
							</v-card-title>
							<v-card-actions>
								<v-btn color="error" @click.stop="dialog3=false">Close</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.withoutActivator')" 
					colClasses="xs12 md6"
					>
					<div class="mb-4">
						<p>If for some reason you are unable to use the activator slot, be sure to add the
							<code>.stop</code> modifier to the event that triggers the dialog.</p>
					</div>
					<v-btn color="primary" dark @click.native.stop="dialog4 = true">Open Dialog</v-btn>
					<!-- Dialog Model Content -->
					<v-dialog v-model="dialog4" max-width="500">
						<v-card>
							<v-card-title class="headline">Use Google's location service?</v-card-title>
							<v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="warning" text="text" @click.native="dialog4 = false">Disagree</v-btn>
								<v-btn color="error" text="text" @click.native="dialog4 = false">Agree</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</app-card>
				<app-card 
					:heading="$t('message.scrollable')" 
					colClasses="xs12 md6"
					>
					<div class="mb-4">
						<p>Example of a dialog with scrollable content.</p>
					</div>
					<v-dialog v-model="dialog5" scrollable max-width="300px">
						<template v-slot:activator="{ on }">
							<v-btn color="warning" dark v-on="on">Open Dialog</v-btn>
						</template>
						<v-card>
							<v-card-title>Select Country</v-card-title>
							<v-divider></v-divider>
							<v-card-text style="height: 300px;">
								<v-radio-group v-model="dialogm1" column>
									<v-radio label="Bahamas, The" value="bahamas"></v-radio>
									<v-radio label="Bahrain" value="bahrain"></v-radio>
									<v-radio label="Bangladesh" value="bangladesh"></v-radio>
									<v-radio label="Barbados" value="barbados"></v-radio>
									<v-radio label="Belarus" value="belarus"></v-radio>
									<v-radio label="Belgium" value="belgium"></v-radio>
									<v-radio label="Belize" value="belize"></v-radio>
									<v-radio label="Benin" value="benin"></v-radio>
									<v-radio label="Bhutan" value="bhutan"></v-radio>
									<v-radio label="Bolivia" value="bolivia"></v-radio>
									<v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
									<v-radio label="Botswana" value="botswana"></v-radio>
									<v-radio label="Brazil" value="brazil"></v-radio>
									<v-radio label="Brunei" value="brunei"></v-radio>
									<v-radio label="Bulgaria" value="bulgaria"></v-radio>
									<v-radio label="Burkina Faso" value="burkina"></v-radio>
									<v-radio label="Burma" value="burma"></v-radio>
									<v-radio label="Burundi" value="burundi"></v-radio>
								</v-radio-group>
							</v-card-text>
							<v-divider></v-divider>
							<v-card-actions>
								<v-btn color="secondary" @click.native="dialog5 = false">Close</v-btn>
								<v-btn color="success" @click.native="dialog5 = false">Save</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialogm1: "",
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me 2"
        }
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" }
      ]
    };
  }
};
</script>
