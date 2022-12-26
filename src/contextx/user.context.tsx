import { createContext, FunctionComponent, useState } from 'react'

// Utilities
import { IUser } from '../types/user.types'

interface IUserContext {
  currentUser: IUser | null
  isAuthenticated: boolean
  loginUser: (user: IUser) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

interface IProps {
  children: React.ReactNode
}

export const UserContextProvider: FunctionComponent<IProps> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: IUser) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}
