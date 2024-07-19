import React from 'react'
import logo from '../assets/unclogo.png'

import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='border-t-4'>
        <div className='max-w-[1140px] w-full py-4 m-auto '>
<div className=' flex flex-row m-auto'>
    <div className='flex'>

        <a href='/'>
    <img src={logo} alt='/' className='w-20 h-20'/>
   </a> 
   
   <div className='flex items-center'>
        <h2 className='text-center text-[var(--brown)] p-4 text-2xl'>UNC LUL</h2>
     
    <a target='_blank' href='https://www.facebook.com/UNC.LUL/' rel="noreferrer"><FaFacebookF className='mx-4 fill-[var(--gold)]'/></a>
            <a target='_blank' href='https://twitter.com/UNC_LUL' rel="noreferrer"><FaTwitter className='mx-4 fill-[var(--gold)]'/></a>
            <a target='_blank' href='https://www.instagram.com/unc_lul/' rel="noreferrer"><FaInstagram className='mx-4 fill-[var(--gold)]'/></a>
</div></div>

</div>
        </div></div>
    )
}

export default Footer