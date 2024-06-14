import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/style.css'
import { Provider } from 'react-redux'
import store_rtk from './redux_ntk/store_rtk.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store_rtk}>
    <App />
    </Provider>
  </React.StrictMode>,
)
