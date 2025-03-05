import React from 'react'
import NatureVideo from '../assets/video/main.mp4'
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import Banner from '../components/Banner/Banner'
import Blog from '../pages/Blog'
import Bannerbag from '../components/Banner2/Bannerbag'
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
      <Banner/>
      <Blog/>
      <Bannerbag/>
      </div>
    </>
  )
}

export default Home