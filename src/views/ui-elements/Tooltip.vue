<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card
					:heading="$t('message.tooltip')"
					colClasses="xs12 md6"
				>
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-btn color="primary" class="ma-2" v-on="on">{{ $t('message.top') }}</v-btn>
						</template>
						<span>Top tooltip</span>
					</v-tooltip>
					<v-tooltip right>
						<template v-slot:activator="{ on }">
							<v-btn color="warning" class="ma-2" v-on="on">{{ $t('message.right') }}</v-btn>
						</template>
						<span>Right tooltip</span>
					</v-tooltip>
					<v-tooltip bottom>
						<template v-slot:activator="{ on }">
							<v-btn color="info" class="ma-2" v-on="on">{{ $t('message.bottom') }}</v-btn>
						</template>
						<span>Bottom tooltip</span>
					</v-tooltip>
					<v-tooltip left>
						<template v-slot:activator="{ on }">
							<v-btn color="error" class="ma-2" v-on="on">{{ $t('message.left') }}</v-btn>
						</template>
						<span>Left tooltip</span>
					</v-tooltip>
				</app-card>
				<app-card
					:heading="$t('message.visibility')"
					colClasses="xs12 md6"
				>
					<v-layout wrap>
						<v-flex xs6>
							<v-btn color="primary" @click.native="show = !show">{{ $t('message.toggle') }}</v-btn>
						</v-flex>
						<v-flex xs6>
							<v-tooltip v-model="show" top>
								<template v-slot:activator="{ on }">								
									<v-btn icon v-on="on">
										<v-icon color="primary">shopping_cart</v-icon>
									</v-btn>
								</template>
								<span>Programmatic tooltip</span>
							</v-tooltip>
						</v-flex>
					</v-layout>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
