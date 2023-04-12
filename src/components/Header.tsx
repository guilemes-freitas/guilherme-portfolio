import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Social } from '../../typings';
import Link from 'next/link';

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    2xl:items-center'>
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5

      }}
      animate={{
        x:0,
        opacity: 1,
        scale:1,
      }}
      transition={{
        durantion: 1.5,
      }}
      className='flex flex-row items-center'>
        
        {socials.map((social) => (
          <SocialIcon 
            key={social._id}
            url={social.url} 
            fgColor='white' 
            bgColor='transparent' 
          />

        ))}
      </motion.div>
      
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5

      }}
      animate={{
        x:0,
        opacity: 1,
        scale:1,
      }}
      transition={{
        durantion: 1.5,
      }}>
          <SocialIcon className='cursor-pointer' network='email' fgColor='white' bgColor='transparent' url='#contact'/>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-200'>Get In Touch</p>
      </motion.div>
    </header>
  )
}