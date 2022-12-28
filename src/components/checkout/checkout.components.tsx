import axios from 'axios'
import { FunctionComponent, useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../context/cart.context'

// Components
import { CartItem } from '../cart-item/cart-item.component'
import { CustomButton } from '../custom-button/custom-button.component'
import { LoadingComponent } from '../loading/loading.components'

// Styles
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.styles'

export const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`!,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoading && <LoadingComponent />}
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseClick}>
            Buy
          </CustomButton>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </CheckoutContainer>
  )
}
