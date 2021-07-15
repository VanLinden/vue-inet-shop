export default {
  addToCart: (state, payload) => {
    console.log(payload)
    state.product.push(payload)
  },
  removeFromCart: (state, payload) => {
    console.log(payload)
    const prod = state.product.find(prod => {
      return prod.id === payload.product.id
    })
    const produ = state.product.find(product => {
      return prod.id === payload.product.id
    })
    state.product.splice(state.product.indexOf(produ), 1)
  }
}
