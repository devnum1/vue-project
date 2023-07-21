<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<app-card
					:heading="$t('message.fileInput')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>The <code>v-file-input</code> component is a specialized input that provides a clean interface for selecting files.</p>
					</div>
					<v-file-input label="File input"></v-file-input>
				</app-card>

				<app-card
					:heading="$t('message.chips')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>The <code>chips</code> props is used to display the selected file as chips.</p>
					</div>
					<div>
					   <v-file-input chips multiple label="File input w/ chips"></v-file-input>
					</div>
				</app-card>

				<app-card
					:heading="$t('message.size')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p>The <code>show-size</code> props is used to display the size of selected file.</p>
					</div>
					<div>
						<v-file-input show-size label="File input"></v-file-input>
					</div>
				</app-card>

				<app-card
					:heading="$t('message.validation')"
					customClasses="mb-30"
					colClasses="xl12 lg12 md12 sm12 xs12"
				>
					<div class="mb-5">
						<p><code>:rules="rules"</code> props is used to add validation. Image size must be less then 2 MB.</p>
					</div>
					<div>
						<v-file-input
						   :rules="rules"
						   accept="image/png, image/jpeg, image/bmp"
						   placeholder="Pick an avatar"
						   prepend-icon="mdi-camera"
						   label="Avatar"
						   show-size
						></v-file-input>
					</div>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template> 
<script>
export default {
   data(){
    	return{
    		rules: [
	        value => !value || value.size < 500000 || 'Avatar size should be less than 2 MB!',
	      ],	
    	}
  	}
}  	
</script>