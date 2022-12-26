import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { SignUpPage } from './pages/signup/signup.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigninIn = !isAuthenticated && user
    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()

      return loginUser(userFromFirestore as any)
    }

    return setIsInitializing(false)
  })

  if (isInitializing) return null

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}
