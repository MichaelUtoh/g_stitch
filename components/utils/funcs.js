import { FaCog } from "react-icons/fa"
import { MdOutlineError } from 'react-icons/md'

export const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center text-[#5a5a5a] w-full'>
        <FaCog className='spin text-gray-300 text-5xl' />
        <span className='mt-5'>Loading...</span>
    </div>
  )
}

export const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center text-[#5a5a5a] w-full'>
        <MdOutlineError className='spin text-gray-300 text-5xl' />
        <span className='mt-5'>Error...</span>
    </div>
  )
}

export const PageNotFound = () => {
  return (
      <div className='h-screen flex items-center justify-center w-full'>
          <p className='text-3xl text-[#5a5a5a]'>404 - Page Not Found</p>
      </div>
  )
}

