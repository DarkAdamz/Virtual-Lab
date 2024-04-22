import { Menu,X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
    //Initializing the useState
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);//For array destructuring use square brackets

    //Function to toogle Navbar
    const toogleNavbar = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
  return (
<nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
<div className='container px-4 mx-auto relative text-sm'>
<div className='flex justify-between items-center'>
<div className='flex item-center flex-shrink-0'>
    <img 
    src={logo}
    alt='logo'
    height={10}
    width={10}
    className='mr-2'
    />
    <span className='text-xl tracking-tight'>VirtualR</span>
</div>
    <ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item,index) =>(
            // For map function use normal brackets
            <li key={index}>
                <a href={item.href}>
                    {item.label}
                </a>
            </li>
        ))}
    </ul>
    <div className='hidden lg:flex justify-center space-x-12 items-center'>
        <a href='#' className='py-2 px-3 border rounded-md'>Sign In</a>
        <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create Account</a>
    </div>
<div className='lg:hidden md:flex flex-col justify-end'>
    <button onClick={toogleNavbar}>
        {mobileMenuOpen ? <X/> : <Menu/>}
    </button>
</div>
</div>
{mobileMenuOpen && (
    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
        <ul>
            {navItems.map((item,index) => (
                <li key={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
        <div className='flex space-x-6'>
            <a href='#' className='py-2 px-3 border rounded-md'>Sign In </a>
            <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'> Create an account</a>
        </div>
    </div>
)}
</div>
</nav>
)
}

export default Navbar