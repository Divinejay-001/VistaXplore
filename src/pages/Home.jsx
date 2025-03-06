import React from 'react'
import NatureVideo from '../assets/video/main.mp4'
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import Banner from '../components/Banner/Banner'
import Blog from '../pages/Blog'
import Bannerbag from '../components/Banner2/Bannerbag'
import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
      <div>
      <div className='relative h-[700px]'>
        <video 
        autoPlay
        loop
        muted
         className='absolute right-0 top-0 
        h-[700px] w-full object-cover z-[-1]'>
          <source src='https://videos.pexels.com/video-files/11557602/11557602-hd_1920_1080_30fps.mp4'
          type='video/mp4'/> 
        </video>
                <Hero/>
      </div>
      <Places/>
      <Banner img='https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      <Blog/>
      <Bannerbag/>
      <Banner img='https://i.pinimg.com/736x/e9/9d/5e/e99d5e2b2fc0a5a0aebcdf557792c0bb.jpg'/>
      <Testimonial/>
      
      </div>
    </>
  )
}

export default Home