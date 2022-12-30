import { renderWithRedux } from '../../helpers/test.helpers'
import { Header } from './header.component'

describe('Header Component', () => {
  test('should show sing out button if user is authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: true } } as any
    })
    getByText('Sign Out')
  })

  test('should show sing out button if user is not authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: false } } as any
    })
    getByText('Login')
    getByText('Create Account')
  })

  test('should show correct cart products', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 'any_id',
              imageUrl: 'any_imageUrl',
              name: 'any_name',
              price: 100,
              quantity: 5
            },

            {
              id: 'any_id',
              imageUrl: 'any_imageUrl',
              name: 'any_name',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })
    getByText('7')
  })
})
