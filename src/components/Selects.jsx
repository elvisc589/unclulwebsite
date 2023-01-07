import React from 'react'
import patio from '../assets/patio.jpg'

import interior100 from '../assets/interior100.jpg'
import interior2 from '../assets/interior2.jpg'
import commercial from '../assets/commercial.jpg'

import kitch from '../assets/kitch.jpg'
import SelectsCard from './SelectsCard'

import land from '../assets/land.jpg'

const Selects = () => {
    return(
        <div id='gallery' className='max-w-[1140px] mx-auto px-4 py-16'>
    <h2 className='text-center text-gray-700 p-4'>Gallery</h2>  
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SelectsCard bg={kitch} text='interior'/>
            <SelectsCard bg={patio} text='exterior'/>
            <SelectsCard bg={commercial} text='commercial'/>
            <SelectsCard bg={interior100} text='interior'/>
            <SelectsCard bg={interior2} text='interior'/>
            <SelectsCard bg={land} text='exterior'/>
            </div>
    </div>

    );
}

export default Selects