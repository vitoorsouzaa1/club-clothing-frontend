import { IProducts } from '../../../types/products.types'
import { CartActionTypes } from './cart.action-types'

interface IToggleCartAction {
  type: typeof CartActionTypes.toggleCart
}

export const toggleCart = (): IToggleCartAction => ({
  type: CartActionTypes.toggleCart
})

interface IAddProductToCartAction {
  type: typeof CartActionTypes.addProductToCart
  payload: IProducts
}

export const addProductToCart = (
  payload: IProducts
): IAddProductToCartAction => ({
  type: CartActionTypes.addProductToCart,
  payload
})

interface IRemoveProductsFromCartAction {
  type: typeof CartActionTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): IRemoveProductsFromCartAction => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

interface IICreaseCartProductQuantityAction {
  type: typeof CartActionTypes.increaseCartProductQuantity
  payload: string
}

export const increaseCartProductQuantity = (
  payload: string
): IICreaseCartProductQuantityAction => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

interface IDecreaseCartProductQuantityAction {
  type: typeof CartActionTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): IDecreaseCartProductQuantityAction => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

interface IClearCartAction {
  type: typeof CartActionTypes.clearCart
}

export const clearCart = (): IClearCartAction => ({
  type: CartActionTypes.clearCart
})

export type CartActions =
  | IToggleCartAction
  | IAddProductToCartAction
  | IRemoveProductsFromCartAction
  | IICreaseCartProductQuantityAction
  | IDecreaseCartProductQuantityAction
  | IClearCartAction
