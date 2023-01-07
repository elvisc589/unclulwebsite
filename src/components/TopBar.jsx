import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import logo2 from '../assets/logo2.jpg'

const TopBar = () => {
    return(
        <div className='flex justify-between items-center px-4 py-1'>
            <div className='flex items-center'>
                {/*<BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
                <img src={logo2} className='h-20 w-69'/>*/}
                <h1 className='text-xl font-bold bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 inline-block text-transparent bg-clip-text'>FlowPaintsLLC</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>9am-5pm</p>
                </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>200-100-1000</p>
            </div>
            
                <a href='#contact'>
            <button className='rounded-md bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600'>Get a Free Quote</button>
            </a>
            
            </div>
            </div>
    )
}

export default TopBar