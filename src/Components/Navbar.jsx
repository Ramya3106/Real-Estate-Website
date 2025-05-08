import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg';
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'

    }else{
      document.body.style.overflow = 'auto'
    }
    return () =>{
      document.body.style.overflow = 'auto'
    };

  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center
        py-4 px-6 md:px-20 lg:px-32
        bg-transparent'>
           <div className='pr-20'>
          <a href="#" className='font-bold text-3xl sm:text-3xl
          flex gap-2 items-center justify-center'>
            <img src={logo} alt='' className='w-20 aspect-square object-cover rounded-full  border-2 border-white shadow-md' />
            Estate
          </a>
         
        </div>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
            <RiMenu3Fill onClick={()=>setshowMobileMenu(true)}className='text-3xl cursor-pointer' />
        </div>
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0
        overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer text-3xl'>
          <MdOutlineCancel onClick={()=>setshowMobileMenu(false)}/>

          </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
        font-medium' >
                <a onClick={()=>setshowMobileMenu(false)} href='#Header' className='px-4 py2 rounded-full'>Home</a>
                <a onClick={()=>setshowMobileMenu(false)}href='#About' className='px-4 py2 rounded-full'>About</a>
                <a onClick={()=>setshowMobileMenu(false)}href='#Projects' className='px-4 py2 rounded-full'>Projects</a>
                <a onClick={()=>setshowMobileMenu(false)}href='#Testimonials' className='px-4 py2 rounded-full'>Testimonials</a>
            </ul>
        </div>


    </div>
  )
}

export default Navbar