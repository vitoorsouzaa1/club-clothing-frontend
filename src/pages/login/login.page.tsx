import { Header } from '../../components/header/header.component'
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
          {/* Button */}

          <LoginSubtitle>ou entre com seu email</LoginSubtitle>

          <LoginInputContainer>{/* Entre com seu email */}</LoginInputContainer>
          <LoginInputContainer>
            {/* Entre com seu password */}
          </LoginInputContainer>
          {/* Button */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}
