import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import logo from '../assets/unclogo.png'

const TopBar = () => {
    return(
        <div className='flex justify-between items-center px-4 py-1'>
           <div className='flex items-center'>
               {/*<BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>*/} 
                 <h1 className='text-xl font-bold bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 inline-block text-transparent bg-clip-text'>UNC LUL</h1>
                 <img src={logo} className='h-20 w-69'/>
               
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>9am-5pm</p>
                </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>999-999-9999</p>
            </div>
            
                <a href='#contact'>
            <button className='rounded-md bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600'>Contact Us</button>
            </a>
            
            </div>
            </div>
    )
}

export default TopBar