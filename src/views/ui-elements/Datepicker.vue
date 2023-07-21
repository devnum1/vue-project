<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.datePickerHorizontal')" 
					contentCustomClass="div-responsive"
					colClasses="xs12 md6"
					>
					<v-date-picker v-model="datepicker"></v-date-picker>
				</app-card>
				<app-card 
					:heading="$t('message.datePickerVertical')" 
					contentCustomClass="div-responsive"
					colClasses="xs12 md6"
					>
					<v-date-picker v-model="datepicker2" landscape></v-date-picker>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.datePickersInDialogAndMenu')" 
					colClasses="xs12 md6"
					>
					<v-menu 
						ref="menu"  
						:close-on-content-click="false" 
						v-model="menu" 
						transition="scale-transition" 
						offset-y 
						full-width 
						:nudge-right="40" 
						min-width="290px" 
						:return-value.sync="date"
						>
						<template v-slot:activator="{ on }">						
							<v-text-field v-on="on" label="Picker in menu" v-model="date" prepend-icon="event" readonly></v-text-field>
						</template>
						<v-date-picker v-model="date" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn color="primary" @click="menu = false">Cancel</v-btn>
							<v-btn color="warning" @click="$refs.menu.save(date)">OK</v-btn>
						</v-date-picker>
					</v-menu>
				</app-card>

				<app-card 
					:heading="$t('message.datePickersWithModal')"
					colClasses="xs12 md6"
					>
					<v-dialog
			        ref="dialog"
			        v-model="modal"
			        :return-value.sync="date"
			        persistent
			        full-width
			        width="290px"
			      >
			        <template v-slot:activator="{ on }">
			          <v-text-field
			            v-model="date2"
			            label="Picker in dialog"
			            prepend-icon="event"
			            readonly
			            v-on="on"
			          ></v-text-field>
			        </template>
			        <v-date-picker v-model="date2" scrollable>
			          <div class="flex-grow-1"></div>
			          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
			          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
			        </v-date-picker>
			      </v-dialog>
				</app-card>
			</v-layout>
			<v-layout row wrap>
				<app-card 
					:heading="$t('message.datePickersFormattingDate')" 
					colClasses="xs12 md6"
					>
					<v-menu 
						ref="menu1"  
						:close-on-content-click="false" 
						v-model="menu1" 
						transition="scale-transition" 
						offset-y 
						full-width 
						:nudge-right="40" 
						min-width="290px" 
						:return-value.sync="date1"
						>
						<template v-slot:activator="{ on }">
							<v-text-field 
								v-on="on" 
								label="Date in M/D/Y format" 
								v-model="dateFormatted" 
								prepend-icon="event" 
								@blur="date1 = parseDate(dateFormatted)" 
								readonly
								>
							</v-text-field>
						</template>
						<v-date-picker 
							v-model="date1" 
							@input="dateFormatted = formatDate($event)" 
							no-title 
							scrollable
							>
							<v-spacer></v-spacer>
							<v-btn color="error" @click="menu1 = false">Cancel</v-btn>
							<v-btn color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
						</v-date-picker>
					</v-menu>
					<p>Date in ISO format:
						<strong>{{ date1 }}</strong>
					</p>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      datepicker: null,
      datepicker2: null,
      date: null,
      date1: null,
      date2: new Date().toISOString().substr(0, 10),
      menu: false,
      menu1: false,
      modal: false,
      dateFormatted: null
    };
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return null;
      }
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) {
        return null;
      }
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
