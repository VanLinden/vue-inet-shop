<template>
    <div class='cart-item-card'>
        <div class="header">
            <h3>{{ product.name }}</h3>
        </div>
        <img class="image" v-bind:src="getPic(product.id)" />

        <p class="descript">{{ description }}</p>
        <button class="button" style="display:block; position: absolute; right: 10%;" @click='removeFromCart(product)'>Remove</button>
        <h4>Cost: {{ item_cost.toFixed(2) }}</h4>
    </div>
</template>

<script>

export default {
  props: ['product'],
  methods: {
    removeFromCart (product) {
      console.log(product)
      console.log(this.$store.state.product.indexOf(product))
      this.$store.state.product.splice(this.$store.state.product.indexOf(product), 1)
    },
    getPic (index) {
      return '/' + index + '.webp'
    }
  },
  computed: {
    description () {
      return this.product.description.substring(0, 220)
    },
    item_cost () {
      // return this.product.price * this.product.quantity
      return this.product.price
    }
  }
}
</script>

<style lang='scss'>
.cart-item-card {
  width: 90%;
  margin: 1%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-around;
  }
}
.image {
  width: 160px;
  display:inline-block;
  margin: 0 30px 0 30px;
}
.descript {
  display:inline-block;
  max-width: 60%;
  margin: 0 30px 0 30px
}
</style>
