import { forwardRef, useRef } from 'react'
import { useRsvpStore } from '../../../stores/rsvp'
import classNames from '../../../utils/styling'

interface StepEmailProps extends React.HTMLAttributes<HTMLInputElement> {
  currentStep: number
  onBack?: () => void
  onNext?: () => void
}

const StepEmails = forwardRef<HTMLInputElement, StepEmailProps>(({ currentStep, onBack, onNext, className }, ref) => {
  const [getName, setEmail] = useRsvpStore((state) => [state.getName, state.setEmail])
  const firstPersonRef = useRef<HTMLInputElement>(null)
  const secondPersonRef = useRef<HTMLInputElement>(null)

  const names = getName()

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <div className="flex flex-col space-y-4 border-black p-8">
        <h3>Begin met het invullen van je naam. Dit is niet zo moeilijk als het lijkt, maar wel belangrijk!</h3>
        <div className="flex flex-col">
          {names.map((name, index) => {
            return (
              <>
                <label htmlFor={name} className="text-[#747871]">
                  Email van {name}
                </label>
                <input
                  id={name}
                  ref={firstPersonRef}
                  type="text"
                  className="rounded-lg border border-[#747871] px-4 py-2 outline-none hover:ring-1 hover:ring-[#747871] hover:ring-offset-1 focus:ring-2 focus:ring-[#747871] active:ring-2 active:ring-[#747871]"
                />
              </>
            )
          })}
        </div>
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button onClick={onBack} className="rounded px-2 py-1 text-[#747871] hover:text-[#4a4d48]">
            Terug
          </button>
          <button
            onClick={onNext}
            className="bg flex items-center justify-center rounded-full bg-[#747871] py-2 px-6 font-medium tracking-tight text-white hover:bg-[#4a4d48] active:bg-[#4a4d48]"
          >
            {currentStep > 3 ? 'Voltooien' : 'Volgende'}
          </button>
        </div>
      </div>
    </div>
  )
})

StepEmails.displayName = 'Step emails'

export default StepEmails
