import React from 'react'
import { NavLink } from 'react-router'
import profileImg from '/profile-image.png'

const HeroSection = () => {
  return (
    <section id='hero' className='flex w-full h-[calc(100dvh-62px)] items-center justify-center gap-12'>
        <div className='font-poppins'>
            <p className='text-sm font-medium'>Hello I'm Deepesh,</p>
            <h1 className='text-[#A6B2CC] text-5xl font-extrabold max-w-64'>Full Stack Devloper</h1>
            <NavLink to={'/#contact'} className='font-extrabold decoration-2 decoration-[#A6BBCC] underline underline-offset-4'>Contact Me</NavLink>
        </div>
        <div>
            <img src={profileImg} alt="" className='h-88'/>
        </div>
    </section>
  )
}

export default HeroSection