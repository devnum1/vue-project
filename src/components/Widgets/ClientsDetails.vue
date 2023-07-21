<template>
<div class="contact-tab-wrapper">			
	<v-tabs v-model="active" slider-color="primary">
		<v-tab v-for="t in tabHead" :key="t.key" ripple class="text-capitalize">
		  {{$t('message'+'.'+t.tab_name)}}
		</v-tab>
		<v-tab-item>
			<br>
			<v-layout row wrap >
				<template v-for="(details,index) in clientData.Clients " >					
					<app-card 
                  v-if="details.tag == 'favourite' || 'recently_added'" 
                  :id="index"
                  colClasses="xl3 lg3 md4 sm6 xs12"
                   >
                     <v-layout wrap contact-item-info>
                        <v-flex xs12 lg12 md12 sm-12 text-center>
                           <div class="tab-image">
      						      <img :src="details.image"/>
                           </div>
                        </v-flex>
                        <v-flex xs12 lg12 md12 sm-12 text-center pt-0>
         						<h5 class="primary--text"><a href="javascript:void(0);">{{ details.name }}</a></h5>
         						<span class="d-block text-ellipse contact-links font-sm"><a href="mailto:JerryBRied@jourrapide.com" class="grey--text">{{ details.e_mail }}</a></span>
         						<span class="d-block contact-links font-sm"><a class="grey--text" href="tel:+12075894752">{{ details.phone_number }}</a></span>
         						<span class="font-sm grey--text">{{ details.country }}</span>
                        </v-flex>
                     </v-layout>      
						<v-list three-line class="icon">
							<v-list-item :ripple="false" @click="" class="pl-0">
								<v-list-item-action class="ma-0">
									<v-list-item-action-text class="d-flex">
										<v-btn class="mr-1" icon @click="onEditClients(details)">
											<v-icon class="grey--text font-md">edit</v-icon>
										</v-btn>
										<v-btn icon @click="onDeleteClients(details)">
											<v-icon class="grey--text font-md">delete</v-icon>
										</v-btn>
									</v-list-item-action-text>
								</v-list-item-action>
							</v-list-item>
						</v-list>
					</app-card>
				</template>
			</v-layout>
		</v-tab-item>

		<v-tab-item>
			<br>
			<v-layout row wrap>
				<template v-for="(details,key,index) in clientData.Clients" >							
					<app-card v-if="details.tag == 'favourite'"
               colClasses="xl3 lg3 md6 sm6 xs12"
                >
                  <v-layout row wrap contact-item-info>
                     <v-flex xs12 lg12 md12 sm-12 text-center>
                        <div class="tab-image">
						         <img :src="details.image"/>
                        </div>
                     </v-flex>   
                     <v-flex xs12 lg12 md12 sm-12 text-center pt-0>   
   						   <h5 class="primary--text"><a href="javascript:void(0);">{{ details.name }}</a></h5>
   						   <span class="d-block text-ellipse contact-links font-sm"><a href="mailto:JerryBRied@jourrapide.com" 
                        class="grey--text">{{ details.e_mail }}</a></span>
   						   <span class="d-block contact-links font-sm"><a href="tel:+12075894752" class="grey--text">{{ details.phone_number }}</a></span>
   						   <span class="font-sm grey--text">{{ details.country }}</span>
                     </v-flex>
                  </v-layout>

						<v-list three-line class="icon">
							<v-list-item :ripple="false" @click="" class="pl-0">
								<v-list-item-action class="ma-0">
									<v-list-item-action-text class="d-flex">
										<v-btn class="mr-1" icon @click="onEditClients(details)">
											<v-icon class="grey--text font-md">edit</v-icon>
										</v-btn>
										<v-btn icon @click="onDeleteClients(details)">
											<v-icon class="grey--text font-md">delete</v-icon>
										</v-btn>
									</v-list-item-action-text>
								</v-list-item-action>
							</v-list-item>
						</v-list>
					</app-card>
				</template>
			</v-layout>
		</v-tab-item>

		<v-tab-item>
			<br>
			<v-layout row wrap>
				<template v-for="(details,key,index) in clientData.Clients" >
					<app-card v-if="details.tag == 'recently_added'"
                  colClasses="xl3 lg3 md6 sm6 xs12"
                >
                   <v-layout row wrap contact-item-info>
                     <v-flex xs12 lg12 md12 sm-12 text-center>
                        <div class="tab-image">
         						<img :src="details.image"/>
                        </div>
                     </v-flex>      
         				<v-flex xs12 lg12 md12 sm-12 text-center pt-0>   
                        <h5 class="primary--text">{{ details.name }}</h5>
                        <span class="d-block text-ellipse contact-links font-sm"><a class="grey--text" href="mailto:JerryBRied@jourrapide.com">{{ details.e_mail }}</a></span>
                        <span class="d-block contact-links font-sm"><a class="grey--text" href="tel:+12075894752">{{ details.phone_number }}</a></span>
                        <span class="font-sm grey--text">{{ details.country }}</span>
                     </v-flex>
                  </v-layout>   
						<v-list three-line class="icon">
							<v-list-item :ripple="false" @click="" class="pl-0">
								<v-list-item-action class="ma-0">
									<v-list-item-action-text class="d-flex">
										<v-btn class="mr-1" icon @click="onEditClients(details)">
											<v-icon class="grey--text font-md">edit</v-icon>
										</v-btn>
										<v-btn icon @click="onDeleteClients(details)">
											<v-icon class="grey--text font-md">delete</v-icon>
										</v-btn>
									</v-list-item-action-text>
								</v-list-item-action>
							</v-list-item>
						</v-list>
					</app-card>
				</template>
			</v-layout>
		</v-tab-item>
	</v-tabs>
	<delete-confirmation-dialog
		ref="deleteConfirmationDialog"
		heading="Are You Sure You Want To Delete?"
		message="Are you sure you want to delete this Client permanently?"
		@onConfirm="deleteClientItem"
	>
	</delete-confirmation-dialog>
	<template>
		<v-dialog v-model="open" max-width="600">
			<v-card class="pa-6">
				<v-text-field label="Name" v-model="editName" required></v-text-field>
				<v-text-field label="Email" v-model="editEmail" required></v-text-field>
				<v-text-field label="Phone Number"  v-model="editPhoneNo" required></v-text-field>
				<v-text-field label="Location" v-model="editLocation" required></v-text-field>

				<v-card-actions class="pa-0">
					<v-spacer></v-spacer>
					<v-btn color="primary" @click="open = false" class="px-4">Cancel</v-btn>
					<v-btn color="error" @click="editClientItem" class="px-4">Update</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</template>
