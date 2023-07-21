<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.simpleTable')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
        <div class="mb-30">
          <p>The <code>v-simple-table</code> component is a simple wrapper component around the &lt;table&gt; element. Inside the component you can use all the regular table elements such as &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, etc.</p>
        </div>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </app-card>
    </v-layout>
  </v-container>
</div>
</template>
  

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>