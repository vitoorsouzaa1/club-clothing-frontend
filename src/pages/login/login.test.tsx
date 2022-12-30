import userEvent from '@testing-library/user-event'
import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'

import { renderWithRedux } from '../../helpers/test.helpers'
import { LoginPage } from './login.page'

jest.mock('firebase/auth')

describe('Login', () => {
  it('should show erros when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/the email is required/i)
    getByText(/the password is required/i)
  })

  it('should show error if email is invalid', async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/email@mail.com/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/please insert a valid email/i)
  })

  it('should show an error if email is not found', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.USER_DELETED })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/email@mail.com/i)

    userEvent.type(emailInput, 'lorem@ipsum.com')

    const passwordInput = getByPlaceholderText(/password/i)

    userEvent.type(passwordInput, '12345678')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/email not found/i)
  })

  it('should show an error if password is not valid', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.INVALID_PASSWORD })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/email@mail.com/i)

    userEvent.type(emailInput, 'lorem@ipsum.com')

    const passwordInput = getByPlaceholderText(/password/i)

    userEvent.type(passwordInput, '123456')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/invalid password/i)
  })
})
