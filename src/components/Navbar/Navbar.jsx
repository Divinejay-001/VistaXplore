import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../../assets/Travel.png'
import { FaCaretDown } from 'react-icons/fa'
import {  HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import { MdClose } from 'react-icons/md'


const dropdownLinks =[
{
  name: 'Our Services',
  link: '/#services',
},
{
  name: 'Top Brands',
  link: '/#mobile-brands',
},
{
  name: 'Location',
  link: '/#location',
},

]
const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);

  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  }
  return (
    <div className='fixed top-0 right-0 w-full z-20
    bg-white text-black shadow-md'>
      <div className='bg-gradient-to-r
      from-primary to-secondary text-white'>
      <div className='container py-[2px] sm:block hidden'>
      <div className="flex justify-between py-[2px]">
        <p>20% off on next booking</p>
        <p>Mobile No. +234 9127064183</p>
    
      </div>
      </div>
      </div>
      <div className='container py-3 sm:py-0'>
      <div className='flex justify-between items-center'>
       {/* Logo Section  */}
        <div>
         <Link to='/' onClick={()=> window.scrollTo(0, 0)}>
         <img src={logoImg} alt=""
         className='h-16 w-20  sm:h-20 sm:w-24 ' />
         </Link>
        </div>
        {/*Desktop NavLinks  */}
          <div className='hidden md:block'>
      <ul className='flex items-center gap-6 '>
        <li className='py-4'>
          <NavLink to='/' 
          activeClassName='active'
          onClick={() => window.scrollTo(0, 0)}>
            Home
          </NavLink>
        </li>
        <li className='py-4'>
          <NavLink     
           activeClassName='active'
to='/blog' onClick={() => window.scrollTo(0, 0)}>
            Blogs
          </NavLink>
        </li>
        <li className='py-4'>
          <NavLink 
              activeClassName='active'
 to='/places' onClick={() => window.scrollTo(0, 0)}>
            Best Places
          </NavLink>
        </li>
        <li className='py-4'>
          <NavLink to='/about'
          activeClassName='active'
          onClick={() => window.scrollTo(0, 0)}>
          About         
       </NavLink>
        </li>
        {/* Dropdown sec  */}
        <li className='py-4 relative group cursor-pointer'>
          <div className='dropdown flex items-center'>
            <span>Quick Links</span>
            <span>
              <FaCaretDown className='transition-all
              duration-200 group-hover:rotate-100 '/>
            </span>
          </div>
          <div className='absolute -left-9 top-[57px] z-[9999] hidden group-hover:block
          shadow-md text-black w-[150px] bg-white 
        p-2'>
            <ul>
              {
                dropdownLinks.map((data)=>{
                  return(
                    <li key={data.name}>
                      <a
                      className='inline-block w-full
                      rounded-md p-2 hover:bg-primary/20'
                      href={data.link}>{data.name}</a>
                    </li>
                  )
                    
                })
              }
            </ul>
          </div>
        </li>
      </ul>
          </div>
          <div className='flex items-center gap-4'>
            {/* Book btn  */}
                <button
                className='bg-gradient-to-r
    from-primary to-secondary hover:bg-gradient-to-r
    hover:from-secondary hover:bg-primary
    transition-all duration-700 text-white px-3 py-1 rounded-full'>
               Book Now</button>

                {/* Mobile sec  */}
                <div className='md:hidden block '>
              {showMenu? (
                <MdClose 
                onClick={toggleMenu}
                className='
                cursor-pointer transition-all
                'size={30}/>

              ):(
                <HiMenuAlt3 
                onClick={toggleMenu}
                className='
                cursor-pointer transition-all
                'size={30}/>
              )}    
                </div>
          </div>
      </div>
      </div>
       <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
      
  )
}

export default Navbar