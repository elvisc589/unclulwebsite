import React from 'react'
import SelectsCard from './SelectsCard'
import elvis from '../assets/neoelvis.jpg'
import service from '../assets/service.jpg'
import bbq from '../assets/bbq.jpg'
import worldcup from '../assets/worldcup.jpg'
import lambdacup from '../assets/lambdacup.jpg'
import docu from '../assets/docu.jpg'

const Lambdas = () => {
    return(
        <div className='bg-[var(--gold)]'>
        <div id='gallery' className='max-w-[1140px] mx-auto px-4 py-16 pt-24'>
    <h1 className='text-center text-[var(--brown)] p-4'>Meet the Lambdas - Undergrad</h1>  
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <SelectsCard bg={worldcup} p1='Major: Computer Science B.S.' p2='Hometown: Raleigh, NC' p3='Ethnic Background: Mexican' p4='Pledged Fall 2021' p5='Position: Webmaster' h2='Nori West'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            <SelectsCard bg={worldcup} text='text' h2='title'/>
            </div>
    </div>
</div>
    );
}

export default Lambdas