import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Pages
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { SignUpPage } from './pages/signup/signup.page'
import { ExplorePage } from './pages/explore/explore.page'
import { CategoryDetailsPage } from './pages/category-details/category-details.page'
import { CheckoutPage } from './pages/checkout/checkout.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import { AutheticationGuard } from './guards/authentication.guard'

// Components
import { LoadingComponent } from './components/loading/loading.components'
import { CartComponent } from './components/cart/cart.component'

export const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        dispatch({ type: 'LOGOUT_USER' })

        return setIsInitializing(false)
      }

      const isSigninIn = !isAuthenticated && user
      if (isSigninIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )
        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch({ type: 'LOGIN_USER', payload: userFromFirestore })

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <LoadingComponent />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AutheticationGuard>
              <CheckoutPage />
            </AutheticationGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      <CartComponent />
    </BrowserRouter>
  )
}
