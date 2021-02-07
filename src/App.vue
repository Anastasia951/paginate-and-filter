<template>
  <div id="app">
    <Header/>
    <Table/>
    <Navigation/>
  </div>
</template>

<script>
import Table from './components/Table'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Table, Header,
    Navigation
  },
  async mounted() {
    const data = await fetch('http://localhost:8080/db.json')
    this.$store.dispatch('setData', await data.json())
  },
}
</script>