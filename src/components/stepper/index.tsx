import { useState } from 'react'
import Step from './Step'
import StepEmails from './steps/StepEmails'
import StepNames from './steps/StepNames'
import StepSubmit from './steps/StepSubmit'

interface StepperProps {}

const Stepper: React.FC<StepperProps> = ({}) => {
  const [step, setStep] = useState(1)

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-[#f0e9e0]">
      <div className="flex justify-evenly rounded p-8">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
      </div>
      <StepNames
        currentStep={step}
        className={step === 1 ? '' : 'hidden'}
        onBack={() => setStep(step < 2 ? step : step - 1)}
        onNext={() => setStep(step > 3 ? step : step + 1)}
      />
      <StepEmails
        currentStep={step}
        className={step === 2 ? '' : 'hidden'}
        onBack={() => setStep(step < 2 ? step : step - 1)}
        onNext={() => setStep(step > 3 ? step : step + 1)}
      />
      <StepSubmit
        currentStep={step}
        className={step === 3 ? '' : 'hidden'}
        onBack={() => setStep(step < 2 ? step : step - 1)}
        onNext={() => setStep(step > 3 ? step : step + 1)}
      />
    </div>
  )
}

export default Stepper
