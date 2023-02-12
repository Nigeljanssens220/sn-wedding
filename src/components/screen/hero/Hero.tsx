import { motion } from 'framer-motion'
import { useCallback } from 'react'
import ChevronDown from '../../iconography/ChevronDown'

export interface Props {
  image: string
}

const Hero: React.FC<Props> = ({ image }) => {
  const handleClick = useCallback((href: string) => {
    const element = document.getElementById(href)
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <motion.section
      id="home"
      className="relative h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="hero" className="h-full max-h-screen w-full object-cover" />
      </div>
      <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50">
        <ChevronDown
          className="absolute bottom-8 !h-8 !w-8 animate-bounce text-white"
          onClick={() => handleClick('rsvp')}
        />
      </div>
    </motion.section>
  )
}

export default Hero
