<template>
    <div>
    <div class='drawer-background' :class="{show: active}" @click="$emit('close-product-drawer')" />

    <div class='drawer' :class="{show: active}">
        <div class='drawer-close' @click="$emit('close-product-drawer')">
        X
        </div>

        <div v-if='product' class="product-details">
            <h3>{{ product.name }}</h3>
            <h3>{{ product.category }}</h3>
            <p class="description">{{ product.description }}</p>
            <img class="gallery-panel img" v-bind:src="getPic(product.id)" />
            <h3>€{{ product.price.toFixed(2) }}</h3>

            <div class="button-container">
                <button class="add" @click="appendToCart(product.id, product.name, product.category, product.price, product.description)">Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ['product', 'active'],
  methods: {
    appendToCart (productId, productName, productCategory, productPrice, productDescription) {
      const payload = {
        id: productId,
        name: productName,
        price: productPrice,
        category: productCategory,
        description: productDescription
      }
      this.$store.commit('addToCart', payload)
    },
    getPic (index) {
      return '/' + index + '.webp'
    }
  }
}
</script>

<style lang='scss'>
    .drawer-background {
        widows: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(124, 124, 124, 0.55);
        z-index: 100;
        display: none;
        transition: display .5s;

        &.show {
            display: block;
        }
    }

    .drawer {
        width: 95vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: -105vw;
        padding: 15px;
        transition: left .5s;
        z-index: 101;
        overflow-y: scroll;

        &.show {
            left: 0;
        }
    }

    .drawer-close {
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 5px;
        right: 10px;
        border: 2px solid gray;
        color: gray;
        width: 28px;
        float: right;
        cursor: pointer;

        &:hover {
            background-color: lightgray;
        }
    }

    .product-details {
        display: flex;
        justify-content: center;
        flex-direction: column;

        description {
            padding: 20px;
            line-height: 1.5rem;
        }

        .button-container {
            button {
                width: 150px;
                border: none;
                padding: 10px;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }
        }
    }

    @media (min-width: 500px) {
        .drawer {
            width: 450px;
        }
    }
</style>
