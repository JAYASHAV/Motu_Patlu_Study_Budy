import React from 'react'

const Login = ({setStatus, setMessage}) => {

    async function handleLogin(formData) {
        let data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        let result = await fetch("http://localhost:3000/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        let response = await result.json()
        setStatus(result.status == 200)
        setMessage(response.message)
    }

    return (
        <>
            <div className='border-2 rounded-2xl p-1'>
                <h2 className='text-xl font-semibold text-center m-1'>LOGIN</h2>
                <form action={handleLogin} className='flex flex-col gap-2 w-64'>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-xs text-gray-200 pl-3'>Email</label>
                        <input type="email" name='email' required placeholder='example@gmail.com' className='bg-white border-2 border-gray-500 rounded-xl px-2 py-1 text-sm text-black'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-xs text-gray-200 pl-3'>Password:</label>
                        <input placeholder='******' type="password" name='password' required className='bg-white border-2 border-gray-500 rounded-xl px-2 py-1 text-sm text-black'/>
                    </div>
                    <button type='submit' className='my-2 w-fit mx-auto'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login