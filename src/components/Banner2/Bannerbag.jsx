import React from 'react'
import TravelImg from '../../assets/travelbox.png'
import { MdFlight, MdOutlineLocalHotel } from 'react-icons/md'
import { IoIosWifi } from 'react-icons/io'
import { IoFastFoodSharp } from 'react-icons/io5'

const Bannerbag = () => {
  return (
    <div className='min-h-[550px] bg-gray-100
    '> 
    <div className='min-h-[550px] flex justify-center
    items-center backdrop-blur-xl py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* image sec  */}

<div >
  <img 
  data-aos='flip-up'
  src={TravelImg} alt=""  className='max-w-[450px] h-[350px]
  w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover'/>
</div>

          {/* text sec  */}
          <div>
            <h1   data-aos='fade-up' className='text-3xl text-black font-bold sm:text-4xl'>Explore all corners of the world with us</h1>
            <p  data-aos='fade-up'  className='text-sm text-gray-500 tracking-wide
            leading-8'>Lorem ipsum dolor sit 
              amet consectetur adipisicing
               elit. Eveniet accusamus porro 
               accusantium debitis facilis inventore obcaecati dolores consequatur quia quas aspernatur
                dicta ea ipsam iste, iure modi quos! Aliquid, excepturi.
                {' '}</p>
                <div data-aos='zoom-in' className='grid grid-cols-2 gap-6'>
                  <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                  <MdFlight
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300
                  `'/>
                  <p>Flight</p>
                    </div>
                    <div className='flex items-center gap-4'>
                  <MdOutlineLocalHotel
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-200
                  `'/>
                  <p>Hotel</p>
                    </div>
                  </div>
                  <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                  <IoIosWifi
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200
                  `'/>
                  <p>Wifi</p>
                    </div>
                    <div className='flex items-center gap-4'>
                  <IoFastFoodSharp
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-200
                  `'/>
                  <p>Food</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bannerbag