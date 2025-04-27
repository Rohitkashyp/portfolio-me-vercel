
import React, { useState,useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL= import.meta.env.VITE_EMAIL;





function Contact() {

 const [userinfo,setUserinfo]= useState({name:'',email:'',message:''})
 const [errors,setErrors]= useState({})


//  input validater

const inputvalidater = (name,value)=>{
   if(name === "name"){
     if(!value.trim()){
      return "Name is required"
     }
     if(!/^[A-Za-z\s]+$/.test(value)){
      return "Only allowed charcters"
     }
     if(value.length < 3 || value.length > 20){
      return "Name must be betweem 3 and 20 charcters"
     }
   }
   if(name === "email"){
      if(!value.trim()){
         return "Email is required"
      }
      if(!/^\S+@\S+\.\S+$/.test(value)){
         return "Email is not valid"
      }
   }
   if(name === "message"){
      if(!value.trim()){
         return "Message is required"
      }
      if(!/^[A-Za-z0-9\s.,!?'"-]+$/.test(value)){
        return "Only allowed Special charcters and symbol"
      }
      if(value.length < 10){
         return "Message must be at least 10 charcters"
      }
      if(value.length > 200){
         return "Message must be under 200 charcters"
      }
   }
   return '';
}



   const handleinput = (e)=>{

   const {name,value} = e.target;

   setUserinfo((prev)=>({...prev,[name]:value}))

   const error = inputvalidater(name,value)
   setErrors((prev)=>({...prev,[name]:error}))

   }

   // sumbitvalidater 

   const submitvalidater = () => {
     const nameerror = inputvalidater("name",userinfo.name)
     const emailerror = inputvalidater("email",userinfo.email)
     const messageerror = inputvalidater("message",userinfo.message)

     const newErrors = {
      name: nameerror,
      email: emailerror,
      message: messageerror
     }

     setErrors(newErrors)
     
     return !nameerror && !emailerror && !messageerror
   }

   //  form submit 
   const handlesubmit = async(e)=>{
     e.preventDefault()
  
     if(submitvalidater()){
      try {
        
         const res = await axios.post(`${API_URL}/user_info`,userinfo)
         if(res.status === 200){
         console.log(res.data)
         // alert("form submit sucessfully")
         toast.success("Message sent sucessfully",{
            position: "top-right",
            autoClose: 3000
           })
        
         setUserinfo({name:'',email:'',message:''})
         setErrors({}) 
         }else{
         //  alert("somethig went wrong please try again!")
         toast.error("somethig went wrong please try again!",{
            position: "top-right",
            autoClose: 3000
           })
         }

         
      } catch (error) {
         console.error("err",error)
         toast.error("failed to message")
      }
      
     }
   }
  return (
    <div className='mt-10 min-[740px]:mt-20'>
    <div className='bg-white text-black dark:bg-gray-950 max-w-[1200px] mx-auto p-2 min-[1200px]:p-0' id='contact'>
    <div>
         <h1 className='text-3xl font-semibold dark:text-white'>Contact me</h1>
         <p className=' mt-1 sm:mt-4 text-[18px] font-medium dark:text-white'>Please fill out the form below to contact me.</p>
     </div>
     <div className={`border-[1px] border-black max-w-[400px] ${Object.keys(errors).length > 0 ?'h-[430px]':'h-[400px]'} mx-auto mt-4 py-4 px-6 rounded-md bg-[#e2e8f0]`}>
        <h1 className='text-2xl font-semibold'>Send Your Message</h1>
        <div className='max-w-[350px] h-[300px] mt-3 flex flex-col gap-3'>
           {/* form */}
           <form onSubmit={handlesubmit} method='POST'>
           <div className='flex flex-col gap-1'>
              <label className='text-[16px] font-medium'>Full Name</label>
              <input type="text" name="name" value={userinfo.name} onChange={handleinput} placeholder='Enter your fullname' className='h-10 w-[95%] mx-auto outline-none bg-white text-black rounded-sm
              shadow-lg text-[16px] font-medium px-3'/>
              {errors &&  <p className='text-[15px] text-red-500 font-medium'>{errors.name}</p>}
           </div>
           <div className='flex flex-col gap-1'>
              <label className='text-[16px] font-medium'>Email Address</label>
              <input type="text" name="email" value={userinfo.email} onChange={handleinput} placeholder='Enter your Email' className='h-10 w-[95%] mx-auto outline-none bg-white text-black rounded-sm
              shadow-lg text-[16px] font-medium px-3'/>
               {errors &&  <p className='text-[15px] text-red-500 font-medium'>{errors.email}</p>}
           </div>
           {/* <p>email is required</p> */}
           <div className='flex flex-col gap-1'>
              <label className='text-[16px] font-medium'>Message</label>
               <textarea name="message" id="" value={userinfo.message} onChange={handleinput} placeholder='Enter Your Query' className='h-14 w-[95%] mx-auto outline-none bg-white text-black rounded-sm
              shadow-lg text-[16px] font-medium px-3 py-2'></textarea>
               {errors &&  <p className='text-[15px] text-red-500 font-medium'>{errors.message}</p>}
           </div>
           <div className='ml-2 mt-4'>
              <button className='bg-black text-white py-2 px-4 rounded-md font-medium cursor-pointer hover:opacity-80 transition' type='submit'>Send</button>
           </div>
           </form>
        </div>
     </div>
      
    </div>
 </div>
  )
}

export default Contact
