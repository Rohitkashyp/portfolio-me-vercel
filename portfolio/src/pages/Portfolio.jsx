
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const portfolio = [
  {
    id: 1,
    des: "Register,Login,Forgot Password & Simple Image Slider",
    live: "Live Demo",
    image: "/images/e-commerce1.png"
  },
  {
    id: 2,
    des: "Products List, Cart Feature, Checkout page & Profile/Orders",
    live: "Live Demo",
    image: "/images/e-commerce2.png"
  },
]

function Portfolio() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <div className='mt-10 min-[740px]:mt-20'>
       <div className='bg-white text-black dark:bg-gray-950 dark:text-white max-w-[1200px] mx-auto p-2 min-[1200px]:p-0' id='portfolio'>
          <div>
            <h1 className='text-3xl text-center font-medium mb-6'>Latest Works</h1>
          </div>
          <div className='grid grid-cols-1 min-[650px]:grid-cols-2 gap-4 mt-4'>
           
           {
            portfolio.map((item,index)=>(
           <div key={index} className='border-[1px] dark:border-gray-600 border-gray-200 min-h-[280px] w-full max-w-[590px] bg-white
              dark:bg-gray-950 rounded-md shadow-lg p-2' data-aos="zoom-in-up">
              <div className='flex flex-col gap-2 items-start'>
                 <div className='group relative border-[1px] dark:border-gray-600 border-gray-200 rounded-md min-h-[150px] w-full overflow-hidden'>
                      <img src={item.image} alt="ecommerce" className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-120' />
                 </div>
                  <div className='min-h-[60px]'>
                  <p className='mt-2 text-[16px] font-medium'>{item.des}</p>
                  </div>
                    <div className='mb-2 flex justify-between items-center dark:border-[1px] dark:border-gray-600 dark:rounded-sm dark:shadow-lg dark:p-1 w-full'>
                     <div>
                     <a href="#" className='text-[16px] text-red-800 dark:text-white dark:hover:text-red-800 hover:underline'>{item.live}</a>
                     </div>
                     <div>
                     <a href={item.image} download className='text-[16px] text-red-800 dark:text-white dark:hover:text-red-800 hover:underline'>Download image</a>
                     </div>
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

export default Portfolio
