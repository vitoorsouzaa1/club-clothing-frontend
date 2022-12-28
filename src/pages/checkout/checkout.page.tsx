import { FunctionComponent } from 'react'

// Components
import { Checkout } from '../../components/checkout/checkout.components'
import { Header } from '../../components/header/header.component'

export const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  )
}
