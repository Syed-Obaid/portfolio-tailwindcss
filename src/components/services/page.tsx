import React from 'react'


const services = [
    {
      id: 1,
      title: "Responsive Web Design",
      description: "Creating websites that work on all devices, from mobile to desktop, ensuring a seamless user experience."
    },
    {
      id: 2,
      title: "Single Page Applications (SPAs)",
      description: "Developing dynamic, high-performance single-page applications using frameworks like React, Angular, or Vue."
    },
    {
      id: 3,
      title: "UI/UX Design Implementation",
      description: "Translating UI/UX designs into interactive and intuitive user interfaces with a focus on accessibility and usability."
    },
    {
      id: 4,
      title: "Website Performance Optimization",
      description: "Improving website load times and overall performance by optimizing images, code, and caching strategies."
    },
    {
      id: 5,
      title: "Cross-Browser Compatibility",
      description: "Ensuring websites are fully functional across all major browsers (Chrome, Firefox, Safari, Edge, etc.)."
    },
    {
      id: 6,
      title: "Frontend Debugging & Testing",
      description: "Identifying and fixing bugs using tools like Chrome DevTools and writing unit tests for frontend code."
    },
    
  ];
  


function Service() {
  return (
    <div  className='bg-black text-white py-20' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
     {services.map(service =>(
    <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
            {service.id}

        </div>
        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            {service.title}
        </h3>
        <p className='mt-2 text-gray-300'>{service.description}</p>
        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>

    </div>

     ))}
      </div>
    </div>
    </div>
  )
}

export default Service
