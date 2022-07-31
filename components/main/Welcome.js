import React from 'react'


const Welcome = () => {
  return (
    <div className='flex flex-col min-h-full items-center justify-center w-full'>
        <p className='fnt2 text-center sm:text-7xl text-3xl'>
            <span className='text-3xl text-green-100 welcomeBox'>&#8734;</span> 
              Style is Living 
            <span className='text-3xl text-orange-100'>&#8734;</span>
        </p>
        <button
          className='bg-[#070707] btn fnt2 hover:bg-[#212121] my-6 p-2 rounded-full 
            shadow-lg sm:mt-8 text-white sm:w-[300px] w-[170px] sm:text-lg text-sm'
          type='button'
        >Get Started</button>
    </div>
  )
}


export default Welcome
