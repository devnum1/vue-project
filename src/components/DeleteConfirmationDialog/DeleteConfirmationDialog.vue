<template>
	<v-dialog v-model="open" max-width="500">
		<v-card class="pa-4">
			<v-card-title class="headline px-0 pt-0">{{ heading }}</v-card-title>
			<v-card-text class="px-0 pt-0">{{message}}</v-card-text>
			<v-card-actions class="pa-0">
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="open = false">Cancel</v-btn>
				<v-btn color="error" @click="$emit('onConfirm')">Yes</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
  props: ["heading", "message", "onConfirm"],
  data() {
    return {
      open: false
    };
  },
  methods: {
    openDialog() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>

