import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  experience:Experience,
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] 2xl:w-[900px] snap-center bg-[#191919] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-greenBlue '>
        <motion.img
          initial={{
            y:-50,
            opacity:0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full 2xl:w-[200px] 2xl:h-[200px] object-cover object-center border-cambridgeBlue'
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
          <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
          <div className='flex space-x-2 my-2'>
            {experience.technologies.map((technology) => (
              <img className="h-10 w-10 bg-white rounded-lg" src={urlFor(technology.image).url()} key={technology._id} alt=""/>
            ))}
          </div>

          <p className='uppercase py-5 text-gray-300'>
              {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} 
          </p>

          <ul className='list-disc space-y-4 ml-5 text-lg '>
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      
    </article>
  )
}

export default ExperienceCard