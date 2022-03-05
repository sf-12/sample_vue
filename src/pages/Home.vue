<template>
  <div>
    <h1>Home Page</h1>
    <v-data-table
      :headers="headers"
      :items="samples"
      :items-per-page="5"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: [
        {text: 'ID', value: 'id', align: 'center'},
        {text: '名前', value: 'name', align: 'center'},
        {text: '状態', value: 'status', align: 'center'},
      ],
      samples: [],
    };
  },
  mounted() {
    this.getSamples()
  },
  methods: {
    getSamples() {
      axios.get('http://localhost:3000/api/v1/samples').then(res => {
        console.log("res.data['samples']:",res.data['samples'])
        this.samples = res.data['samples']
      })
    }
  }
}
</script>
