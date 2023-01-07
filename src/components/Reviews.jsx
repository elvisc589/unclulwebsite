import React from 'react'
import {AiFillStar} from 'react-icons/ai'


const Reviews = () => {
    return(
        <div id='reviews' className='max-w-[1140px] m-auto w-full px-4 py-16'>
             <h2 className='text-center text-gray-700 p-4'>
        <body className='gridplace-items-center grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-3xl'>
            <div className='flex flex-col p-10 gap-10 gap-4'>
            
                <figure className='bg-white rounded-2xl shadow-lg overflow-hidden rotate-1 hover:rotate-0 transition duration-200'>
                    <blockquote className='p-8'>
                        <div className='mb-5 text-yellow-100'>
                        <svg width="45" height="36" class="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg>

                        </div>
                        <p className='font-bold text-lg'>
                        Oscar and his helper did an excellent job repairing drywall in our ceiling, and painting our hallway and kitchen. He covered everything, made no mess at all. He is personal, punctual, and professional.
                        </p>
                    </blockquote>
                    <div className='flex items-center justify-between px-10 py-5 bg-orange-500'>
                        <div className='flex items-center gap-5'>
                           
                            <figcaption className='text-white font-semibold'>
                                <div> - Nick L.</div>
                                <div className='opactiy-70 '></div>
                            </figcaption>
                        </div>
                        <a className='grid grid-cols-5 text-white/50 hover:text-white/80 transition duration-200'>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
    
                        
                        </a>
                    </div>
                </figure>
</div>
<div className='flex flex-col p-10 gap-10 gap-4'>
                <figure className='bg-white rounded-2xl shadow-lg overflow-hidden -rotate-2 hover:-rotate-1 transition duration-200'>
                    <blockquote className='p-8'>
                        <div className='mb-5 text-blue-100'>
                        <svg width="45" height="36" class="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg>

                        </div>
                        <p className='font-bold text-lg'>
                        Oscar was incredible to work with. He was really responsive, did great quality work, and was really reasonably priced. Plus, our dog loved him. This is definitely your guy when it comes to paint.
                         </p>
                    </blockquote>
                    <div className='flex inset-x-0 bottom-0 items-center justify-between px-10 py-5 bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600
                    to-indigo-500'>
                        <div className='flex items-center gap-5'>
                            <figcaption className='text-white font-semibold'>
                                <div>- Dan A.</div>
                                <div className='opactiy-70 '></div>
                            </figcaption>
                        </div>
                        <a className='flex flex-row text-white/50 hover:text-white/80 transition duration-200'>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        <AiFillStar size={20} className='mr-0'/>
                        </a>
                    </div>
                </figure>
                </div>
        </body>
        </h2>
        </div>

    )}

export default Reviews