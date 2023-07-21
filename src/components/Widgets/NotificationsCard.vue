<template>
<div class="notification-card-content">
	<div v-for="( notification, index ) in notifications" :key="index">
		<v-card
			:color="notification.color"
			dark
		>
			<v-card-text class="v-input__prepend-outer">
			   {{ notification.content }}
			</v-card-text>
		</v-card>
		<br>
	</div>
	
</div>
	
</template>

<script>
export default {
  data() {
    return {
		notifications:[
			{
				color:"#5d92f4",
				content:"Site goes is down for 6 hours due to maintainance and bug fixing.Please Check"

			},
			{
				color:"#00d0bd",
				content:"New users from March is promoted as special benefit under promotional offer of 30%."

			},
			{
				color:"#ff3739",
				content:"Bug detected from the development team at the cart module of Fashion store."

			},

		],
      settings: {
        maxScrollbarLength: 150
      }
    };
  }
};
</script>
