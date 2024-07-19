import React from 'react'
import opener from '../assets/1.jpg'
import day1 from '../assets/2.jpg'
import day2 from '../assets/3.jpg'
import day3 from '../assets/4.jpg'
import day4 from '../assets/5.jpg'
import day5 from '../assets/6.jpg'
import day6 from '../assets/7.jpg'
import day7 from '../assets/8.jpg'


const Events = () => {
    return(
        <div className='w-full bg-white'>
      <div className='w-full h-[70vh] relative'>
      <div id='home' className='w-full h-[80vh] top-0 left-0 absolute'></div>
       
  <div className='w-full h-[80vh] flex flex-col absolute top-0 left-0 justify-center items-center z-1'>
<div className='text-6xl font-bold px-4 tracking-wide text-white'></div>
 
</div>
           <img className='w-full h-full object-cover' src={opener} alt="/"/>
        </div>


   <div className='max-w-[1140px] w-full flex justify-center m-auto px-4 py-16'>
   <div>
    <div class="space-y-16">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day1}
              alt="/"
            />
          </div>
    
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]">
            <h1 class="text-3xl font-medium py-2">Kickbol</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">Hooker Fields | 5:00 - 6:30pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            We're calling out everybody!!! The Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated is proud to host a fun game of Kickbol! 🤩
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Join us to compete, have fun, and stay active!</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">🤎💛</p>
           <a href='/#contact'>
             <button class="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
         </div>
       </div>
      
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day2}
              alt="/"
            />
          </div>
        
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]"> 
          <h1 class="text-3xl font-medium py-2">P.A.T.H.E Day</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">Local Highschools | 12:00pm-3:00pm</p>
            <p class="my-3 text-center tracking-wide lg:text-left sm:w-3/4 lg:w-full">Providing Access to Higher Education</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
           The brothers of the Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated are proud to educate, inspire, and be a resource to underrespresented youth.🧠
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Conduct a presentation teaching highschoolers how to navigate their way through highschool leading to higher education.</p>
           
            <a href='/#contact'>
            <button className="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
          </div>
        </div>
        
      
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day3}
              alt="/"
            />
          </div>
    
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]">
            <h1 class="text-3xl font-medium py-2">Valentine's Dinner</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">Que Chula | 6:00 - 8:00pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            Calling all couples!!!  The Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated is proud to host a Valentines day dinner at Que Chula! 🤩
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Performances by Los Desconocidos and Que Rico.</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">💛</p>
           <a href='/#contact'>
             <button class="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
         </div>
       </div>
            
            
       

        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day4}
              alt="/"
            />
          </div>
        
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]"> 
          <h1 class="text-3xl font-medium py-2">Study with the Lambdas</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">CLC Abernathy Hall | 12:00 - 3:00pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            Calling all studious tarheels!!!  The Hermanos of the Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated are looking forward to meeting and studying with everyone! 🧠
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Join us in between classes and stay ahead of assignments!</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full"> 💛</p>
            <a href='/#contact'>
            <button className="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
          </div>
        </div>
      
        
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day5}
              alt="/"
            />
          </div>
    
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]">
            <h1 class="text-3xl font-medium py-2">Founder's Day Performance</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">The Pit | 12:19pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            The Hermanos of the Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated are proud to showcase our talent for all at the pit.
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Watch how the Absolutely Incredible Lambdas get down!!! 🤩</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">💛</p>
           <a href='/#contact'>
             <button class="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
         </div>
       </div>


       <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24  mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day6}
              alt="/"
            />
          </div>
        
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]"> 
          <h1 class="text-3xl font-medium py-2">Copa De Oro Tournament</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">Hooker Fields | 5-7:00pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            The Hermanos of the Alpha Iota Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Incorporated calls everybody out!!! 
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Join us and challenge the elite lambdas on the field!</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">💛</p>
            <a href='/#contact'>
            <button className="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
          </div>
        </div>





       <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-12 md:mt-0">
          
          <div class="flex flex-1 justify-center mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6  sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={day7}
              alt="/"
            />
          </div>
    
          <div class="flex flex-1 flex-col items-center lg:items-start text-[var(--brown)]">
            <h1 class="text-3xl font-medium py-2">Founder's Day Latin Night</h1>
            <p class="mb-9 text-center lg:text-left sm:w-3/4 lg:w-full">Duke | 10:30pm</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">
            Celebrate our Founder's Day with a night of latin music, dancing, and festivites!!🤩
            </p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full">Join us for an absolutely incredible night, we'll love to see you there!!</p>
            <p class="my-3 text-center lg:text-left sm:w-3/4 lg:w-full"> 💛</p>
           <a href='/#contact'>
             <button class="mt-5 rounded-full hover:text-[var(--gold)]">Contact Us</button>
          </a>
         </div>
       </div>

</div>
 </div>
 
    </div>

   </div>
   


           

);}

export default Events