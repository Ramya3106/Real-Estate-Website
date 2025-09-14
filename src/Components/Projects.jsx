import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";
import project_img_5 from "../assets/project_img_5.jpg";
import project_img_6 from "../assets/project_img_6.jpg";
import { motion } from "framer-motion"

export const projectsData =[
  {
  title: "Skyline Haven",
  price: "$2,50,000",
  location: "California",
  image: project_img_1
  },
  {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Fransisco",
      image: project_img_2
      },

      {
          title: "Serenty Suites",
          price: "$2,50,000",
          location: "Chicago",
          image: project_img_3
          },

          {
              title: "Central Square",
              price: "$2,50,000",
              location: "Los Angeles",
              image: project_img_4
              },

              {
                  title: "Vista Verde",
                  price: "$2,50,000",
                  location: "San Fransisco",
                  image: project_img_5
                  },

                  {
                      
                      title: "Serenty Suites",
                      price: "$2,50,000",
                      location: "Chicago",
                      image: project_img_6
                  },
                  

]

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() =>{
    const updateCardsToShow = () => {
      if(window.innerWidth >= 1024){
          setCardsToShow(projectsData.length);
      }else{
        setCardsToShow(1)
      };
    };
      updateCardsToShow();
    
    window.addEventListener('resize',updateCardsToShow);
    return () =>window.removeEventListener('resize', updateCardsToShow);
  },[])

  const nextProject=() =>{
    setCurrentIndex((prevIndex) => (prevIndex +1) % projectsData.length)
  }

  const prevProject=() =>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length -1 : prevIndex -1 )
  } 

  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
    
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full
    overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects<span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legancies-Explore Our Portfolio</p>

        {/*slider buttons */}
        <div className='flex justify-end items-center mb-8'>
          <button onClick={prevProject}
          className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <MdKeyboardArrowLeft /> 
          </button>
          <button onClick={nextProject}
          className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <MdKeyboardArrowRight />
          </button>
        </div>
        {/* project slider container */}
        <div className='overflow-hidden'>
          <div className='text flex gap-8 transition-transform duration-500 ease-in-out w-[1200px] h-[300px]'
          style={{transform:`translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {projectsData.map((project, index)=>(
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                <img src={project.image} alt={project.title} />
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-2 py-2 shadow-md'>
                  <h2 className='text-2xl font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text:sm'>{project.price}</p><span className='px-1'>{project.location}</span>
                    </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        {/* Add Project button below projects */}
        <div className='flex justify-center mt-8'>
          <button className='bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition'>Add Project</button>
        </div>
    </motion.div>
  )
}

export default Projects