
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function About() {

     useEffect(() => {
          AOS.init({
            duration: 600,
            once: true,
          });
        }, []);

  return (
   <>
   <hr className='mt-10 min-[740px]:mt-20 text-gray-300 dark:text-gray-600' />
    <div className='bg-white text-black dark:bg-gray-950 dark:text-white max-w-[1200px] mx-auto mt-10 min-[740px]:mt-16 p-2 min-[1200px]:p-0' id='about'>
      <h1 className='text-center text-4xl font-medium'>About Me</h1>
    <div className='grid grid-cols-1 min-[740px]:grid-cols-2 items-center gap-4 min-[740px]:gap-1 mt-2'>
        <div className='h-full'>
             <div className='max-w-[600px]' data-aos="fade-down">
               <div className=''>
                <h2 className='text-[26px] font-medium text-green-600'>About</h2>
                <p className='text-[17px] font-medium leading-6 mt-1'>Hello, I am Rohit. I am learning frontend development. I love to build websites. Right now, I am working on my portfolio and some projects.</p>
                <p className='text-[17px] font-medium leading-6'>I work with ReactJS, TailwindCSS, and JavaScript. I like to learn new things every day. I want to become a good web developer.</p> 
               </div>
               <div className='mt-4'>
                <h2 className='text-[26px] font-medium text-green-600'>Education & Training</h2>
                <ul className='text-[17px] font-medium leading-6'>
                <li>10th Class - BDRDSVM Inter College (Greater Noida Dankaur)</li>
                <li>12th Class - BDRDSVM Inter College (Greater Noida Dankaur)</li>
                <li>BCA - IIMT University (Meerut)</li>
                </ul>
               </div>
               <div className='mt-4'>
                <h2 className='text-[26px] font-medium text-green-600'>Skills & Expertise</h2>
                <ul className='text-[17px] font-medium leading-6'>
                <li>HTML, CSS, JavaScrip</li>
                <li>ReactJS and TailwindCSS</li>
                <li>Basic Git and GitHub</li>
                <li>Responsive Design</li>
                <li>Simple and Clean UI Design</li>
                </ul>
               </div>
               <div className='mt-4'>
                <h2 className='text-[26px] font-medium text-green-600'>Mission Statement</h2>
                 <p className='text-[17px] font-medium leading-6'>
                   My goal is to learn more and become a good frontend developer.  
                   I want to make clean, simple, and useful websites.  
                   I always try to improve myself and learn new things.
                 </p>
               </div>
             </div>
              
        </div>
        <div className='h-full'>
          <div className='max-w-[550px] mt-4 sm:mt-10'>
            <div className='flex flex-col gap-4' data-aos="fade-down">
              <div>
                <h3 className='text-[15px] sm:text-[17px] font-medium'>Html</h3>
                <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div className='h-2 w-[80%] bg-[#b91c1c] rounded-full'></div>
                </div>
              </div>
             <div>
                <h3 className='text-[15px] sm:text-[17px] font-medium'>CSS</h3>
                <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div className='h-2 w-[60%] bg-[#b91c1c] rounded-full'></div>
                </div>
             </div>
             <div>
                <h3 className='text-[15px] sm:text-[17px] font-medium'>JavaScript</h3>
                <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div className='h-2 w-[50%] bg-[#b91c1c] rounded-full'></div>
                </div>
             </div>
             <div>
                <h3 className='text-[15px] sm:text-[17px] font-medium'>ReactJS</h3>
                <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div className='h-2 w-[40%] bg-[#b91c1c] rounded-full'></div>
                </div>
             </div>
             <div>
                <h3 className='text-[15px] sm:text-[17px] font-medium'>TailwindCSS</h3>
                <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div className='h-2 w-[30%] bg-[#b91c1c] rounded-full'></div>
                </div>
             </div>
              </div>
          </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default About

