import React from 'react'
import about3 from '../assets/about3.jpg'
import exterior3 from '../assets/exterior3.jpg'

const Selects = () => {
    return(
        /*<div id='about' className='max-w-[1140px] m-auto w-full px-4 py-16'>
             <h2 className='text-center text-gray-700 p-4'>About Us</h2>
        <body className='gridplace-items-center bg-gray-100 rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10 gap-4'>
            <div className='w-6/12 sm:w-50 px-50'>
                 <img src={about3} alt='/' className="shadow rounded-full max-w-full h-auto border-none"/>
            </div>
        
       <div className='px-4 py-16 bg-gray-100 rounded-2xl'>
        <p className='text-center indent-8 mt-4 text-gray-700 '>My priority is to make sure my customers are satisfied with my work. I take pride in what I do and with every single project I make sure to give 110%...</p>
        </div>
    </div>
    </body>
    </div>*/
    /*<div id='about' className='max-w-[1140px] m-auto w-full px-4 py-16'>
    <div className='grid grid-cols-2 p-10 gap-10 gap-4'>
    <div className=' max-w-2xl mx-auto p-8'>
    <ul className='content flex flex space-x-6'>
        <li className='content flex flex-col items-center space-y-1'>

            <div className='bg-gradient-to-tr from-yellow-500 to-orange-500 p-1 rounded-full'>
                <a className='block bg-white p-1 rounded-full hover:-rotate-6' href='#'>
                    <img className='h-24 w-24 rounded-full' src={about3} alt='/'/>
                </a>
            </div>
            <a href='#'>Oscar Martinez</a>
            <div className='px-4 py-16 bg-gray-100 rounded-2xl'>
            <p className='text-center indent-8 mt-4 text-gray-700 '>My priority is to make sure my customers are satisfied with my work. I take pride in what I do and with every single project I make sure to give 110%...</p>
       </div>
        </li>
    </ul>
    </div>
    </div>mr-15
    </div>*/
    <div id='about' className='max-w-[1140px] m-auto w-full px-4 md:py-3'>
           

        <h2 className='text-center text-gray-700 p-4'>About Us</h2>

    <body className='flex justify-center items-center rounded-3xl'>
        
    <div className='m-150 w-[99%] m-auto flex grid-cols-1 md: grid-cols-2 bg-gray-100 rounded-3xl'>
        <div className='max-w-2xl mx-auto p-8 col-span-1'>
    <ul className='items-center md:float-left'>
        <li className='content flex flex-col items-center space-y-2'>

        <div className=' bg-gradient-to-tr from-yellow-400 to-orange-600 p-1 rounded-full'>
                <a className='block bg-white p-1 rounded-full hover:-rotate-6'>
                    <img className='h-24 w-24 rounded-full' src={about3} alt='/'/>
                </a>
            </div>
            <a className='text-gray-700'>Oscar Martinez - Owner</a>
            </li>
            </ul>
            
            <p className='md:mt-7 mb-8 text-base indent-8 mt-4 text-gray-700'>"My priority is to make sure my customers are satisfied with my work. I take pride in what I do and with every single project I make sure to give 110%"</p>
      
        </div>
            
            
        
    </div>
    </body></div>
   
    );}

    export default Selects