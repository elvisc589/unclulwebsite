import React from 'react'

import exterior from '../assets/exterior.jpg'


import exterior3 from '../assets/exterior3.jpg'

import bath from '../assets/bath.jpg'



const Work = () => {
    return(
<div id='work' className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
    <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Interior</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={bath} alt='/'/>
    </div>
    <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Exterior</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={exterior3} alt='/'/>
        </div>
            <div  className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Commercial</h3>
            <img  className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={exterior} alt='/'/>
        </div>
    </div>
    );
}

export default Work