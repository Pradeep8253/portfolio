'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelopeOpen, FaRegLightbulb } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'

export default function Navigation({ darkMode, setDarkMode }) {
  const pathname = usePathname()

  useEffect(() => {
    const navLinks = document.querySelectorAll('.navlink')
    const activeNav = document.querySelector('.navlink.active')
    if (activeNav) activeNav.classList.remove('active')
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === pathname) link.classList.add('active')
    })
  }, [pathname])

  return (
    <div className="fixed w-full h-[10vh] lg:w-[10%] lg:h-[100vh] dark:bg-gray bg-white lg:dark:bg-transparent bottom-0 right-0 lg:top-0 flex flex-row lg:flex-col items-center justify-evenly lg:justify-center lg:gap-3 nav__wrapper">
      <div onClick={() => setDarkMode(!darkMode)} className="p-4 text-lg text-white rounded-full bg-gray hoverable dark-mode-toggle">
        {darkMode ? <FaRegLightbulb /> : <BsMoon />}
      </div>
      <div><Link className="navlink hoverable" href="/"><span className="inline-block p-4 text-lg rounded-full"><FaHome /></span><span className="navlink-label">HOME</span></Link></div>
      <div><Link className="navlink hoverable" href="/about"><span className="inline-block p-4 text-lg rounded-full"><FaUserAlt /></span><span className="navlink-label">ABOUT</span></Link></div>
      <div><Link className="navlink hoverable" href="/portfolio"><span className="inline-block p-4 text-lg rounded-full"><FaBriefcase /></span><span className="navlink-label">PORTFOLIO</span></Link></div>
      <div><Link className="navlink hoverable" href="/contact"><span className="inline-block p-4 text-lg rounded-full"><FaEnvelopeOpen /></span><span className="navlink-label">CONTACT</span></Link></div>
    </div>
  )
}
