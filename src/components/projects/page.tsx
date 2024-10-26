import React from 'react'
// eslint-disable-next-line @next/next/no-img-element
const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://media.istockphoto.com/id/1072179256/vector/concept-ux-user-experience-development-design-usability-improve-software-develop-company-ui.jpg?s=612x612&w=0&k=20&c=12KokDhwIlrPPYe7ejQ0FA-_HMtH_J53oohOcH0cHyo=",
      github: "https://github.com/Syed-Obaid"
    },
    {
      id: 2,
      name: "E-commerce Platform",
      technologies: ["React", "Redux", "Node.js", "Stripe API"],
      image: "https://media.istockphoto.com/id/1370456659/vector/computer-laptop-and-a-mobile-phone-with-an-order-confirmation-icon-on-the-screen-floating-in.jpg?s=612x612&w=0&k=20&c=TgsxAJ0OBGLp5GBLH1rlWP1-0AAENqnMs0hCM9tP1oQ=",
      github: "https://github.com/Syed-Obaid"
    },
    {
      id: 3,
      name: "Weather App",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      image: "https://media.istockphoto.com/id/1457076388/vector/plasticine-3d-weather-icons-render-style-sun-cumulus-and-snowflakes-trendy-fluffy-bubbles.jpg?s=612x612&w=0&k=20&c=cOBcHF4uIdShlICEoRmoFufCjWZ9NJFzPAqk7xW8KKM=",
      github: "https://github.com/Syed-Obaid/weather1app"
    },
   
  ];
  

// eslint-disable-next-line @next/next/no-img-element

function Projects() {
  return (
    <div  className='bg-black text-white py-20' id='projects'>
    <div className='container mx-auto px-2 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map(project=> (
        <div key={project.id} className='bg-gray-800 p-4 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
            <p className='text-gray-400 mb-4'>{project.technologies}</p>
            <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </div>
      ))}

    </div>
    </div>
    </div>
  )
}

export default Projects
