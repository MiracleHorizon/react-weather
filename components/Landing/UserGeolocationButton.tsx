'use client'

import { useGeolocation } from '@hooks/useGeolocation'

export default function UserGeolocationButton() {
  const { isLoading, getCurrentPosition } = useGeolocation()

  return (
    <button
      onClick={getCurrentPosition}
      className='flex h-[45px] w-full items-center justify-center bg-gray-600 hover:bg-gray-500 active:bg-gray-700'
    >
      {isLoading && <span>Loading...</span>}
      <span className='text-[16px] text-white'>Use device location</span>
    </button>
  )
}
