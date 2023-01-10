import React, {useState} from 'react'
import {SiThumbtack} from 'react-icons/si'
import{
    FaFacebookF,
    FaTiktok,
    FaGooglePlusG,
    FaTwitter,
    FaInstagram,
    FaBars,
} from 'react-icons/fa';
import logo from '../assets/unclogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
    <div className='w-full flex justify-between items-center absolute z-10 text-white bg-gray-900/30'>
         <img className='h-20 w-69' src={logo} alt='/'></img>
         <ul className='hidden text-[var(--gold)] items-center sm:flex px-4'>
       
            <li>
                <a href='/'>Home</a>

            </li>
            <li>
                <a href='/about'>About Us: AI</a>
            </li>
            <li>
                <a href='/nationals'>Nationals</a>
            </li>
            
            
            <li>
                <a href='/lambdas'>Meet the Lambdas</a>
            </li>
            <li>
                <a href='/events'>Events</a>
            </li>
            
        </ul>
        
        <div className='flex justify-between'>
            <a target='_blank' href='https://www.facebook.com/UNC.LUL/'><FaFacebookF className='mx-4'/></a>
            <a target='_blank' href='https://twitter.com/UNC_LUL'><FaTwitter className='mx-4'/></a>
            <a target='_blank' href='https://www.instagram.com/unc_lul/'><FaInstagram className='mx-4'/></a>
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
            <a href='/about'>About Us: AI</a>
            </li>
            <li className='text-2xl py-8'>
            <a href='/nationals'>Nationals</a>
            </li>
            <li className='text-2xl py-8'>
            <a href='/lambdas'>Meet the Lambdas</a>
            </li>
            <li className='text-2xl py-8'>
            <a href='/events'>Events</a>
            </li>
        </ul>
        </div>
    </div>
    );
}

export default Navbar;