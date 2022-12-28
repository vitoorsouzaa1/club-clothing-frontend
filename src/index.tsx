import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'

import './index.css'

import { UserContextProvider } from './context/user.context'
import { CategoryContextProvider } from './context/category.context'
import { CartContextProvider } from './context/cart.context'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
