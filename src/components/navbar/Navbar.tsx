import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { navLinks } from '../../constants/nav'
import Separator from '../separator'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const handleClick = useCallback((href: string) => {
    const element = document.getElementById(href)
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <motion.nav
      className="fixed z-50 flex w-full justify-center"
      initial={{ y: -50, opacity: 0, scaleX: '70%' }}
      animate={{ y: 0, opacity: 100, scaleX: '100%', transition: { duration: 0.75, ease: 'easeInOut' } }}
    >
      <ol className="my-8 hidden items-center space-x-8 lg:flex">
        {navLinks.map((link, idx) => {
          if (idx + 1 === navLinks.length) {
            return <NavbarItem key={link} onClick={() => handleClick(link)} name={link.toUpperCase()} />
          }

          return (
            <>
              <NavbarItem key={link} onClick={() => handleClick(link)} name={link.toUpperCase()} />
              <Separator />
            </>
          )
        })}
      </ol>
    </motion.nav>
  )
}

export default Navbar
