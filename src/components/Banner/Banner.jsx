import React from 'react'

const Banner = ({img}) => {
    const bgImage={
        backgroundImage:`url(${img})`,
        backgroundSize: 'cover',
        height: '400px',
        backgroundPosition: 'center',            
    }
  return (
    <div data-aos='zoom-in' className='h-[400px] w-full' style={bgImage}></div>
  )
}

export default Banner