import { useCallback } from 'react'
import classNames from '../../utils/styling'

interface IconProps {
  className: string
  href: string
}

const ChevronDown: React.FC<IconProps> = ({ className, href }) => {
  const handleClick = useCallback(() => {
    const element = document.getElementById(href)
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [href])

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={classNames(className, 'h-6 w-6')}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>
  )
}

export default ChevronDown
