import React from 'react'
import bbq from '../assets/bbq.jpg'
import worldcup from '../assets/worldcup.jpg'
import lambdacup from '../assets/lambdacup.jpg'




const Work = () => {
    return(
        <div className='bg-[var(--brown)]'>
<div id='work' className='max-w-[1140px] m-auto w-full md:flex mt-[40px] '>
    <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'></h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={bbq} alt='/'/>
    </div>
    <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'></h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={worldcup} alt='/'/>
        </div>
            <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'></h3>
            <img  className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={lambdacup} alt='/'/>
        </div>
    </div></div>
    );
}

export default Work