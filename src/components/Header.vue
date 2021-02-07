<template>
  <div class="row">
    <div class="col-4 myBtn">
      <p>Выводить по</p>
    </div>
    <div class='col-4'>
      <select class="form-select form-select-sm" v-model="pageSize" @change="setPageSize">
        <option value="4">по 4</option>
        <option value="8">по 8</option>
        <option value="12">по 12</option>
      </select>
    </div>
    <div class="col-4 myBtn">
      <button @click="clean" class="btn btn-warning">Сбросить</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageSize: 4
    }
  },
  methods: {
    setPageSize() {
      this.$store.dispatch('setPageSize', this.pageSize)
      this.$store.dispatch('setCurrent', [1])
      
    },
    clean() {
      this.pageSize = 4
      this.$store.dispatch('setPageSize', this.pageSize)
      this.$store.dispatch('setCurrent', [1])
    }
  }
}
</script>

<style scoped>
  .row {
    margin-bottom: 2.5rem;
  }
  .myBtn {
    text-align: center;
  }
</style>