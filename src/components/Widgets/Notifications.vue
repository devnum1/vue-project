<template>
	<vue-perfect-scrollbar style="height:410px" :settings="settings">
		<v-list two-line class="notification-wrap">
			<template v-for="item in notifications">
				<v-list-item
					ripple
					:key="item.id"
					@click=""
				>
					<v-list-item-avatar>
						<v-icon :color="item.iconColor">{{item.icon}}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-subtitle class="grey--text fs-12 fw-normal">{{item.label}}</v-list-item-subtitle>
						<v-list-item-title><h6 class="mb-0">{{item.body}}</h6></v-list-item-title>
					</v-list-item-content>
					<v-list-item-action>
						<v-list-item-action-text>{{item.time}}</v-list-item-action-text>
					</v-list-item-action>
				</v-list-item>
			</template>
		</v-list>
	</vue-perfect-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          id: 1,
          body: "New invoice received",
          label: "Admin",
          time: "1 Hour Ago",
          icon: "notifications_active",
          iconColor: "warning"
        },
        {
          id: 2,
          body: "New Feedback from Aric",
          label: "Admin",
          time: "1 Hour Ago",
          icon: "format_quote",
          iconColor: "primary"
        },
        {
          id: 3,
          body: "DB overloaded 80% ",
          label: "Action",
          time: "1 Hour Ago",
          icon: "notifications_active",
          iconColor: "info"
        },
        {
          id: 4,
          body: "System error - Check",
          label: "Error",
          time: "1 Hour Ago",
          icon: "warning",
          iconColor: "error"
        },
        {
          id: 5,
          body: "System Memory Full",
          label: "Timeout",
          time: "1 Hour Ago",
          icon: "access_alarm",
          iconColor: "warning"
        },
        {
          id: 6,
          body: "Production server up",
          label: "System",
          time: "1 Hour Ago",
          icon: "access_alarm",
          iconColor: "primary"
        },
        {
          id: 7,
          body: "Clear server cache for more space",
          label: "Timeout",
          time: "1 Hour Ago",
          icon: "access_alarm",
          iconColor: "warning"
        }
      ],
      settings: {
        maxScrollbarLength: 150
      }
    };
  }
};
</script>
