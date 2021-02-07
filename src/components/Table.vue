<template>
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th>Артикул</th>
      <th>Название товара</th>
      <th>Бренд</th>
      <th>Вес</th>
      <th>Фасовка</th>
      <th>Цена</th>
      <th>Наличие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="elem in data" :key = "elem.brand + elem.price">
      <th>{{elem.artnumber}}</th>
      <th>{{elem.name}}</th>
      <th>{{elem.brand}}</th>
      <th>{{elem.weight}}</th>
      <th>{{elem.quantity}}</th>
      <th>{{elem.price}}</th>
      <th>{{elem.stock === '0' ? 'нет в наличии' : 'в наличии'}}</th>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.getData
    }
  }
}
</script>