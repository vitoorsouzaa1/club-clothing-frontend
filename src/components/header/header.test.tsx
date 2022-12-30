import { renderWithRedux } from '../../helpers/test.helper'
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
})
