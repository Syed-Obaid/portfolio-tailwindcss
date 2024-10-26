import React from 'react'
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line react/no-unescaped-entities
function Hero() {
  return (
    <div className='bg-black text-white text-center py-16 '>
    
      <img src='/icon.png' alt="" className='mx-auto mb-8 w-48  h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 border-4  border-solid border-white'/>
      <h1 className='text-4xl font-bold animated-heading text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Syed Obaidullah Sharif</span> ,Frontend Developer
      </h1>

{/* <h1 className="animated-heading">Welcome to React Animations!</h1> */}

      <p className='mt-4 text-lg text-gray-300 animated-paragraph px-10 md:px-28'>
      As a passionate Frontend Developer, I specialize in creating visually appealing, responsive, and user-friendly web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I aim to deliver seamless user experiences across devices. My work emphasizes clean code, performance optimization, and attention to design details, ensuring both functionality and aesthetics align.
      </p>
      <div className='mt-8 space-x-4'>
        <button  className='bg-gradient-to-r from-green-400 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
