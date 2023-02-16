import { forwardRef, useCallback, useRef, useState } from 'react'
import guestList from '../../../constants/guestlist'
import { useRsvpStore } from '../../../stores/rsvp'
import classNames from '../../../utils/styling'
import Toggle from '../../toggle'

interface StepNamesProps extends React.HTMLAttributes<HTMLInputElement> {
  currentStep: number
  onBack: () => void
  onNext: () => void
}

// check if all registered names are included in the array guesList
const lowercaseGuestlist = guestList.map((name) => name.toLowerCase())

const StepNames = forwardRef<HTMLInputElement, StepNamesProps>(({ currentStep, onBack, onNext, className }, ref) => {
  const [hasSecondPerson, setHasSecondPerson] = useState(false)
  const [setName, getName] = useRsvpStore((state) => [state.setName, state.getName])
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const firstNameRef = useRef<HTMLInputElement>(null)
  const secondNameRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  const isAllowedPlusOne = lowercaseGuestlist.includes(firstName.toLowerCase())

  const handleToggle = useCallback(() => {
    setHasSecondPerson(!hasSecondPerson)
  }, [hasSecondPerson])

  const handleNextStep = useCallback(() => {
    const registeredNames = [firstName, secondName].filter(Boolean)

    if (registeredNames.length === 0) {
      setError('Vul een naam in')
      return
    }

    const isAllNamesIncluded = registeredNames.every((name) =>
      lowercaseGuestlist.includes((name as string).toLowerCase())
    )

    if (!isAllNamesIncluded) {
      setError('Een van de namen is niet bekend bij ons')
      return
    }

    setName(registeredNames as string[])
    onNext()
  }, [firstName, secondName])

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <div className="flex flex-col space-y-4 px-8 text-[#4a4d48]">
        <h3>Begin met het invullen van je naam. Dit is niet zo moeilijk als het lijkt, maar wel belangrijk!</h3>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[#747871]">
            Voor- en achternaam
          </label>
          <input
            id="name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className={classNames(
              !!error
                ? 'border-red-500 text-red-500 hover:ring-red-500 focus:ring-red-500 active:ring-red-500'
                : 'border-[#747871] text-[#4a4d48] hover:ring-[#747871] focus:ring-[#747871] active:ring-[#747871]',
              'rounded-lg border px-4 py-2 outline-none hover:ring-1 hover:ring-offset-1 focus:ring-2 active:ring-2'
            )}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {hasSecondPerson && (
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#747871]">
              Voor- en achternaam
            </label>
            <input
              id="name"
              onChange={(e) => setSecondName(e.target.value)}
              type="text"
              className={classNames(
                !!error
                  ? 'border-red-500 text-red-500 hover:ring-red-500 focus:ring-red-500 active:ring-red-500'
                  : 'border-[#747871] text-[#4a4d48] hover:ring-[#747871] focus:ring-[#747871] active:ring-[#747871]',
                'rounded-lg border px-4 py-2 outline-none hover:ring-1 hover:ring-offset-1 focus:ring-2 active:ring-2'
              )}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}
        {isAllowedPlusOne && <Toggle label="Tweede persoon" onChange={handleToggle} />}
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button
            onClick={onBack}
            className={classNames(
              currentStep === 1 && 'pointer-events-none',
              'rounded px-2 py-1 text-[#747871] hover:text-[#4a4d48]'
            )}
          >
            Terug
          </button>
          <button
            onClick={handleNextStep}
            className="bg flex items-center justify-center rounded-full bg-[#747871] py-2 px-6 font-medium tracking-tight text-white hover:bg-[#4a4d48] active:bg-[#4a4d48]"
          >
            {currentStep > 3 ? 'Voltooien' : 'Volgende'}
          </button>
        </div>
      </div>
    </div>
  )
})

StepNames.displayName = 'Step names'

export default StepNames
