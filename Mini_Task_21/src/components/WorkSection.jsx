import React from 'react'
import projectImg from '/project.png'

const WorkSection = () => {
  return (
    <section id='work' className='w-4xl self-center font-poppins'>
        <header className='flex items-center justify-between gap-8'>
                <h2 className='text-[#A6B2CC] text-4xl font-bold max-w-64'>Work</h2>
                <div className='flex flex-1 bg-[#A6BBCC] rounded-full h-[2px]'></div>
            </header>
            <div className='px-10 mt-4'>
                <p className='text-sm px-10 font-light text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus est aliquam eos sed! Quasi necessitatibus quae sapiente aut incidunt, assumenda ducimus praesentium iusto rem, reiciendis tenetur vel. Provident temporibus optio dolor aspernatur.
                </p>
                <div className='flex justify-evenly my-8'>
                    <div className='flex flex-col gap-2'>
                        <img src={projectImg} alt="" className='w-80'/>
                        <h4 className='font-space-grotesk font-bold text-sm'>Design Portfolio</h4>
                        <div className='flex gap-2'>
                            {['HTML', 'CSS', 'JAVASCRIPT'].map((text, index) => <span key={index} className='font-space-grotesk font-medium text-xs'>{text}</span> )}
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default WorkSection