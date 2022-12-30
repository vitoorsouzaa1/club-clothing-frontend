import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from '../../../types/cart.types'
import { IProducts } from '../../../types/products.types'

interface IInitialState {
  isVisible: boolean
  products: ICartProduct[]
}

const initialState: IInitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    addProductToCart: (state, action: PayloadAction<IProducts>) => {
      const product = action.payload

      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productIsAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return
      }

      state.products = [...state.products, { ...product, quantity: 1 }]
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },

    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },

    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    },

    clearCart: (state) => {
      state.products = []
    }
  }
})

export const {
  toggleCart,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
