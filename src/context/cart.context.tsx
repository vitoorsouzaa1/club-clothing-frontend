import { createContext, FunctionComponent, useState } from 'react'

// Utiities
import { ICartProduct } from '../types/cart.types'
import { IProducts } from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
  addProductToCart: (product: IProducts) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

interface IProps {
  children: React.ReactNode
}

export const CartContextProvider: FunctionComponent<IProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<ICartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: IProducts) => {
    const cartProducts = products.some((item) => item.id === product.id)

    if (cartProducts) {
      return setProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}
