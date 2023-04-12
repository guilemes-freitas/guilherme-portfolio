import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-200 text-2xl'>
        Projects
      </h3>

      <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration: 1.5 }}
       className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-greenBlue'>
        {projects.map((project,i) =>(
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ opacity:0, y:-300 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()} alt="" className='h-96'/>
            
            <div className='space-y-1 px-0 md:px-10 max-w-6xl 2xl:space-y-10'>
              <h4 className='text-2xl font-semibold text-center 2xl:text-4xl'>
                <span className='underline decoration-cambridgeBlue/80'>Case Study {i+1} of {projects.length}: </span> {project.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>

                {project?.technologies?.map(technology => (
                <img 
                  className='h-5 w-5 bg-white rounded-sm'
                  key={technology._id} 
                  src={urlFor(technology.image).url()} alt=""/>
                ))}

              </div>
              <p className='text-sm text-center md:text-left 2xl:text-lg'>
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className='w-full absolute top-[30%] bg-greenBlue/10 left-0 h-[500px] -skew-y-12'/>

    </div>
  )
}

export default Projects