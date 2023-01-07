import React, {useState} from 'react'
import {SiThumbtack} from 'react-icons/si'
import{
    FaFacebookF,
    FaTiktok,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href='/'>Home</a>

            </li>
            <li>
                <a href='#reviews'>Reviews</a>
            </li>
            <li>
                <a href='#gallery'>Gallery</a>
            </li>
            
            
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
            
        </ul>
        <div className='flex justify-between'>
            <a target='_blank' href='https://www.facebook.com/flowpaints'><FaFacebookF className='mx-4'/></a>
            <a target='_blank' href='https://www.thumbtack.com/nc/burlington/interior-painting/flowpaint-llc/service/424719051419484162'><SiThumbtack className='mx-4'/></a>
            <a target='_blank' href='https://www.tiktok.com/@flow.paint'><FaTiktok className='mx-4'/></a>
            
        </div>
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer'/>
        </div>
        {/*MobileMenu*/}
        <div 
        onClick={handleNav}
        className={
            nav 
            ?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
                <a href='/'>Home</a>

            </li>
            <li className='text-2xl py-8'>
                <a href='#reviews'>Reviews</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='gallery'>Gallery</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#about'>About</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        </div>
    </div>
    );
}

export default Navbar;