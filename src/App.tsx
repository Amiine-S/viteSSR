import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>

    <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
