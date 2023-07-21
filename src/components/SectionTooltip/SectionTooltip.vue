<template>
	<div class="dash-title">
		<span>{{title}}</span>
		<v-tooltip v-model="open" top>
			<template v-slot:activator="{ on }">
				<a href="javascript:void(0);" v-on="on">
					<v-icon>ti-help-alt</v-icon>
				</a>
			</template>
			<span>{{tooltip}}</span>
		</v-tooltip>
	</div>
</template>

<script>
export default {
  props: ["title", "tooltip"],
  data() {
    return {
      open: false
    };
  }
};
</script>

