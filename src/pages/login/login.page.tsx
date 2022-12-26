import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import validator from 'validator'

// Components
import { Header } from '../../components/header/header.component'
import { CustomButton } from '../../components/custom-button/custom-button.component'
import { CustomInput } from '../../components/custom-input/custom-input.component'
import { InputErrorMessage } from '../../components/input-error-message/input-error-message.component'

// Utilities
import { auth } from '../../config/firebase.config'

// Styles
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  LoginContent
} from './login.styles'

interface ILoginForm {
  email: string
  password: string
}

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<ILoginForm>()

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      const err = error as AuthError

      if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }

      if (err.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    }
  }

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Login with your account</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={20} />}>
            Login with Google
          </CustomButton>

          <LoginSubtitle>or use your e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Email@mail.com"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>The email is required</InputErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>Email not found</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Please insert a valid email</InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Password"
              {...register('password', { required: true })}
              type="password"
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>The password is required</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Invalid password</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={20} />}>
            Login
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
