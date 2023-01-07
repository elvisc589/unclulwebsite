import React from 'react'
import color from '../assets/color.jpg'
import logo2 from '../assets/logo2.jpg'

const Contact = () => {
    return(
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                src={color}
                alt='/' 
                className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
               
                <form action="https://formsubmit.co/ce0430cdd174ffcea92cccea3a9319e2" method="POST">
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type='text' name='First' placeholder='First'/>
                        <input className='border m-2 p-2' type='text' name='Last' placeholder='Last'/>
                        <input className='border m-2 p-2' type='email' name='Email' placeholder='Email'/>
                        <input className='border m-2 p-2' type='tel' name='Phone' placeholder='Phone'/>
                        <input className='border col-span-2 p-2 m-2' type='text' name='Address' placeholder='Address'/>
                        <textarea className='border col-span-2 m-2 p-2' name='Project&nbsp;details' cols='30' row='10' placeholder='Project Details'></textarea>
                        <button className='col-span-2 m-2 bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 rounded-lg'>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact