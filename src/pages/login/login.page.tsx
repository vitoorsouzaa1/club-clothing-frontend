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

export const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={20} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com seu email</LoginSubtitle>

          <LoginInputContainer>{/* Entre com seu email */}</LoginInputContainer>
          <LoginInputContainer>
            {/* Entre com seu password */}
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={20} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
