"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex justify-between items-center px-4 py-2'>
      <h1 className='text-xl font-bold'>Online Store</h1>
      <ul className='flex gap-2'>
        <Link className={`px-2 items-center flex w-fit text-sm ${ pathname=='/'? "font-medium border rounded-full border-white text-white" : "text-gray-200"}`} href="/"><li>Home</li></Link>
        <Link className={`px-2 items-center flex w-fit text-sm ${ pathname=='/chat-area'? "font-medium border rounded-full border-white text-white" : "text-gray-200"}`} href="/chat-area"><li>Chat Area</li></Link>
      </ul>
      <div className='flex gap-2'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="bg-[#9447ff] text-white rounded-full font-medium text-xs sm:text-base h-8 sm:h-10 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-xs sm:text-base h-8 sm:h-10 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
  )
}

export default NavBar