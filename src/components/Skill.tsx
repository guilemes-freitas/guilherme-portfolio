/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <motion.div 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0}}
      className="card group/exp relative bg-opacity-10 bg-white rounded-2xl cursor-pointer h-20 w-20 md:w-22 md:h-22 2xl:w-28 2xl:h-28 flex flex-col
      before:hover:opacity-100 overflow-hidden group-hover/skill:after:opacity-100
      before:content-[''] before:h-full before:left-0 before:top-0 before:absolute before:opacity-0 before:transition-opacity before:duration-500 before:w-full
      after:content-[''] after:h-full after:left-0 after:top-0 after:absolute after:opacity-0 after:transition-opacity after:duration-500 after:w-full
      before:z-30 after:z-10 " 
      >

      <div className="bg-[#191919] absolute rounded-2xl inset-1 p-2 flex flex-col gap-4 justify-center items-center z-20" >
        <img className="h-6 w-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10 bg-white rounded-lg" src={urlFor(skill?.image).url()} alt=""/>
        <h3 className="text-sm text-center">{skill?.title}</h3>
      </div>
      <div className='absolute opacity-0 group-hover/exp:opacity-100 backdrop-blur-sm group-hover/exp:bg-cambridgeBlue/60 h-full w-full  z-30'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl 2xl:text-2xl font-bold opacity-100 text-white text-center'>{skill?.experience}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill