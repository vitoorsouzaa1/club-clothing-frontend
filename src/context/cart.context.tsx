import { createContext, FunctionComponent, useState } from 'react'
import { ICartProduct } from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

interface IProps {
  children: React.ReactNode
}

export const CartContextProvider: FunctionComponent<IProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<ICartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
