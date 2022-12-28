import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import { Header } from '../components/header/header.component'
import { LoadingComponent } from '../components/loading/loading.components'

// Utilities
import { UserContext } from '../context/user.context'

interface IProps {
  children: React.ReactNode
}

export const AutheticationGuard: FunctionComponent<IProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <LoadingComponent message="You need to be logged in to access this page. You being redirectioned to login page..." />
      </>
    )
  }

  return <>{children}</>
}
