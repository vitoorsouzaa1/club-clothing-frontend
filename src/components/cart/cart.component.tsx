import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

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
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Cart</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleCheckoutClick}>
            Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Empty cart.</p>}
      </CartContent>
    </CartContainer>
  )
}
