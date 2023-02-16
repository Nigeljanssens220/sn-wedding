interface IconProps extends React.HTMLAttributes<SVGSVGElement> {}
import { motion } from 'framer-motion'
import classNames from '../../utils/styling'

const CheckCircle: React.FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classNames(className, 'h-6 w-6')}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, transition: { duration: 0.4 } }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )
}

export default CheckCircle
