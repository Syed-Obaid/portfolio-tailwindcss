'use client'
import React, { useState } from 'react'

function Navbar() {

const [isClick , setIsClick] = useState(false)
const toggleNavbar = () =>{
    setIsClick(!isClick)
}
return (
<>
  <nav className='bg-gray-800 text-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex'>
               <h1 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Portfolio</h1>
    </div>   
  <div className=' hidden md:block'>
<div className='flex items-center  space-x-6 text-lg '>

    <a href="#home" className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold '>Home</a>
    <a href="#about" className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold '>About</a>
    <a href="#services" className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold'>Services</a>
    <a href="#projects" className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold '>Projects</a>
    <a href="#contact" className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold '>Contact Me</a>

</div>

<div>
 


</div>
           </div>


            
<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>

<div className='md:hidden flex items-center'>
<button className='inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNavbar}>
{
    isClick ? (  <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg"
        fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
        </svg> ) : (  <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg"
            fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
            </svg> )
}
</button>
</div>


        </div>

    </div>
{isClick && (       <div className=' md:hidden'>
<div className='space-y-4 flex flex-col justify-center items-center'>

    <a className='block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' href="">Home</a>
    <a className='block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' href="">About</a>
    <a className='block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' href="">Services</a>
    <a className='block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' href="">Projects</a>
    <a className='block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' href="">Contact Me</a>
     
    <a href="" className='pb-2'><button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button></a>

</div>

           </div>



           )}


  </nav>
</>
)


}

export default Navbar
