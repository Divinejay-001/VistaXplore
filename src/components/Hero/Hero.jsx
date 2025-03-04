import React from 'react'

const Hero = () => {
    const [priceValue, setPricevalue] = React.useState(40)
  return (
    <div className='bg-black/20 h-full'>
        <div className='h-full flex justify-center
        items-center p-4 bg-primary/10'>
    <div className='container grid grid-cols-1 gap-4'>
        {/* text content section  */}
        <div className=' text-white'>
            <p data-aos='zoom-in'>Our Packages</p>
            <p
            data-aos='fade-up'
            data-aos-delay='300'
            className='font-bold text-3xl '
            >Search Your Destination </p>
        </div>
        {/* form sec  */}
        <div data-aos='fade-up' className='space-y-4 bg-white rounded-md p-4 relative  '>
            <div className='grid grid-cols-1
           sm:grid-cols-3 py-3 sm:gap-1 md:gap-2'>
            <div>
                <label htmlFor="destination" 
                className='opacity-70'>
                    Search your Destination
                </label>
                <input type="text" name="destination" id="destintion" 
                placeholder='Nigeria'
                className='w-full bg-gray-100 my-2 shadow-lg  range  accent-primary 
                focus:outline-primary focus:outline outline-1 rounded-full p-2 ' />
                </div>                    
            <div>
            <label htmlFor="destination" 
                className='opacity-70'>
                    Date    
                </label>
                <input type="date" name="destination" id="destination" 
                placeholder='Nigeria'
                className='w-full bg-gray-100 my-2 shadow-lg !placeholder-slate-400   
                focus:outline-primary focus:outline outline-1 rounded-full p-2 ' />
                </div>                    
            <div>
            <label htmlFor="destination" 
                className='opacity-70 block'>
                    <div className='w-full flex justify-between
                    items-center'>
                     <p>Max Price</p>
                     <p className='font-bold text-xl'>${priceValue}</p>   
                   </div>    
                </label>
                <div className='bg-gray-100 shadow-lg rounded-full p-2 flex items-center justify-center'>
                    <input type="range" 
                    name="destination" 
                    id="destination"
                    placeholder='Nigeria'
                    className='w-full  cursor-pointer appearance-none  bg-gradient-to-r from-secondary to-secondary
                    h-2 rounded-full my-3 '
                    min='150'
                    max='1000'
                    value={priceValue}
                    step='10'
                    onChange={(e)=>setPricevalue(e.target.value)}/>
                </div>
                </div>                    
            </div>
            <button className='bg-gradient-to-r
    from-primary to-secondary hover:bg-gradient-to-r
    hover:from-secondary hover:bg-primary hover:scale-105 
    transition-all duration-700 text-white px-4 py-2 absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full'>
        Search Now
    </button>
        </div>
    </div>
    
        </div>
    </div>
  )
}

export default Hero