</div>

</template>
  
<script>

export default {
	props: ['clientData'],
	data () {
		return {
			active: null,
			selectItemToDelete:null,
			selectedTabName:null,
			selectItemToEdit:null,
			open: false,
			editName:"",
			editEmail:"",
			editPhoneNo:"",
			editLocation:"",
			tabHead:[
				{key:"all", tab_name: 'allClients'},
				{key:"favourite", tab_name: 'favourite'},
				{key:"recently_added", tab_name: 'recentlyAdded'}					
			]
		}
	},
	methods:{
		onDeleteClients(item) {
			this.$refs.deleteConfirmationDialog.openDialog();
			this.selectItemToDelete = item;
		},
		deleteClientItem() {
			this.$refs.deleteConfirmationDialog.close();
			let deletedClient = this.clientData.Clients;
			let index = deletedClient.indexOf(this.selectItemToDelete);
			deletedClient.splice(index,1);			
		},					
		onEditClients(item){
			this.openDialog();
			this.editName=item.name;
			this.editEmail=item.e_mail;
			this.editPhoneNo=item.phone_number;
			this.editLocation=item.country;
			this.selectItemToEdit = item;
		},
		editClientItem(){
			let editClient = this.clientData.Clients;
			let index = editClient.indexOf(this.selectItemToEdit);
			editClient[index].name= this.editName
			editClient[index].e_mail= this.editEmail
			editClient[index].phone_number= this.editPhoneNo
			editClient[index].country= this.editLocation
			this.close();			
		},
		openDialog(){
			this.open = true;
		},
		close(){
			this.open = false;
		}
	}
}
</script>