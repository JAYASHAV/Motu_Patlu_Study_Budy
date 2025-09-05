import React from 'react'

const ContactForm = () => {
    return (
        <form onSubmit={""} className='w-96 m-auto flex flex-col gap-10 my-12'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-xs text-gray-200 font-space-grotesk'>Name</label>
                <input className='bg-transparent border-b-1 text-sm py-0.5 px-2' type="text" name="name" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xs text-gray-200 font-space-grotesk'>Email</label>
                <input className='bg-transparent border-b-1 text-sm py-0.5 px-2' type="email" name="email" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xs text-gray-200 font-space-grotesk'>Message</label>
                <textarea className='bg-transparent border-b-1 text-sm py-0.5 px-2' type="email" name="email"></textarea>
            </div>
            <button type="submit" className='font-medium text-sm border-b-2 py-2 px-4 w-fit  border-[#A6BBCC] m-auto'>Submit Message</button>
        </form>
    )
}

export default ContactForm