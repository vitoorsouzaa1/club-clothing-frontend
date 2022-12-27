import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

// Utilities
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

export const Header = () => {
  const navigate = useNavigate()
  const { toggleCart } = useContext(CartContext)

  const { isAuthenticated } = useContext(UserContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explore</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Create Account</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sign Out</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}> 5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
