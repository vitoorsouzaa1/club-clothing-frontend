import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../context/cart.context'

// Components
import { CustomButton } from '../custom-button/custom-button.component'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'

export const CartComponent: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Cart</CartTitle>

        {/* products */}
        <CartTotal>Total: U$ 888</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}
