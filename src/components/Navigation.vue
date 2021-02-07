<template>
  <div class="main">
    <p>Страница {{current}}/{{pageNumber}}</p>
    <div class="btn-group" role="group">
    <button @click="changeCurrent(false)" class="btn btn-primary mr-1">Назад</button>
    <button @click="changeCurrent(true)" class="btn btn-primary">Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeCurrent(next) {
      if (next) {
        this.$store.dispatch('setCurrent', [this.$store.getters.getCurrent + 1, true])
      } else {
        this.$store.dispatch('setCurrent', [this.$store.getters.getCurrent - 1, false])
      }
    }
  },
  computed: {
    pageNumber() {
      return this.$store.getters.getPageNumber
    },
    current() {
      return this.$store.getters.getCurrent
    }
  }
}
</script>

<style scoped>
  div.main {
    text-align: center;
  }
</style>