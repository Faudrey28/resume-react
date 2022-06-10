import React from 'react';
import Image from 'next/image';


const About = () => {
    return (
     <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
         <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
           <div className='col-span-2'>
               <p className='uppercase text-xl tracking-widest text-[#BB6464]'>About</p>
               <h2 className='py-4'>Who I Am</h2>
               <p className='py-2 text-gray-600'>I have spent the last 4 years working in Trust and Safety for Youtube and Apple. Enforcing policies and guidelines to ensure platforms remain a safe place for users and developers. I started to be really interested in knowing more about programming and how it works to better help developers. And in 2022, I earned my certificate from "The complete 2022 Web Development Bootcamp by Angela Yu".</p>
           </div>  
           <div className='w-6/12 h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image className='rounded-xl' src="/../public/assets/audrey.webp" width='270' height='300' alt='/'/>
           </div> 
         </div>
     </div>
    );
};

export default About;