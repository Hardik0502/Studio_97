import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      < Navbar />

      <main>
        <Outlet />  
        {/* <Outlet /> is where your page content will appear. */}
      </main>

    < Footer />
    </>
  )
}

export default MainLayout
