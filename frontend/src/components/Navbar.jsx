import React, {useState} from 'react'
import{
    FaFacebookF,
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
    <div className='w-full flex justify-between items-center absolute top-0 z-10 text-white bg-gray-900/30'>
         <a href='/'>
         <img className='h-20 w-69' src={logo} alt='/'></img>
         </a>
         
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
                <a href='/lambdas' rel="noreferrer">Meet the Lambdas</a>
            </li>
            <li>
                <a href='/events' rel="noreferrer">Events</a>
            </li>
            
        </ul>
        
        <div className='flex justify-between'>
            <a target='_blank' href='https://www.facebook.com/UNC.LUL/' rel="noreferrer"><FaFacebookF className='mx-4 fill-[var(--gold)]'/></a>
            <a target='_blank' href='https://twitter.com/UNC_LUL' rel="noreferrer"><FaTwitter className='mx-4 fill-[var(--gold)]'/></a>
            <a target='_blank' href='https://www.instagram.com/unc_lul/' rel="noreferrer"><FaInstagram className='mx-4 fill-[var(--gold)]'/></a>
        </div>
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer'/>
        </div>
        {/*MobileMenu*/}
        <div 
        onClick={handleNav}
        className={
            nav 
            ?'overflow-y-hidden md:hidden ease-in duration-300 text-gray-300 absolute left-0 top-0 w-full h-[100vh] bg-black/90 px-4 py-7 flex flex-col' 
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