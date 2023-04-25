import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
  experiences.sort((a,b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime() )
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full pt-20
    sm:px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-200 text-2xl'>
      Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll sm:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-greenBlue'>
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience