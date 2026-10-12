import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Sections/Home/Home'
import About from './Sections/About/About'
import Blogs from './Sections/Blogs/Blogs'
import Packages from './Sections/Packages/Packages'
import MainLayout from './MainLayout'
import Event from './Sections/Event/Event'
import ScrollToTop from './Components/Scrolltop/Scrolltop'
import DoorIntro from './Components/Intro/Intro'


function App() {

  return (
    <>
      <DoorIntro />
      < ScrollToTop />
      <Routes >
        <Route element={< MainLayout />}>

          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/event' element={<Event />} />
          <Route path='/about' element={<About />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
