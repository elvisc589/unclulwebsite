import React from 'react'
const SelectsCard = (props) => {
    return(
<div className='container '>
<div className='relative pb-44 mb-9'>
         
            <img className='top-0 pt-6' src={props.bg} loading="lazy" alt='/'/>
        
<div className='bg-gray-900/5 absolute w-full h-56'>
    <div className='space-y-9'>
            <h2 className='text-border-black py-4 text-2xl font-bold text-white absolute '>
                    {props.h2}
                </h2>
           
                <p className='text-border-black py-4 pt-10 text-l text-white absolute'>           
                    {props.p1}
                   <div>
                    {props.p2}
                    </div>
                    {props.p3}
                  <div>
                    {props.p4}
                    </div>
                    {props.p5}
                </p></div> 
            </div>

            
             
</div></div>
);}

export default SelectsCard

