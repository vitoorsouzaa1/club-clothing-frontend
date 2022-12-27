import { createContext, FunctionComponent, useState } from 'react'

// Utiities
import { ICartProduct } from '../types/cart.types'
import { IProducts } from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
  addProductToCart: (product: IProducts) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
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

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
