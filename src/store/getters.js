export default {
  productQuantity: (state) => {
    return state.product.length
  },
  cartItems: (state) => {
    return state.product
  }
  // cartTotal: (state) => {
  //   return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
  // }
}
