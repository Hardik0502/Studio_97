import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Sections/Home/Home'
import About from './Sections/About/About'
import Blogs from './Sections/Blogs/Blogs'
import Packages from './Sections/Packages/Packages'
import Help from './Sections/Help/Help'
import Navbar from './Components/Navbar/Navbar'
import MainLayout from './MainLayout'


function App() {

  return (
    <>
      <Routes >
        <Route element={< MainLayout />}>

          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/help' element={<Help />} />
          <Route path='/about' element={<About />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
