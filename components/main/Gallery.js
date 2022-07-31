import React from 'react'
import Link from 'next/link'


export const ShowGallery = () => {
  return (
    <div className='flex flex-wrap h-full items-start justify-start py-10 sm:px-[165px] px-10 w-full'>
      <ShowCard2 />
      <ShowCard1 />
      <ShowCard3 />
      <ShowCard4 />
    </div>
  )
}

export const ShowCard1 = (props) => {
  return (
      <div className='bg-white h-[250px] m-2 rounded-2xl shadow-lg w-72'>
        <div className="bg-[url('../assets//01.jpg')] bg-cover bg-no-repeat h-32 m-2 rounded-lg"></div>
        <div className='m-2 px-1 rounded-lg'>
          <p className='fnt1 text-lg'>Trend Setting Designs</p>
          <p className='fnt2 font-thin mt-1 text-[#8a8a8a] text-md'>
            Our neatly sewn & silky deft touch, sets a pattern for others to follow
          </p>
        </div>
      </div>
  )
}

export const ShowCard2 = (props) => {
  return (
    <div className='bg-white h-[250px] m-2 rounded-2xl shadow-lg w-72'>
      <div className="bg-[url('../assets/02.jpg')] bg-cover bg-no-repeat h-32 m-2 rounded-lg"></div>
      <div className='m-2 px-1 rounded-lg'>
        <p className='fnt1 text-lg'>Top Notch Sewing</p>
        <p className='fnt2 font-thin mt-1 text-[#8a8a8a] text-md'>
          Hand sewn plain and dyed shirts, materials available on request.
        </p>
      </div>
    </div>
  )
}

export const ShowCard3 = (props) => {
  return (
    <div className='bg-white h-[250px] m-2 rounded-2xl shadow-lg w-72'>
      <div className="bg-[url('../assets/03.jpg')] bg-cover bg-no-repeat h-32 m-2 rounded-lg"></div>
      <div className='m-2 px-1 rounded-lg'>
        <p className='fnt1 text-lg'>Training Workshops</p>
        <p className='fnt2 font-thin mt-1 text-[#8a8a8a] text-md'>
          We realize, more skillfull minds equals groundbreaking stuff
        </p>
      </div>
    </div>
  )
}

export const ShowCard4 = (props) => {
  return (
    <div className='bg-white h-[250px] m-2 rounded-2xl shadow-lg w-72'>
      <div className="bg-[url('../assets/04.jpg')] bg-cover bg-bottom bg-no-repeat h-32 m-2 rounded-lg"></div>
      <div className='m-2 px-1 rounded-lg'>
        <p className='fnt1 text-lg'>Customer Satisfaction</p>
        <p className='fnt2 font-thin mt-1 text-[#8a8a8a] text-md'>
          Our core strenght comes from the validation by our satisfied customers
        </p>
      </div>
    </div>
  )
}