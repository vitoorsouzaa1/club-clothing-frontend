import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../context/cart.context'
import { CartItem } from '../cart-item/cart-item.component'

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
  const { isVisible, products, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Cart</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <CartTotal>Total: U$ 888</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}
