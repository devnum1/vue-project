<template>
  	<div class="hot-keywords">
    	<app-section-loader :status="loader"></app-section-loader>
    	<vue-perfect-scrollbar style="height:584px" :settings="settings">
			<v-data-table
			:headers="headers"
			:items="keywords"
			hide-default-footer
			>
        <template v-slot:item="{ item }">
          <tr>            
					  <td>{{ item.name }}</td>
					  <td>{{ item.visitors }}</td>
					  <td>{{ item.visitDuration }}</td>
          </tr>
				</template>
			</v-data-table>
    	</vue-perfect-scrollbar>
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
          text: "Keyword Name",
          sortable: false,
          value: "keywordName"
        },
        {
          text: "Unique Visitors",
          value: "uniqueVisitors",
          sortable: false
        },
        {
          text: "Visit duraton",
          value: "visitduraton",
          sortable: false
        }
      ],
      keywords: [],
      settings: {
        maxScrollbarLength: 150
      }
    };
  },
  mounted() {
    this.getKeywords();
  },
  methods: {
    getKeywords() {
      api
        .get("vuely/hotKeywords.js")
        .then(response => {
          this.loader = false;
          this.keywords = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
