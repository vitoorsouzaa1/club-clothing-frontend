import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

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
            <CustomInput placeholder="Email@mail.com" />
          </LoginInputContainer>
          <LoginInputContainer>
            <CustomInput placeholder="Password" />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={20} />}>LogIn</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
