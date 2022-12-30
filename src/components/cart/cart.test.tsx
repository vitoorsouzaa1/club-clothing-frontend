import { renderWithRedux } from '../../helpers/test.helper'
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
})