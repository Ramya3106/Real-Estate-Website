import React from 'react'
import profile_img1 from '../assets/profile_img1.jpg'
import profile_img2 from '../assets/profile_img2.jpg'
import profile_img3 from '../assets/profile_img3.jpg'
import { RiStarSFill } from "react-icons/ri";
import { motion } from "framer-motion"

export const TestimonialsData = [
  {
   name:"Emile Jackman",
   title: "Marketing Manager",
   image: profile_img1,
   alt: "Portrait of Donald Jackman",
   rating: 4,
   text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img2,
    alt: "Portrait of Richard Nelson",   
    rating:4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."

  },
]

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    Viewport={{once: true}}
    
    className='container mx-auto py-10 lg:px-32 w-full text-center
    overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Customer<span className='underline
        underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories Those who home With Us  </p>

        <div className='flex flex-wrap justify-center gap-8'>
          {TestimonialsData.map((testimonial,index)=>(
           <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
            <img className='w-20 h-20 rounded-full mx-auto mb-4'src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className="flex gap-1 justify-center mb-2">
              {Array.from({length:testimonial.rating},(item, index )=>(
                <RiStarSFill key={index} className='text-yellow-300'/>
              ))}
              </div>
              <p className='text-gray-600'>{testimonial.text}</p>

           </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Testimonials