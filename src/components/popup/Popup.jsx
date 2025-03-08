import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
const Popup = ({orderPopup, setOrderPopup}) => {
  return (
    <> 
    {orderPopup &&( <div className='popup'>
        <div data-aos="zoom-in"  className='h-screen w-screen fixed top-0 left-0
        bg-black/70 z-50 backdrop-blur-sm'>
          <div   className='fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 p-4
          shadow-md bg-white  rounded-md
          duration-200 w-[300px]'>
            {/* header  */}
            <div className='flex items-center justify-between'>
<div>
    <h1>Book Now</h1>
</div>
<div>
    <IoCloseOutline className='text-2xl cursor-pointer'
                onClick={()=> setOrderPopup(false)}/>
</div>
            </div>
            
            {/* form  */}
            <div className='mt-4'>
<input type="text" placeholder='Name' className='
w-full rounded-full border border-gray-400
 px-2 py-1 mb-4' />
<input type="email" placeholder='Email' className='
w-full rounded-full border border-gray-400
 px-2 py-1 mb-4' />
<input type="text" placeholder='Address' className='
w-full rounded-full border border-gray-400 
 px-2 py-1 mb-4' />

            </div >
            <div className='flex justify-center'>
            <button className='bg-gradient-to-r
    from-primary to-secondary hover:bg-gradient-to-r
    hover:from-secondary hover:bg-primary hover:scale-105 
    transition-all duration-700 text-white px-4 py-2  rounded-full'>
     Place Order    </button>
            </div>
            </div>   
        </div>
    </div>
        )}
    </>
  )
    };

export default Popup