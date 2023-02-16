import { Switch } from '@headlessui/react'
import { useState } from 'react'

interface ToggleProps {
  label: string
  onChange: (isRanked: boolean) => void
}

const Toggle: React.FC<ToggleProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex flex-col">
      <label htmlFor="secondPerson" className="mr-2 font-bold text-[#4a4d48]">
        {label}
      </label>
      <Switch
        id="secondPerson"
        checked={checked}
        onChange={(value: boolean) => (onChange(value), setChecked((prev) => !prev))}
        className={`${
          checked ? 'bg-[#747871]' : 'bg-gray-400'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}

export default Toggle
