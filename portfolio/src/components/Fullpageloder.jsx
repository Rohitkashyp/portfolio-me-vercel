import React from 'react'

const Fullpageloder = () => {
  return (
    <div className='bg-white fixed inset-0 z-50 flex justify-center items-center'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='h-18 w-18 border-8 border-white border-t-red-700 border-b-red-700 border-r-red-700 animate-spin rounded-full'>
     
        </div>
        <div className='text-2xl font-medium'>Loading...</div>
      </div>
    </div>
  )
}

export default Fullpageloder





