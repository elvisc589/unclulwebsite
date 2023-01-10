import React from 'react'
const SelectsCard = (props) => {
    return(
<div>
<div className='relative pb-40'>
         
            <img className='top-0 pt-6' src={props.bg} alt='/'/>
        
<div className='bg-gray-900/5 absolute w-full h-full'>
    <div className='space-y-9'>
            <h2 className='text-border-black py-4 text-2xl font-bold text-white absolute'>
                    {props.h2}
                </h2>
           
                <p className='text-border-black py-4 text-l text-white absolute'>
                   
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
