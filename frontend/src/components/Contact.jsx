import React from 'react'
import lambdacup from '../assets/lambdacup.jpg'


const Contact = () => {
    return(
        <div id='contact' className='bg-[var(--gold)]'>
        <div  className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-4xl font-semibold text-[var(--brown)]'>Contact Us</h2>
            <p className='text-center text-lg text-[var(--brown)]'>We're Standing By!</p>
            <div className='grid md:grid-cols-2 mt-4'>
            <img src={lambdacup} alt='/' className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
           
            
               <form action="https://formsubmit.co/lambda.unc@gmail.com" method="POST">
                    <div className='grid grid-cols-2'>
                        <input className='shadow-lg border m-2 p-2' type='text' name='First' placeholder='First' required/>
                        <input className='shadow-lg border m-2 p-2' type='text' name='Last' placeholder='Last' required/>
                        <input className='shadow-lg border m-2 p-2' type='email' name='Email' placeholder='Email' required/>
                        <input className='shadow-lg border m-2 p-2' type='tel' name='Phone' placeholder='Phone' required/>
        
                        <textarea className='shadow-xl border md:h-52 col-span-2 m-2 p-2' name='Message' cols='30' row='10' placeholder='Message' required></textarea>
                        <button className='col-span-2 m-2 hover:text-[var(--gold)]'>Submit</button>
                        <p className='p-2 text-xs'>Powered by FormSubmit</p>
                        
                    </div>
                </form>
            </div>
        </div></div>
    );
}
export default Contact