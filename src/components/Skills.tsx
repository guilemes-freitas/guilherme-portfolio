import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '../../typings';

type Props = {
  skills: SkillType[]
}

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const cards = document.getElementById("cards");
  const cardElements = cards?.getElementsByClassName("card");

  if (cardElements ) {
    for (const card of cardElements as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }
};

function Skills({skills}: Props) {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left 2xl:flex-row 
    max-w-[2000px] 2xl:px-10 min-h-screen justify-center 2xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-200 text-2xl'>
      Skills
      </h3>

      <h3 className='absolute top-28 uppercase tracking-[3px] text-gray-200 text-sm'>Hover over a skill for current experience</h3>

      
      <div onMouseMove={handleMouseMove} id="cards" className='group/skill grid grid-cols-4 gap-5'>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill}/>
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills