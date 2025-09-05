import React from 'react'
import { NavLink } from 'react-router'
import githubLogo from '/github-logo.svg'

const Header = () => {
    return (
        <header id='header' className='flex justify-between items-center px-12 py-4'>
            <span className='font-inter w-6'><span className='font-bold w-6'>Deepesh</span>gupta</span>
            <nav className='flex gap-8 font-poppins text-sm'>
                <NavLink to={'/#home'}>Home</NavLink>
                <NavLink to={'/#about'}>About</NavLink>
                <NavLink to={'/#work'}>Work</NavLink>
                <NavLink to={'/#contact'}>Contact</NavLink>
            </nav>
            <img src={githubLogo} alt="" className='w-8' />
        </header>
    )
}

export default Header