import React from 'react'
import natlogo from '../assets/natlogo.png'
import crest from '../assets/CREST.png'




const Nationals = () => {
    return(
        
<div id='nationals bg-[var(--brown)]'>
<div className='w-full h-[50vh] pt-16 bg-[var(--brown)]'>
            <img className='w-full h-full object-scale-down sm:object-cover sm:mt-12' src={natlogo} alt="/"/>
            </div>
            <div className='w-full h-full bg-[var(--brown)]'>
   <div className='max-w-[1140px] w-full h-full m-auto px-4 sm:pt-32 pt-12 text-white'>
   <div className='grid grid-cols-1 sm:gap-x-20 md:grid-cols-5'>
   <div className='flex flex-col md:col-span-2 sm:space-y-16 space-y-4 items-center'>
             <h2 className='text-center text-4xl font-semibold'>About Us</h2>
             <h2 className='text-center'>______________________</h2>
            <img className='' src={crest} alt="/"/>
            <a target='_blank' href='https://www.launidadlatina.org' rel="noreferrer">
            <button className='flex justify-between items-center hover:text-[var(--brown)] mt-10 px-4 py-2 text-xl font-bold bg-[var(--gold)] inline-block rounded-full border-[var(--brown)]'>
                
                Visit Nationals
                     
                </button>
            </a>
            </div>
            <div className='flex flex-col col-span-3 space-y-6 mb-16 mt-12 sm:mt-0'>
            <h1 className='font-medium text-xl'>Mission Statement</h1>
            <p className='text-lg'>La Unidad Latina, Lambda Upsilon Lambda Fraternity, Incorporated primarily seeks to take a leadership role in meeting the needs of the Latino community through academic achievement, cultural awareness, community service and promotion of the Latino culture and people.</p>
            <h1 className='font-medium text-xl'>Positioning Statement</h1>
            <p className='text-lg'>La Unidad Latina Lambda Upsilon Lambda Fraternity, Incorporated strives to become the premier Latino Fraternity in the country. More specifically, we strive to become a nationally recognized Latino fraternal organization comprised of the best and brightest leaders committed to excellence in service and education.</p>
            <h1 className='font-medium text-xl'>Fulfilling Our Mission</h1>
            <p className='text-lg'>Since its inception in 1982, La Unidad Latina has remained on the vanguard of political and community empowerment by developing influential leaders that strive to exert knowledge and power into its peers in order to attain mutual success. We commit ourselves to academic excellence, leadership development and cultural enlightenment, enhanced by a diverse cognizant membership. La Hermandad strives to preserve and promote an inclusive intellectual environment for its members, in addition to the general community. In the execution of its conceived mission, La Unidad Latina will:</p>
            <div className='ml-8'>
            <li className='text-base'>Provide Latino students with the academic, cultural and social support necessary to excel in institutions of higher learning</li>
            <li className='text-base'>Increase opportunities for Latino children and adolescents to achieve in elementary and secondary schools</li>
            <li className='text-base'>Develop leaders that shall provide, develop and implement the tools for community empowerment</li>
            <li className='text-base'>Inspire ethnic pride and cultural awareness in the Latino community</li>
            <li className='text-base'>Support the efforts to enhance the growth and well-being of the Latino community</li>
            <li className='text-base'>Collaborate with individuals, organizations and institutions that will join our efforts to improve the conditions of the Latino community.</li>
         </div></div>
            </div></div></div>
    
  </div>
    );
}

export default Nationals