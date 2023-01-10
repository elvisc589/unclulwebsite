import React from 'react'
import SelectsCard from './SelectsCard'
import elvis from '../assets/neoelvis.jpg'
import service from '../assets/service.jpg'
import bbq from '../assets/bbq.jpg'
import worldcup from '../assets/worldcup.jpg'
import lambdacup from '../assets/lambdacup.jpg'
import docu from '../assets/docu.jpg'

const Selects = () => {
    return(
        <div className='bg-[var(--gold)]'>
        <div id='gallery' className='max-w-[1140px] mx-auto px-4 py-16'>
    <h2 className='text-center text-[var(--brown)] p-4'>Follow us on Instagram @unc_lul</h2>  
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SelectsCard bg={worldcup} text=''/>
            <SelectsCard bg={docu} text=''/>
            <SelectsCard bg={elvis} text=''/>
            <SelectsCard bg={bbq} text=''/>
            <SelectsCard bg={lambdacup} text=''/>
            <SelectsCard bg={service} text=''/>
            </div>
    </div>
</div>
    );
}

export default Selects