import React, { useEffect, useRef, useState } from 'react'
import anime from 'animejs';
import Typewriter from 'typewriter-effect';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';


type Props = {
  pageInfo: PageInfo;
};

export default function Hero({pageInfo}: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLDivElement>(null);

  let columns = 0,
      rows = 0,
      toggled = false;
  
  const toggle = () => {
    if(hero.current){
      toggled = !toggled;
      
      hero.current.classList.toggle("toggled");
      
    }
  }
  
  const handleOnClick = (index: any) => {
    toggle();
    
    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    });
  }
  
  const createTile = (index: number) => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    tile.style.opacity = toggled ? "0" : "1";
    
    tile.onclick = e => handleOnClick(index);
    
    return tile;
  }
  
  const createTiles = (quantity: number) => {
    Array.from(Array(quantity)).map((tile, index) => {
      if(wrapper.current){
        wrapper.current.appendChild(createTile(index));
      }
    });
  }
  
  const createGrid = () => {
    if(wrapper.current){
      wrapper.current.innerHTML = "";
      
      const size = document.body.clientWidth > 800 ? 100 : 50;
      
      columns = Math.floor(document.body.clientWidth / size);
      rows = Math.floor(document.body.clientHeight / size);
      
      wrapper.current.style.setProperty("--columns", columns.toString());
      wrapper.current.style.setProperty("--rows", rows.toString());
      
      createTiles(columns * rows);
    }
  }

  useEffect(() => {
    createGrid();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', createGrid)
    }
  });

  return (
    <div id="hero" ref={hero} className="h-full relative 
    overflow-hidden text-center flex flex-col space-y-8 bg-gradient-to-r from-greenBlue via-cambridgeBlue to-greenBlue bg-200">
      <div id="tiles" ref={wrapper} className="relative grid grid-cols-3 grid-rows-3"></div>
      <h1 id="title" className="text-white text-[6vw] m-0 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1/2 text-center transition-opacity duration-1000 ease-in ">

        Welcome to
        <span className="font-dancingScript block leading-5 fancy"> {pageInfo?.name} </span>
        portfolio
        
      </h1>

      <div  id="text" className='h-full w-1/2 flex flex-col space-y-8 items-center justify-center
      text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 z-20 text-white/50 text-2xl transition-opacity duration-1000 ease-in pointer-events-none'>

        <BackgroundCircles/>
        <img
        className='relative rounded-full h-32 w-21 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        />
      
        <div className='z-20'>
          <h2 className='text-sm uppercase text-white pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
          <h1 className='text-3xl 2xl:text-4xl font-semibold px-10'>
            <span className="text-white ">
              
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString(`Hi, the name's ${pageInfo?.name}`)
                    .pauseFor(2500)
                    .deleteAll().typeString('Guy-who-loves-learning.tsx')
                    .pauseFor(2500).deleteAll().typeString('<').typeString('AlsoDesigning />').pauseFor(2500).deleteAll()
                    .start();
                }}
              />
            </span>
          </h1>

          <div id="heroButtons" className='pt-5 relative z-20 text-white'>
            <Link href="#about">
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}