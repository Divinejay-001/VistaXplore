import React from 'react'

const Banner = () => {
    const bgImage={
        backgroundImage: 'url(https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        height: '400px',
        backgroundPosition: 'center',            
    }
  return (
    <div data-aos='zoom-in' className='h-[400px] w-full' style={bgImage}></div>
  )
}

export default Banner