import React from 'react'
import logoVideo from '../assets/LULlogovideo.mov'



const Hero = () => {
    return (
        <div className='w-full h-[80vh]'>


<video className='w-full h-full object-cover' src={logoVideo} autoPlay loop muted/>



        
       <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl drop-shadow-2xl'></h1>
            <a className='inline-block' href='#contact'>
            {/*<button className='flex w-[46%] justify-between items-center mt-10 px-4 py-2 rounded-md text-xl font-bold bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 inline-block'>
                
                
                     
    </button>*/}
           </a>
            <h2 className='text-4xl py-4 italic '></h2>
            <p></p>
            
</div>
        </div>
        </div>
    );
}

export default Hero;