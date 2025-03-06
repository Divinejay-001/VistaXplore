import React from 'react'
import FooterLogo from '../../assets/Logo.webp'
import { FaGithub, FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
 
const FooterLinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Best Places',
    link: '/places'
  },
  {
    title: 'Blogs',
    link: '/blog'
  },
]

const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video 
      autoPlay
      loop
      muted
      className='absolute right-0 top-0 h-full
      overflow-hidden w-full object-cover z-[-1]'
      >
        <source src='https://videos.pexels.com/video-files/5057526/5057526-uhd_2560_1440_25fps.mp4' type='video/mp4' />
      </video>
      <div className='container'>
        <div className='grid  md:grid-cols-3 py-5 bg-white/50 backdrop-blur-sm rounded-t-xl'>
          <div className='py-8 px-4'> 
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold
            text-justify sm:text-left' >
            <img src={FooterLogo} className='max-h-[60px]' alt="" />
            {/* Travel Logo  */}
            </h1>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit fugit itaque deserunt laboriosam iure esse vero voluptates sapiente nostrum earum, voluptatum eos doloribus, nobis sequi corrupti consequuntur atque odit ut. 
            </p>
            <br />
            <div className='flex items-center
            gap-3 mt-3'>
              <FaLocationArrow/>
              <p>Uyo, Nigeria</p>
            </div>
            <div className='flex items-center
            gap-3 mt-3'>
              <FaMobileAlt/>
              <p>+234 9127064183</p>
            </div>
            {/* socials */}
            <div>
              <div className='flex items-center gap-3 mt-6'>
              <a className="p-2 border rounded-md  shadow-2xl bg-white/50 hover:border-blue-400 hover:shadow-[0_0_20px_blue]
              transition-all duration-[1500ms] ease-in-out transform" 
   href="https://instagram.com/divinegiftchidalu">
    <FaInstagram className='text-2xl    hover:scale-125 transition-transform duration-700'/>
</a>
               
                <a
                className="p-2 border rounded-md  shadow-2xl bg-white/50 hover:border-blue-400 hover:shadow-[0_0_20px_blue]
                transition-all duration-[1500ms] ease-in-out transform" 
                href="https://twitter.com/Divinegift9503">
                   <FaTwitter className='text-2xl    hover:scale-125 transition-transform duration-700'/> 
                </a>
                <a
                className="p-2 border rounded-md  shadow-2xl bg-white/50 hover:border-blue-400 hover:shadow-[0_0_20px_blue]
                transition-all duration-[1500ms] ease-in-out transform" 
                href="https://github.com/Divinejay-001">
                   <FaGithub className='text-2xl    hover:scale-125 transition-transform duration-700'/> 
                </a>

              </div>
            </div>
          </div>
          {/* links  */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
{/* first link  */}
<div>
  <div className='py-8 px-4 '>
    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
    <ul className='flex flex-col gap-3'>
      {
        FooterLinks.map(({link, title}) => (
         <li className='cursor-pointer hover:translate-x-1 duration-300
         hover:text-primary space-x-1 text-gray-700'>
          <Link to={link}
          onClick={() =>{
            window.scrollTo(0,0);
          }}>
            <span>&#11162;</span>
          <span>{title}</span>
          </Link>

         </li>
        ))
      }
    </ul>
  </div>
</div>
{/* second link  */}
<div>
  <div className='py-8 px-4 '>
    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
    <ul className='flex flex-col gap-3'>
      {
        FooterLinks.map(({link, title}) => (
         <li className='cursor-pointer hover:translate-x-1 duration-300
         hover:text-primary space-x-1 text-gray-700'>
          <Link to={link}
          onClick={() =>{
            window.scrollTo(0,0);
          }}>
            <span>&#11162;</span>
          <span>{title}</span>
          </Link>

         </li>
        ))
      }
    </ul>
  </div>
</div>
{/* third link  */}
<div>
  <div className='py-8 px-4 '>
    <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
    <ul className='flex flex-col gap-4'>
      {
        FooterLinks.map(({link, title}) => (
         <li className='cursor-pointer hover:translate-x-1 duration-300
         hover:text-primary space-x-1  text-gray-700'>
          <Link to={link}
          onClick={() =>{
            window.scrollTo(0,0);
          }}>
            <span>&#11162;</span>
          <span>{title}</span>
          </Link>

         </li>
        ))
      }
    </ul>
  </div>
</div>
          </div>
        </div>
        {/* footer copywright */}
        <div>
          <div className='text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white'>
       &copy; {new Date().getFullYear()}. All rights reserved. || VistaXplore Built by Divinegift with love ❤️💜   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer