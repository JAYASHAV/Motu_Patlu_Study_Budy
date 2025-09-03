import React from 'react'

const Signup = ({setMessage}) => {
  async function handleSignup(formData) {
        let data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        let result = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        let response = await result.json()
        setMessage(response.message)
    }

    return (
        <>
            <div className='border-2 rounded-2xl p-1'>
                <h2 className='text-xl font-semibold text-center m-1'>SIGN UP</h2>
                <form action={handleSignup} className='flex flex-col gap-2 w-64'>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-xs text-gray-200 pl-3'>Email</label>
                        <input type="email" name='email' required placeholder='example@gmail.com' className='bg-white border-2 border-gray-500 rounded-xl px-2 py-1 text-sm text-black'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-xs text-gray-200 pl-3'>Password:</label>
                        <input placeholder='******' type="password" name='password' required className='bg-white border-2 border-gray-500 rounded-xl px-2 py-1 text-sm text-black'/>
                    </div>
                    <button type='submit' className='my-2 w-fit mx-auto'>SIGNUP</button>
                </form>
            </div>
        </>
    )
}

export default Signup