export const CartActionTypes = {
  toggleCart: 'cart/toggle' as const,
  addProductToCart: 'cart/addProduct' as const,
  removeProductFromCart: 'cart/removeProduct' as const,
  increaseCartProductQuantity: 'cart/increaseProductQuantity' as const,
  decreaseCartProductQuantity: 'cart/decreaseProductQuantity' as const,
  clearCart: 'cart/ClearCart' as const
}
