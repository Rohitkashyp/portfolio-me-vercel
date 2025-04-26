
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Cards = [
  {
   id: 1,
   name: "Web Development",
   description:"Modern UI-based websites using React, TailwindCSS & responsive design. Pixel-perfect frontend with dynamic interactivity.",
   image: "/images/development.png"
  },
  {
    id: 2,
    name: "Frontend Integration",
    description:"Clean integration with APIs, routing with React Router, data handling using React Context api & JSON Server for mock backend.",
    image: "/images/frontend-development.png"
   },
   {
    id: 3,
    name: "UI/UX Focused Design",
    description:"Designs with smooth animations,dark/light mode, and mobile-friendly layouts for better user experience",
    image: "/images/ui-ux-design.png"
   },
]

function Services() {

  // console.log(Cards)

    useEffect(() => {
      AOS.init({
        duration: 600,
        once: true,
      });
    }, []);

  return (
    <div className='mt-10 min-[740px]:mt-25'>
    <div className='bg-white text-black dark:bg-gray-950 dark:text-white max-w-[1200px] mx-auto p-2 min-[1200px]:p-0' id='services'>
       <div>
         <h1 className='text-3xl text-center font-medium mb-6'>What I Do</h1>
       </div>
       <div className='grid grid-cols-1 min-[490px]:grid-cols-2 min-[700px]:grid-cols-3 gap-2 mt-6'>
       {
        Cards.map((card,index)=>(
          <div data-aos="fade-left" key={index} className='border-[1px] dark:border-gray-600 border-gray-200 bg-white dark:bg-gray-950 rounded-md shadow-lg h-[250px] w-full min-[490px]:max-w-[380px] flex justify-center items-center hover:scale-105 transition'>
          <div className='flex flex-col justify-center items-center mt-2 max-w-[300px] h-[200px]'>
            <img src={card.image} alt="development" className='h-16' />
            <h2 className='text-[20px] font-semibold mb-2'>{card.name}</h2>
            <p className=' text-[18px] min-[490px]:text-[14px] min-[770px]:text-[16px]
             text-gray-600 dark:text-white font-normal min-[1000px]:leading-5 text-center mt-1'>{card.description}</p>
          </div>
     </div>
        ))
       }
        
       </div>
    </div>
 </div>
  )

}

export default Services