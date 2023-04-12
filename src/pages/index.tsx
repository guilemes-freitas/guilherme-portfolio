/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../../typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchProjects } from '@/utils/fetchProjects'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
}

const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
  return (
    <div className='bg-[#0f0f0f] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-greenBlue'>
      
      <Head>
        <title>Guilherme Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact/>
      </section>

      
      <footer className='sticky bottom-5 w-full z-50'>
        <div className='flex items-center justify-center'>
          <Link href="#hero">
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={urlFor(pageInfo.heroImage).url()} alt="" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 10,
  };
}

