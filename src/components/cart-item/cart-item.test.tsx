import { renderWithRedux } from '../../helpers/test.helper'
import { ICartProduct } from '../../types/cart.types'
import { CartItem } from './cart-item.component'

describe('Cart Item Component', () => {
  test('should show correct Cart items', () => {
    const cartItem: ICartProduct = {
      id: 'any_id',
      name: 'any_name',
      imageUrl: 'any_imageUrl',
      price: 150,
      quantity: 3
    }

    const { getByText, getByLabelText } = renderWithRedux(
      <CartItem product={cartItem} />,
      {}
    )

    getByText(/any_name/i)
    getByText(/150/i)
    getByText('3')
    getByLabelText(/increase quantity of any_name/i)
    getByLabelText(/decrease quantity of any_name/i)
    getByLabelText(/remove any_name/i)
  })
})
