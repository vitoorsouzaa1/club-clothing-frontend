import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { SignUpPage } from './pages/signup/signup.page'

// Utilities
import { auth } from './config/firebase.config'

export const App: FunctionComponent = (): JSX.Element => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
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
