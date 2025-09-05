import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section id='contact' className='w-4xl self-center font-poppins'>
      <header className='flex items-center justify-between gap-8'>
        <h2 className='text-[#A6B2CC] text-4xl font-bold max-w-64'>Contact Me</h2>
        <div className='flex flex-1 bg-[#A6BBCC] rounded-full h-[2px]'></div>
      </header>
      <div className='px-10 mt-4'>
        <p className='text-sm px-10 font-light text-gray-200 font-space-grotesk'>
          I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection