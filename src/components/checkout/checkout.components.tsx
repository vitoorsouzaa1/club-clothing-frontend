import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../context/cart.context'
import { CartItem } from '../cart-item/cart-item.component'
import { CustomButton } from '../custom-button/custom-button.component'

// Styles
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.styles'

export const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>Buy</CustomButton>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </CheckoutContainer>
  )
}
