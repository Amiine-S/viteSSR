import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const serializedStoreData = document.querySelector("#__STORE_DATA__")?.innerHTML;
console.log(serializedStoreData)

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter  >
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
