import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext'
const Landing = React.lazy(() => import("./pages/Landing"))
const Navbar = React.lazy(() => import("./components/Landing/Navbar/Navbar"))
const About = React.lazy(()=> import("./pages/About"))
const FindMe = React.lazy(()=> import("./pages/Findme"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Ascii = React.lazy(() => import("./pages/Ascii"))

const Home = () => (
  <LanguageProvider>
    <div className='bg-black w-screen h-screen'>
      <Suspense fallback={<div className='bg-black w-screen h-screen'></div>}>
      </Suspense>
      <Navbar />
      <Landing />
      <About />
      <FindMe />
      <Contact />
      <Ascii />
    </div>  
  </LanguageProvider>
  
)


const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (  
        <Suspense fallback={<div className='bg-black w-screen h-screen'></div>}>
          
          {/* <Navbar /> */}
          <Home />
          
        </Suspense>
      )
    }
  ])

  return (
    <>
      <Suspense fallback={<div className='bg-black w-screen h-screen'></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
    
  )
}

export default App