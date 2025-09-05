import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='w-4xl self-center font-poppins'>
            <header className='flex items-center justify-between gap-8'>
                <h2 className='text-[#A6B2CC] text-4xl font-bold max-w-64'>About</h2>
                <div className='flex flex-1 bg-[#A6BBCC] rounded-full h-[2px]'></div>
            </header>
            <div className='px-10 mt-4'>
                <p className='text-sm px-10 font-light text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus est aliquam eos sed! Quasi necessitatibus quae sapiente aut incidunt, assumenda ducimus praesentium iusto rem, reiciendis tenetur vel. Provident temporibus optio dolor aspernatur.
                </p>
                <div className='flex justify-between my-8'>
                    {[
                        { title: "Front-End", subText: "60+ Hours Experience" },
                        { title: "Python", subText: "4 Years Experience" },
                        { title: "Machine Learning", subText: "120+ Hours Experience" },

                    ].map((item, index) => {
                        return (
                            <div key={index} className='flex font-space-grotesk flex-col items-center justify-center gap-2'>
                                <h4 className='font-bold text-3xl'>{item.title}</h4>
                                <p className='text-xs text-[#A6BBCC] underline decoration-[#A6BBCC] underline-offset-2'>{item.subText}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutSection