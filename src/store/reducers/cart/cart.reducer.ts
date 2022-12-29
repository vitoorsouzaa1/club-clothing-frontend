import { ICartProduct } from '../../../types/cart.types'
import { CartActionTypes } from './cart.action-types'

interface IInitialState {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: ICartProduct[]
}

const initialState: IInitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionTypes.addProductToCart: {
      const product = action.payload

      const producIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (producIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        ...state,
        products: [...state.products, { ...product, quatity: 1 }]
      }
    }

    default:
      return { ...state }
  }
}
