'use client'
import React from 'react'

function Contact() {
  return (
    <div className='bg-black text-white py-20' id='contact'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
      <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          
          <div className='flex-1'>
          <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
          <p>I'm open to discussing web developmentprojects or partnership opportunities.</p>
          <div className='mb-4 mt-8'>
            {/* <FaEnVelope className='inline-block text-green-400 mr-2' ></FaEnVelope> */}
            <svg className='inline-block text-green-400 mr-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z"/>
  <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z"/>
</svg>

            <a href="mailto:syedobaidullahsharif@gmail.com" className='hover:underline'>
                youremail@example.com
            </a>

          </div>
          <div className='mb-4 mt-8'>
            {/* <FaPhone className='inline-block text-green-400 mr-2' ></FaPhone> */}
            <svg className='inline-block text-green-400 mr-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
</svg>

            <span>+92 3113327794</span>

          </div>
          <div className='mb-4 mt-8'>
            {/* <FaMapMarkedAlt className='inline-block text-green-400 mr-2' ></FaMapMarkedAlt> */}
            <svg className='inline-block text-green-400 mr-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>

           <span>Karachi, Sindh , Pakistan</span>

          </div>
          </div>

<div className='flex-1 w-full'>
<form className='space-y-4'>
<div>
    <label htmlFor="name" className='block mb-2'>Your Name</label>
    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name'/>
</div>
<div>
    <label htmlFor="email" className='block mb-2'>Email</label>
    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email'/>
</div>
<div>
    <label htmlFor="message" className='block mb-2'>Message</label>
    <textarea  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows={5} placeholder='Enter Your Message'/>
</div>
<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
</form>


</div>

      </div>
    </div>
  </div>

  
)
}

export default Contact
