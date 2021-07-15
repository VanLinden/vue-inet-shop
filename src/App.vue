<template>
  <div>
    <div id="nav">
      <router-link :class="{active: $route.name === 'Home'}" to="/">Products</router-link> |
      <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
      <span style="color: blue; font-weight: bold; font-size: 1.25rem;"> - {{ productQuantity }}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'productQuantity'
    ])
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  line-height: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: blue;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &active {
      color: #2c3e50;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
