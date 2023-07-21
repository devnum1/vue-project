<template>
	<div class="contact-wrapper">
      <page-title-bar></page-title-bar>
		<v-container fluid pt-0 grid-list-xl>
		   <v-layout row wrap align-items-center search-wrap>
            <v-flex xs12 sm12 md12 lg12  align-items-center pt-0>
               <app-card
                  customClasses="mb-0 py-12"
               >
                  <v-layout row wrap >
                     <v-flex xs12 sm12 md12 lg3 align-items-center>
								<h2 class="mb-0">Search</h2>
                     </v-flex>      
                     <v-flex xs12 sm12 md12 lg9 pb-0> 
                        <div class="d-flex search-field-wrap">   
                           <div class="w-75">
                              <v-text-field 
                                 class=" pt-0 pr-3"
                                 label="Search Projects"
                                 >
                              </v-text-field>
                           </div>
                           <div>
                              <v-btn color="primary" class="my-0 ml-0 mr-2" medium>Search</v-btn>
                              <v-btn color="primary m-0" medium @click="openDialog()" >Add<i class="material-icons">add</i></v-btn>
                           </div>
                        </div>
                     </v-flex>
                   </v-layout>
               </app-card>
            </v-flex>   
         </v-layout>   
         <v-layout row wrap>
            <app-card
   				colClasses="xl12 lg12 md12 sm12 xs12"
   				customClasses="mb-0 client-wrapper"
   			>
               <clients-details :clientData="clientData"></clients-details>
   			</app-card>
         </v-layout>
		</v-container>
      <template>
         <v-dialog v-model="open" max-width="600">
           <v-card class="pa-6">
               <v-text-field label="Name" v-model="editName" required></v-text-field>
               <v-text-field label="Email" v-model="editEmail" required></v-text-field>
               <v-text-field label="Phone Number"  v-model="editPhoneNo" required></v-text-field>
               <v-text-field label="Location" v-model="editLocation" required></v-text-field>

               <v-card-actions class="pa-0">
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="open = false">Cancel</v-btn>
                  <v-btn color="error" @click="addClient()">Add</v-btn>
               </v-card-actions>
           </v-card>
         </v-dialog>
      </template>
	</div>
</template>

<script>
import ClientsDetails from 'Components/Widgets/ClientsDetails'
import { clientData } from 'Views/crm/data.js'

export default {
  components: {
     ClientsDetails
  },
  data() {
    return {
      clientData,
      open: false,
      editName:'',
      editEmail: '',
      editPhoneNo:'',
      editLocation:''          
    };
  },
  methods:{
    addClient(){
      this.openDialog();
    },
    openDialog(){
      this.open = true;
    },
    close(){
      this.open = false;
    },
    addClient(){
      var clientsArr = clientData.Clients;
      
      var newClient = {
        image : "/static/avatars/user-1.jpg",
        name: this.editName,
        e_mail: this.editEmail,
        phone_number: this.editPhoneNo,
        country: this.editLocation,
        tag: "recently_added"
      }
      clientsArr.push(newClient);
      this.editName='';
      this.editEmail='';
      this.editPhoneNo='';
      this.editLocation='';

      this.close();
    }
  }
};
</script>
