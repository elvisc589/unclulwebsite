import React from 'react'
import patio from '../assets/patio.jpg'

import exterior from '../assets/exterior.jpg'
import interior from '../assets/interior.jpg'
import interior100 from '../assets/interior100.jpg'




const Gallery = () => {
    return(
    <div id='grid' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={interior100} alt='/'/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src={patio} alt='/'/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src={exterior} alt='/'/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src={interior} alt='/'/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src={patio} alt='/'/>
            </div>
        </div>

        </div>
    );
}

export default Gallery