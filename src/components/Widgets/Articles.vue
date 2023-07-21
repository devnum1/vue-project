<template>
   <div class="articles-widget">
		 <app-section-loader :status="loader"></app-section-loader>
      <v-data-table
			:headers="headers"
			:items="data"
			hide-default-footer
		>
         <template v-slot:item="{ item }">
				<tr>
				<td class="d-custom-flex py-4">
					<div class="mr-3 d-custom-flex align-center post-img">
						<img :src="item.thumbnail" class="img-responsive" width="104" height="69">
					</div>
					<div class="w-80 py-1">
						<p class="mb-0 fw-light">{{ item.title }}</p>
						<span class="grey--text fs-12 fw-normal">{{item.publish}}, By {{item.author}}</span>
					</div>
				</td>
				<td>{{ item.likes }}</td>
				<td>{{ item.comments }}</td>
				<td class="fw-semi-bold">{{ item.visitors }}</td>
				<td>
					<v-menu
						origin="center center"
						transition="scale-transition"
						left
					>
						<template v-slot:activator="{ on }">
							<v-btn v-on="on" icon>
								<v-icon>more_vert</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item @click="">
								<v-list-item-title>Edit</v-list-item-title>
							</v-list-item>
							<v-list-item @click="">
								<v-list-item-title>Hide</v-list-item-title>
							</v-list-item>
							<v-list-item @click="">
								<v-list-item-title>Disable Comments</v-list-item-title>
							</v-list-item>
							<v-list-item @click="">
								<v-list-item-title>Move To Trash</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</td>
				</tr>
			</template>
		</v-data-table>
   </div>
</template>

<script>
import api from "Api";

export default {
  data() {
    return {
      loader: true,
      headers: [
        {
          text: "Article Name",
          sortable: false,
          value: "articleName"
        },
        { text: "Likes", value: "likes", sortable: false },
        { text: "Comments", value: "comments", sortable: false },
        { text: "Visitors", value: "visitors", sortable: false },
        { text: "", value: "action", sortable: false }
      ],
      data: []
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      const self = this;
      api
        .get("vuely/articles.js")
        .then(response => {
          self.loader = false;
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>