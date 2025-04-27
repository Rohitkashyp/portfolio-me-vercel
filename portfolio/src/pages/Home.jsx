
import {useContext} from 'react'
import Typingeffect from '../components/Typingeffect'
import myimage from '../assets/images/mypic.png'
import { Themecontext } from '../context/Themecontext';
import { PiMoonStarsLight } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-scroll';



function Home() {
 
  const {theme,toggletheme} = useContext(Themecontext)
    // console.log(theme)


  return (
      <div className='mt-20'>
  
   
      <div onClick={toggletheme} className='cursor-pointer dark:border-[1px] bg-[#b91c1c] dark:bg-transparent text-white shadow-md dark:border-gray-600 dark:text-white text-5xl h-[50px] w-[50px] fixed top-22 right-2 min-[800px]:right-7 rounded-full flex justify-center items-center'>
         <button className='cursor-pointer'>{theme === 'light' ? <IoSunnyOutline size={30}/> : <PiMoonStarsLight size={25}/>}</button>    
       </div>
      <Link to="home" smooth={true} duration={500} offset={-160} className='cursor-pointer'>
      <div className='cursor-pointer h-[50px] w-[50px] fixed bottom-14 right-2 min-[800px]:right-7 rounded-full flex justify-center items-center bg-[#b91c1c] text-white'>
         <button className='cursor-pointer'><FaArrowUpLong size={25}/></button>    
       </div>
      </Link>
     

       <div className='mt-32 sm:mt-40'>
        <div className='bg-white text-black dark:bg-gray-950 dark:text-white max-w-[1200px] mx-auto p-2 min-[1200px]:p-0' id='home'>
         <div className='grid grid-cols-1 min-[740px]:grid-cols-2 items-center gap-10 min-[740px]:gap-1'>
             <div className='h-full order-2 min-[740px]:order-1'>
                <h1 className='text-[22px] font-medium mt-4'>Welcome In My Feed</h1>
                 <div className='flex-col flex min-[1121px]:flex-row min-[1121px]:gap-2 mt-0.5 h-[80px] min-[1130px]:h-0'>
                   <div className=' text-3xl sm:text-4xl font-medium'>Hello, I'm Rohi<span className='text-green-600'>t</span></div>
                   <div className='text-[#b91c1c] text-3xl font-bold sm:text-4xl'><Typingeffect/></div>
                 </div>
                  <div className='max-w-[600px] mt-2 min-[1130px]:mt-12'>
                  <p className="mt-4 text-[17px] min-[500px]:text-[16px] font-medium leading-6">
                      I am a Frontend Developer. I love building beautiful and user-friendly websites.<br />
                      I work with ReactJS, TailwindCSS, and JavaScript.<br />
                     Currently, I am creating my portfolio and working on some exciting projects.
                   </p>
                    <p className="mt-4 text-[17px] min-[500px]:text-[16px] font-medium leading-6">
                      Creating responsive and modern websites is my specialty.<br />
                      I enjoy learning something new every day.
                   </p>
                   <p className="mt-4 text-[17px] min-[500px]:text-[16px] font-medium leading-6">
                     Available for freelance work and collaborations. Let’s build something amazing together! 
                   </p>
                  </div>
                   <div className='mt-10 text-center'>
                     <a href="/My-Resume.pdf" target='_blank' className='bg-[#b91c1c] text-white font-normal px-3 py-3 rounded-sm shadow hover:bg-transparent hover:text-black dark:hover:text-white hover:border-[1px] transition'>Download Resume</a>
                   </div>
             </div>
             <div className='order-1 min-[740px]:order-2 flex justify-center items-center h-full'>
                <div className='border-[1px] border-gray-200 bg-white h-[300px] w-[300px] min-[400px]:w-[350px] min-[400px]:h-[350px] min-[850px]:w-[400px] min-[850px]:h-[400px] rounded-full shadow-md overflow-hidden'>
                   <img src={myimage} alt="my-image" className='h-full w-full object-contain' />
                </div>
            </div>
         </div>
        </div>
    </div>
   </div>
  )
}

export default Home