import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import logo2 from '../assets/logo2.jpg'

const Footer = () => {
    return(
        <div className='max-w-[1140px] w-full py-4 m-auto border-t-4'>
<div className='flex items-center m-auto justify-center'>
    {/*<BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
    <h1 className='text-xl font-bold text-gray-700'>FlowPaintsLLC</h1>*/}
    <img src={logo2} alt='/' className='h-20 w-69'/>
</div>
        </div>
    )
}

export default Footer