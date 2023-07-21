<template>
	<div class="recent-comment-widget" >
    <app-section-loader :status="loader"></app-section-loader>
		<vue-perfect-scrollbar style="height:360px" :settings="settings">
			<v-list three-line v-if="recentComments" class="list-aqua-ripple">
				<template v-for="comment in recentComments">
					<v-list-item :key="comment.id" ripple @click="">
						<v-list-item-avatar>
							<img :src="comment.userAvatar">
						</v-list-item-avatar>
						<v-list-item-content>
							<h6 class="mb-0">{{comment.userName}}</h6>
							<span class="fs-12">commented on <a href="javascript:void(0)">{{comment.commentedOn}}</a></span>
							<p class="fs-12 mb-0 fw-normal">{{comment.body}}</p>
						</v-list-item-content>
						<v-list-item-action class="ma-0">
							<v-list-item-action-text class="d-custom-flex">
								<v-btn v-if="!comment.approved" class="mr-1" icon @click="approveComment(comment)">
									<v-icon>check</v-icon>
								</v-btn>
								<v-btn icon @click="onDeleteComment(comment)">
									<v-icon>delete</v-icon>
								</v-btn>
							</v-list-item-action-text>
						</v-list-item-action>
					</v-list-item>
				</template>
			</v-list>
		</vue-perfect-scrollbar>
	</div>
</template>

<script>
import api from "Api";

export default {
  data() {
    return {
      loader: true,
      recentComments: null,
      settings: {
        maxScrollbarLength: 160
      }
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
    onDeleteComment(comment) {
      let indexOfComment = this.recentComments.indexOf(comment);
      this.recentComments.splice(indexOfComment, 1);
    },
    approveComment(comment) {
      let indexOfComment = this.recentComments.indexOf(comment);
      this.recentComments[indexOfComment].approved = 1;
    },
    getComments() {
      api
        .get("vuely/recentComments.js")
        .then(response => {
          this.loader = false;
          this.recentComments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
