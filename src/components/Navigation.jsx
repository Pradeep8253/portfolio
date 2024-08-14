import React,{useEffect} from 'react'
import {FaHome, FaUserAlt, FaBriefcase, FaEnvelopeOpen, FaRegLightbulb} from 'react-icons/fa'
import {ImBlog} from 'react-icons/im'
import {BsMoon} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'


function Navigation({darkMode, setDarkMode}) {
    const {pathname} = useLocation();
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navlink')
        const activeNav = document.querySelector('.active')
        activeNav && activeNav.classList.remove('active') 
        navLinks.forEach(navlink => {
            if (navlink.pathname === pathname) {
                navlink.classList.add('active')
            }
        });
        return () => {
            
        }
    }, [pathname])
    return (
        <div className='fixed w-full h-[10vh] lg:w-[10%] lg:h-[100vh] dark:bg-gray bg-white lg:dark:bg-transparent bottom-0 right-0 lg:top-0 flex flex-row lg:flex-col items-center justify-evenly lg:justify-center lg:gap-3 nav__wrapper'>
            <div onClick={()=>setDarkMode(!darkMode)} className='p-4 text-lg text-white rounded-full bg-gray hoverable dark-mode-toggle'>{darkMode ?<FaRegLightbulb/>:<BsMoon/>}</div>
            <div className=''><Link className='navlink hoverable' to='/'><span className='inline-block p-4 text-lg rounded-full'><FaHome/></span><span className='navlink-label'>HOME</span></Link></div>
            <div className=''><Link className='navlink hoverable' to='/about'><span className='inline-block p-4 text-lg rounded-full'><FaUserAlt/></span><span className='navlink-label'>ABOUT</span></Link></div>
            <div className=''><Link className='navlink hoverable' to='/portfolio'><span className='inline-block p-4 text-lg rounded-full'><FaBriefcase/></span><span className='navlink-label'>PORTFOLIO</span></Link></div>
            <div className=''><Link className='navlink hoverable' to='/contact'><span className='inline-block p-4 text-lg rounded-full'><FaEnvelopeOpen/></span><span className='navlink-label'>CONTACT</span></Link></div>
            {/* <div className=''><Link className='navlink hoverable' to='/blog'><span className='inline-block p-4 text-lg rounded-full'><ImBlog/></span><span className='navlink-label'>BLOG</span></Link></div> */}
        </div>
    )
}

export default Navigation
