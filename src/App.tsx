import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'

export const App: FunctionComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
