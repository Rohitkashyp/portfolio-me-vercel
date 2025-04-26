
import React, { useEffect, useState } from 'react'

function Typingeffect() {

const word = ["Coder|","Developer|","Programmer|"]


const [displaytext,setDisplayText] = useState('')
const [wordcount,setWordcount] =useState(0)
const [index,setIndex] = useState(0)
const [isdeleting,setIsdeleting] = useState(false)



useEffect(()=>{

  const currentword = word[wordcount]
 const interval = setInterval(() => {

  if(!isdeleting){
    if(index < currentword.length){
      setDisplayText((prev)=> prev + currentword[index])
      setIndex((previndex)=> previndex + 1)
    }else{
     setTimeout(()=> setIsdeleting(true),300)
     clearInterval(interval)
    }
  }else{
    if(index > 0){
      setDisplayText((prev)=> prev.slice(0,-1))
      setIndex((prev)=> prev - 1)
    }else{
      setIsdeleting(false)
      setWordcount((prev)=> (prev + 1) % word.length)
    }
  }
 }, 150);




 return ()=> clearInterval(interval)


},[wordcount,index,isdeleting])




  return (
    <>
      {displaytext}
    </>
  )
}

export default Typingeffect


// .............................................................


// import React, { useEffect, useState } from 'react'

// function Typingeffect() {

//   const word = ["Coder|","Developer|","Programmer|"]
//   const [displaytext,setDisplayText] =useState('')
//   const [isdeleting,setIsdeleting] =useState(false)
//   const [index,setIndex]= useState(0)
//   const [wordcount,setWordcount]= useState(0)

//   // const cuurentword = word[wordcount]
//   // // console.log(cuurentword)

//   useEffect(()=>{
//     const cuurentword = word[wordcount] 
//     const interval = setInterval(() => {
//     if(!isdeleting){
//       if(index < cuurentword.length){
//         setDisplayText((prev) => prev + cuurentword[index])
//         setIndex((prev)=> prev + 1)
//       }else{
//         setTimeout(()=> setIsdeleting(true),200)
//         clearInterval(interval)
//       }
//     }else{
//       if(index > 0){
//         setDisplayText((prev) => prev.slice(0,-1))
//         setIndex((prev)=> prev - 1)
//       }else{
//         setIsdeleting(false)
//         setWordcount((prev)=> (prev + 1) % word.length)
//       }
//     }

//   }, 150);

//   return () => clearInterval(interval)


//   },[wordcount,index,isdeleting])
  





//   return (
//     <>
//       {displaytext}
//     </>
//   )
// }

// export default Typingeffect

































































































































