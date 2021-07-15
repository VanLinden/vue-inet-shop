<template>
  <div>
  <h1 style="text-align: center">Cart</h1>
  <br/>
  <cartItemCard v-for="product in product" :key="product.id" :product="product" />
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'

export default {
  components: {
    CartItemCard
  },
  computed: {
    product () {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 180rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 80%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
#pic {
  width: "100%";
}
#mat-card {
  padding: 8px 10px 10px 10px;
  width: 160px;
  height: 210px;
  background-color: lightyellow;
  margin: 10px;
  border: solid chocolate 2px;
  border-radius: 6px;
  display: inline-table;
}
</style>
