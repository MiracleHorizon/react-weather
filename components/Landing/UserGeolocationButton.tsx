'use client'

import { twJoin } from 'tailwind-merge'
import GlobeEuropeAfricaIcon from '@heroicons/react/24/solid/GlobeEuropeAfricaIcon'

import LoadingSpinner from '@ui/LoadingSpinner'
import { useGeolocation } from '@hooks/useGeolocation'

export default function UserGeolocationButton() {
  const { isLoading, getCurrentPosition } = useGeolocation()

  return (
    <button
      onClick={getCurrentPosition}
      className={twJoin([
        'flex',
        'h-[45px]',
        'w-full',
        'items-center',
        'justify-center',
        'bg-gray-600',
        'hover:bg-gray-500',
        'active:bg-gray-700'
      ])}
    >
      <div className='relative flex items-center text-[16px] text-white'>
        <span className='mr-[8px] flex h-[24px] w-[24px] items-center justify-center'>
          {isLoading ? (
            <LoadingSpinner className='h-[20px] w-[20px] border-[2px]' />
          ) : (
            <GlobeEuropeAfricaIcon className='mb-[2px] h-full w-full' />
          )}
        </span>
        <span>Use device location</span>
      </div>
    </button>
  )
}
