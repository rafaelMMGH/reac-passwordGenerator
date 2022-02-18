import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { AtSymbolIcon } from '@heroicons/react/solid';

import "./switch.css";

const SwitchComponent = ({
  label
}) => { 
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group>
      <div className="flex items-center">
        <AtSymbolIcon className='h-5 w-5 text-blue-500' />

        {label && (
          <Switch.Label className="mr-4">{label}</Switch.Label>
        ) }
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}

export default SwitchComponent;
