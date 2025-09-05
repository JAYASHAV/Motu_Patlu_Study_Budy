import React from 'react'
import toast, {Toaster} from 'react-hot-toast';

const ContactForm = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_THREE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success('Message is sent successfully!!')
    } else {
        toast.error('Fail to send your message. Please try again later.')
    }
  };

    return (
        <form onSubmit={onSubmit} className='w-96 m-auto flex flex-col gap-10 my-12'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-xs text-gray-200 font-space-grotesk'>Name</label>
                <input className='bg-transparent border-b-1 text-sm py-0.5 px-2' type="text" name="name" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xs text-gray-200 font-space-grotesk'>Email</label>
                <input className='bg-transparent border-b-1 text-sm py-0.5 px-2' type="email" name="email" />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-xs text-gray-200 font-space-grotesk'>Message</label>
                <textarea className='bg-transparent border-b-1 text-sm py-0.5 px-2' name="message"></textarea>
            </div>
            <button type="submit" className='font-medium text-sm border-b-2 py-2 px-4 w-fit  border-[#A6BBCC] m-auto'>Submit Message</button>
            <Toaster/>
        </form>
    )
}

export default ContactForm