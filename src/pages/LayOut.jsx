import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Popup from '../components/popup/Popup'

const LayOut = () => {
  const [orderPopup, setOrderPopup]=React.useState(false);

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  }
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      <Footer/>
    </div>
  )
}

export default LayOut