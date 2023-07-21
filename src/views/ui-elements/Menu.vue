<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl fluid pt-0>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.activator')" 
					colClasses="xs12 sm4 md4"
				>
					<v-menu offset-y>
						<template v-slot:activator="{ on }">
							<v-btn color="primary" dark v-on="on">Dropdown</v-btn>
						</template>
						<v-list>
							<v-list-item v-for="item in list1" :key="item.title" @click="">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</app-card>
				<app-card 
					:heading="$t('message.hover')" 
					colClasses="xs12 sm4 md4"
				>
					<v-menu open-on-hover top offset-y>
						<template v-slot:activator="{ on }">
						<v-btn color="error" dark v-on="on">Dropdown</v-btn>
						</template>
						<v-list>
							<v-list-item v-for="item in list1" :key="item.title" @click="">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</app-card>
				<app-card 
					:heading="$t('message.menus')" 
					colClasses="xs12 sm4 md4"
				>
					<v-menu bottom right>
						<template v-slot:activator="{ on }">
							<v-btn icon v-on="on">
								<v-icon>more_vert</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item v-for="item in list1" :key="item.title" @click="">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data: () => ({
    list1: [
      { title: "Refresh" },
      { title: "Settings" },
      { title: "Help" },
      { title: "Sign Out" }
    ]
  })
};
</script>
