
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Experiance = [
  {
    id: 1,
    name: "Html",
    image: "/images/html.png"
  },
  {
    id: 2,
    name: "CSS",
    image: "/images/css.png"
  },
  {
    id: 3,
    name: "BootStrap",
    image: "/images/bootstrap.png"
  },
  {
    id: 4,
    name: "Talwind",
    image: "/images/talwind.png"
  },
  {
    id: 5,
    name: "Javascript",
    image: "/images/javascript.webp"
  },
  {
    id: 6,
    name: "React",
    image: "/images/react.webp"
  },
  {
    id: 7,
    name: "GitHub",
    image: "/images/github.png"
  },
]

function Experience() {

   useEffect(() => {
        AOS.init({
          duration: 600,
          once: true,
        });
      }, []);


  return (
    <div className='mt-10 min-[740px]:mt-30'>
    <div className='bg-white text-black dark:bg-gray-950 dark:text-white max-w-[1200px] mx-auto p-2 min-[1200px]:p-0' id='experince'>
       <div>
         <h1 className='text-3xl font-semibold'>Experience</h1>
         <p className='mt-2 text-[18px] font-medium'>I've more than 1 years of experiance in below technologies.</p>
       </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center mt-4 gap-2'>
          {
            Experiance.map((card,index)=>(
              <div key={index} data-aos="fade-right" className='border-[1px] dark:border-gray-600 border-gray-300 bg-white shadow-lg rounded-full w-[230px] h-[230px] min-[400px]:w-[320px] min-[400px]:h-[320px] sm:w-[230px] sm:h-[230px] scale-95 hover:scale-100'>
              <div className='w-[180px] h-[180px] min-[400px]:w-[260px] min-[400px]:h-[260px] sm:w-[180px] sm:h-[180px] mx-auto rounded-full mt-4 flex justify-center items-center'>
                 <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <img src={card.image} alt="" className='h-full w-full overflow-hidden'/>
                    <h5 className='text-[20px] font-medium'>{card.name}</h5>
                 </div>
              </div>
            </div>
            ))
          }
       </div>
    </div>
 </div>
  )
}

export default Experience
