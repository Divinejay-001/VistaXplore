import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayOut from './pages/LayOut'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogsDetails from './pages/BlogsDetails'
import PlaceRoute from './pages/PlaceRoute'
import Nopage from './pages/Nopage'
import Home from './pages/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PlaceDetails from './pages/PlaceDetails'

function App() {
  React.useEffect(()=>{
    AOS.init({ 
      duration: 700,
      offset:100,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
},[]);

  return (
    <div className='select-none'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LayOut/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blog/:id' element={<BlogsDetails/>}/>
    <Route path='/places' element={<PlaceRoute/>}/>
    <Route path='/places/:id' element={<PlaceDetails/>}/>
    <Route path='*' element={<Nopage/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter>       
    </div>
  )
}

export default App
