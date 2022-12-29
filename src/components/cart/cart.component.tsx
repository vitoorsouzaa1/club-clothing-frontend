import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { CartContext } from '../../context/cart.context'
import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/cart/cart.actions'
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
  const { productsTotalPrice, productsCount } = useContext(CartContext)

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
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
