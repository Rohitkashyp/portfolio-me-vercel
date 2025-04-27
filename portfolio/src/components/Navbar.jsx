
import React, { useState } from 'react'
import myimage from '../assets/images/mypic.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

function Navbar() {

  const [openmenu,setOpenmenu] = useState(false)

  

  return (
   <>
    <nav className='w-full bg-white shadow-md fixed z-50 top-0 p-2 border-white dark:border-gray-600 border-[0.5px] dark:bg-gray-950 dark:text-white'>
    <div className='max-w-[1200px] mx-auto'>
       <div className='flex justify-between items-center'>
        {/* left div */}
          <div className='flex gap-1'>
             <div className='w-14 h-14 border-[0.5px] border-gray-200 rounded-full flex justify-center items-center p-1 bg-white mt-1'>
               <img src={myimage} alt="myimage" className='w-full h-full object-contain' />
             </div>
             <div>
                <h1 className='text-2xl font-bold'>Rohi<span className='text-3xl text-green-600'>t</span></h1>
                <p className='text-[16px] font-medium'>Web Developer</p>
             </div>
          </div>
           {/* right div */}
          <div className='hidden min-[700px]:block'>
            <ul className='flex gap-3 md:gap-6 text-[18px] font-medium'>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="home" smooth={true} duration={500} offset={-160}>Home</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="about" smooth={true} duration={500} offset={-100}>About</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="portfolio" smooth={true} duration={500} offset={-100}>Portfolio</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="services" smooth={true} duration={500} offset={-160}>Services</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="experince" smooth={true} duration={500} offset={-100}>Experiance</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="contact" smooth={true} duration={500} offset={-100}>Contact Me</Link>
               </li>
               
            </ul>
          </div>
          {/* HamburgerMenu */}
          <div className='block min-[700px]:hidden mr-2 cursor-pointer'>
            <button className='cursor-pointer' onClick={()=>{ setOpenmenu(true) }}><RxHamburgerMenu size={30} className='font-bold text-gray-800 dark:text-white'/></button>
          </div>
       </div>

      
    </div>
     {/* mobile screen list item */}
    {
      openmenu && (
        <div className='bg-black fixed inset-0 z-50'>
        <div className='bg-white w-full h-full relative dark:bg-gray-900 dark:text-white'>
          <div className='text-4xl absolute right-2 font-bold cursor-pointer'
          onClick={()=>{
            setOpenmenu(false) 
          }}>
           <RxCross2 className='dark:text-white' />
          </div>
        <div className='flex justify-center items-center h-full'>
            <ul className='flex flex-col gap-2 text-[22px] font-medium'>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="home" smooth={true} duration={500} offset={-160} onClick={()=>{setOpenmenu(false)}}>Home</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="about" smooth={true} duration={500} offset={-100} onClick={()=>{setOpenmenu(false)}}>About</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="portfolio" smooth={true} duration={500} offset={-100} onClick={()=>{setOpenmenu(false)}}>Portfolio</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="services" smooth={true} duration={500} offset={-120} onClick={()=>{setOpenmenu(false)}}>Services</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline' >
                 <Link to="experince" smooth={true} duration={500} offset={-100} onClick={()=>{setOpenmenu(false)}}>Experiance</Link>
               </li>
               <li className='hover:scale-110 duration-500 cursor-pointer hover:underline'>
                 <Link to="contact" smooth={true} duration={500} offset={-100} onClick={()=>{setOpenmenu(false)}}>Contact Me</Link>
               </li>
            </ul>
          </div>
        </div>
     </div>
      )
    }
   </nav>

   </>
  )
}

export default Navbar