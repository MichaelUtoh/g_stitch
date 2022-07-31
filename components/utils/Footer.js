import { AiFillInstagram, AiFillFacebook, AiFillHeart, AiOutlineTwitter } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
      <div className='flex items-center justify-between p-2 text-[#5a5a5a] w-full'>
          <AiFillHeart className="mx-4 text-red-500" />
          <p className='flex fnt2 font-thin text-sm'>Stitches &copy; 2022</p>
          <ul className='flex justify-between mx-4 text-[#070707]'>
            <li className='cursor-pointer ml-4 hover:text-blue-800 text-lg'><AiFillFacebook /></li>
            <li className='cursor-pointer ml-4 hover:text-blue-400 text-lg'><AiOutlineTwitter /></li>
            <li className='cursor-pointer ml-4 hover:text-orange-900 text-lg'><AiFillInstagram /></li>
          </ul>
      </div>
    )
  }
  
  export default Footer