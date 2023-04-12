import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:guilemes300@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='min-h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-200 text-2xl'>
      Contact Me
      </h3>
      <div className='flex flex-col space-y-5 mt-40 2xl:mt-0 2xl:space-y-10'>
        <h4 className='text-xl 2xl:text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-greenBlue/50 underline'>Let&apos;s Talk.</span>
        </h4>

        <div className='space-y-2'>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-greenBlue h-7 w-7 animate-pulse'/>  
            <p className='text-2xl'>Cascavel, Paraná, Brasil</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-greenBlue h-7 w-7 animate-pulse'/>  
            <p className='text-2xl'>guilemes300@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex flex-col space-y-2 sm:space-x-2 sm:flex-row sm:space-y-0 '>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button 
            type="submit" 
            className='bg-greenBlue py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact