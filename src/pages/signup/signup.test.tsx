import userEvent from '@testing-library/user-event'
import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'

import { renderWithRedux } from '../../helpers/test.helpers'
import { SignUpPage } from './signup.page'

jest.mock('firebase/auth')

describe('Sign Up', () => {
  it('should show error when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {})

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/the name is required/i)
    getByText(/the email is required/i)
    getByText(/the password is required/i)
    getByText(/the password is required/i)
  })

  it('should show error when filling an invalid email', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/example: mail@mail.com/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/please insert a valid email/i)
  })

  it('should show error when password and password confirmation are different', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const passwordInput = getByPlaceholderText('********')
    const passwordConfirmationInput = getByPlaceholderText('********')

    userEvent.type(passwordInput, '123456')
    userEvent.type(passwordConfirmationInput, '12345678')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/password does not match/i)
  })

  it('should show error when password has less than 6 characters', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const passwordInput = getByPlaceholderText(/the password is required/i)

    userEvent.type(passwordInput, '123')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/password cannot be less than 8 characters/i)
  })

  it('should show error if email already exists', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    mockFirebaseAuth.createUserWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.EMAIL_EXISTS })
    )

    const nameInput = getByPlaceholderText(/type your full name/i)
    const emailInput = getByPlaceholderText(/example: mail@mail.com/i)
    const passwordInput = getByPlaceholderText('********')
    const passwordConfirmationInput = getByPlaceholderText('********')

    userEvent.type(nameInput, 'Lorem')
    userEvent.type(emailInput, 'lorem@ipsum.com')
    userEvent.type(passwordInput, '12345678')
    userEvent.type(passwordConfirmationInput, '12345678')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/this email is already in use, choose another/i)
  })
})
