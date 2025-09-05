import React from 'react'
import facebookLogo from "/facebook-logo.png"
import githubLogo from "/github-logo.svg"
import instaLogo from "/insta-logo.svg"
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer id="footer" className='flex justify-between items-center px-12 py-4'>
            <span className='font-inter w-6'><span className='font-bold w-6'>Deepesh</span>gupta</span>
            <nav className='flex gap-8'>
                <NavLink to={'#'}><img src={facebookLogo} alt="" className='w-8'/></NavLink>
                <NavLink to={'#'}><img src={githubLogo} alt="" className='w-8'/></NavLink>
                <NavLink to={'#'}><img src={instaLogo} alt="" className='w-8'/></NavLink>
            </nav>

        </footer>
    )
}

export default Footer