<!-- ToDo List Widget -->
<template>
	<div>
		<app-section-loader :status="loader"></app-section-loader>
		<vue-perfect-scrollbar style="height:404px" :settings="settings">
			<v-list class="card-list todo-list list-aqua-ripple" v-if="toDoLists !== null" two-line>
				<v-list-item v-for="(item, index) in toDoLists" :key="index" href="javascript:;" ripple>
					<v-list-item-action>
						<v-checkbox color="primary" :input-value="item.completed" @click.stop="marked(item)" ></v-checkbox>
					</v-list-item-action>
					<v-list-item-content @click="marked(item)">
						<v-list-item-title :class="{'strike': item.completed}">
							<h5>{{item.title}}</h5>
						</v-list-item-title>
						<v-list-item-subtitle>
							<span class="fs-12 fw-normal">{{item.date}}</span>
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-btn fab dark small color="error" @click="onDeleteToDoList(item)" class="trash-icon">
      				<v-icon class="zmdi zmdi-delete"></v-icon>
    				</v-btn>
				</v-list-item>
			</v-list>
		</vue-perfect-scrollbar>
		<delete-confirmation-dialog ref="deleteConfirmationDialog" heading="Are You Sure You Want To Delete?" message="Are you sure you want to delete this list permanently?" @onConfirm="deleteToDo">
		</delete-confirmation-dialog>
		<app-section-loader :status="loader"></app-section-loader>
		<v-snackbar :top="y === 'top'" :timeout="timeout" v-model="snackbar">
			{{ snackbarMessage }}
		</v-snackbar>

		<v-dialog v-model="dialog" max-width="500px">
			<template v-slot:activator="{ on }">
				<v-btn color="primary" small v-on="on"  class="mx-4 my-4">
					<i class="material-icons">add</i>{{ $t('message.addNew') }}
				</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="headline">{{ $t('message.addToDo') }}</span>
				</v-card-title>
				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>
							<v-flex xs12>
								<v-menu ref="menu" :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y :nudge-right="40" min-width="290px" :return-value.sync="newToDo.date">
									<template v-slot:activator="{ on }">
										<v-text-field v-on="on" :label="$t('message.scheduleDate')" v-model="newToDo.date" prepend-icon="event" readonly></v-text-field>
									</template>
									<v-date-picker v-model="newToDo.date" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn color="primary" @click="menu = false">{{ $t('message.cancel') }}</v-btn>
										<v-btn color="warning" @click="$refs.menu.save(newToDo.date)">{{ $t('message.ok') }}</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12>
								<v-text-field :label="$t('message.title')" v-model="newToDo.title"></v-text-field>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text> 
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" @click.native="dialog = false">{{ $t('message.close') }}</v-btn>
					<v-btn color="warning" v-on:click="addToDo">{{ $t('message.add') }}</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		
	</div>
</template>

<script>
	import api from "Api";
	
	export default {
		mounted() {
			this.getTodos();
		},
		data() {
			return {
				menu: false,
				settings: {
					maxScrollbarLength: 100
				},
				toDoLists: null,
				dialog: false,
				selectDeletedCustomer: null,
				newToDo: {
					date: "",
					title: "",
					completed: false
				},
				loader: false,
				snackbar: false,
				snackbarMessage: "",
				timeout: 2000,
				y: "top"
			};
		},
		methods: {
			getTodos() {
				this.loader = true;
				api
					.get("vuely/todo.js")
					.then(response => {
						this.loader = false;
						this.toDoLists = response.data;
					})
					.catch(error => {
						console.log("error" + error);
					});
			},
			marked(item) {				
				this.loader = true;
				setTimeout(() => {
					this.loader = false;
					this.snackbar = true;
					let index = this.toDoLists.indexOf(item);
					this.toDoLists[index].completed = !item.completed;
					this.snackbarMessage = "ToDo Updated Successfully";
				}, 1500);
			},
			addToDo() {
				if (this.newToDo.title && this.newToDo.date !== "") {
					this.dialog = false;
					this.loader = true;
					setTimeout(() => {
						this.loader = false;
						let newToDoDetails = {
							date: this.newToDo.date,
							title: this.newToDo.title,
							completed: false
						};
						this.toDoLists.push(newToDoDetails);
						this.newToDo.date = "";
						this.newToDo.title = "";
						this.snackbar = true;
						this.snackbarMessage = "ToDo Added Successfully";
					}, 1500);
				}
			},
			onDeleteToDoList(toDoList) {
				this.$refs.deleteConfirmationDialog.openDialog();
				this.selectToDoList = toDoList;
			},
			deleteToDo() {
				this.$refs.deleteConfirmationDialog.close();
				this.loader = true;
				let deletedToDoList = this.toDoLists;
				let index = deletedToDoList.indexOf(this.selectToDoList);
				setTimeout(() => {
					this.loader = false;
					this.selectToDoList = null;
					this.toDoLists.splice(index, 1);
					this.snackbar = true;
					this.snackbarMessage = "ToDo List Deleted Successfully";
				}, 1500);
			}
		}
	};
</script>

<style>
	.strike {
		text-decoration: line-through;
	}
</style>