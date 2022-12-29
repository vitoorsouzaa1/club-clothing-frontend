import { IProducts } from '../../../types/products.types'
import { CartActionTypes } from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: IProducts) => ({
  type: CartActionTypes.addProductToCart,
  payload
})
