import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>

    <hr className='mt-10 min-[740px]:mt-20 text-gray-300 dark:text-gray-600 mb-6' />
    <div className='max-w-[1200px] bg-white text-black dark:bg-gray-950 dark:text-white mx-auto p-2 min-[1200px]:p-0' id='services'>
      
      <div className='max-w-[400px] h-[200px] mx-auto flex justify-center items-center'>
            <div className='flex flex-col gap-6 w-[250px] mx-auto'>
             <div className='flex gap-4 justify-center items-center'>
               <a href="#" aria-label='Facebook'><FaFacebook size={25} className='scale-95 hover:scale-100'/></a>
               <a href="#" aria-label='Github'> <FaGithub size={25} className='scale-95 hover:scale-100'/></a>
               <a href="#" aria-label='Instagram'><FaInstagram size={25} className='scale-95 hover:scale-100'/></a>
               <a href="#" aria-label='Linkedin'> <FaLinkedinIn size={25} className='scale-95 hover:scale-100'/></a>
             </div>
               <hr className='dark:text-gray-600'/>
             <div>
              <p className='text-[16px] font-medium text-center leading-5'> ©2025❤️ Rohit Kashyap All rights reserved.</p>
             </div>
            </div>
      </div>
      
    </div>

    </> 

  )
}

export default Footer
