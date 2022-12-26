/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

// Components
import { Header } from '../../components/header/header.component'
import { CustomButton } from '../../components/custom-button/custom-button.component'

// Styles
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  LoginContent
} from './login.styles'
import { CustomInput } from '../../components/custom-input/custom-input.component'

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
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
              {...register('email', { required: true })}
            />
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </LoginInputContainer>
          <CustomButton
            startIcon={
              <FiLogIn
                size={20}
                onClick={() => handleSubmit(handleSubmitPress)()}
              />
            }>
            Login
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
