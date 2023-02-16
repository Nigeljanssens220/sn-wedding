import { motion } from 'framer-motion'
import CheckCircle from '../iconography/CheckCircle'

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number
  currentStep: number
}

const Step: React.FC<StepProps> = ({ step, currentStep }) => {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete'

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut',
        }}
        className="absolute inset-0 rounded-full bg-[#C28D6F]"
      ></motion.div>
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: 'var(--white)',
            borderColor: 'white',
          },
          active: {
            backgroundColor: 'var(--white)',
            borderColor: 'white',
          },
          complete: {
            backgroundColor: 'var(--blue-500)',
            borderColor: 'white',
          },
        }}
        transition={{ duration: 0.3 }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === 'complete' ? (
            <CheckCircle className="h-6 w-6 text-white" />
          ) : (
            <span className="text-white">{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Step
