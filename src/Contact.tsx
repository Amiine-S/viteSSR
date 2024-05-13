import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'


// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

export default function Contact() {
  return (
    <>
   


      <div className="read-the-docs">
       COUCOU
      </div>
    </>
  )
}

