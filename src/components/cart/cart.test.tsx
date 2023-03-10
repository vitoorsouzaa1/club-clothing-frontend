import userEvent from '@testing-library/user-event'

import { renderWithRedux } from '../../helpers/test.helpers'
import { CartComponent } from './cart.component'

describe('CartComponent', () => {
  test('should show correct CartProducts', () => {
    const { getByText } = renderWithRedux(<CartComponent />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 'any_id',
              name: 'any_name',
              imageUrl: 'any_imageUrl',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })
    getByText(/any_name/i)
    getByText(/100/i)
    getByText('2')
    getByText('Total: R$ 200')
    getByText(/checkout/i)
  })

  test('should not show checkout button and should show an empty message if cart is empty', () => {
    const { getByText, queryByText } = renderWithRedux(<CartComponent />, {
      preloadedState: {
        cartReducer: {
          products: []
        }
      } as any
    })
    getByText(/empty cart/i)
    expect(queryByText(/checkout/i)).toBeNull()
  })

  test('should increase product quantity on increaseCartProductQuantity click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<CartComponent />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 'any_id',
              name: 'any_name',
              imageUrl: 'any_imageUrl',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })
    const increaseButton = getByLabelText(/increase quantity of any_name/i)
    userEvent.click(increaseButton)
    getByText('3')
    getByText('Total: R$ 300')
  })

  test('should decrease product quantity on decreaseCartProductQuantity click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<CartComponent />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 'any_id',
              name: 'any_name',
              imageUrl: 'any_imageUrl',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })
    const decreaseButton = getByLabelText(/decrease quantity of any_name/i)
    userEvent.click(decreaseButton)
    getByText('1')

    getByText('Total: R$ 100')
  })

  test('should remove product form cart on remove click', () => {
    const { getByLabelText, queryByText, getByText } = renderWithRedux(
      <CartComponent />,
      {
        preloadedState: {
          cartReducer: {
            products: [
              {
                id: 'any_id',
                name: 'any_name',
                imageUrl: 'any_imageUrl',
                price: 100,
                quantity: 2
              }
            ]
          }
        } as any
      }
    )
    const removeButton = getByLabelText(/remove any_name/i)

    userEvent.click(removeButton)

    expect(queryByText(/any_name/i)).toBeNull()
    getByText(/empty cart/i)
  })
})
