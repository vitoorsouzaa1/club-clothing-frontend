import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

import { store, persistedStore } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
