import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

import { GEOLOCATION_COOKIE_NAME } from '@constants/cookie'
import type { Geolocation } from '@models/Geolocation'

type State = Geolocation | null
type Error = GeolocationPositionError | null

export function useGeolocation() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [geolocation, setGeolocation] = useState<State>(null)
  const [geolocationError, setGeolocationError] = useState<Error>(null)

  function getCurrentPosition() {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }

  function handleSuccess({
    coords: { longitude, latitude }
  }: GeolocationPosition) {
    const geolocation: Geolocation = {
      lon: longitude,
      lat: latitude
    }

    Cookie.set(GEOLOCATION_COOKIE_NAME, JSON.stringify(geolocation))
    setGeolocation(geolocation)
    setIsLoading(false)
    router.refresh()
  }

  function handleError(error: GeolocationPositionError) {
    console.log(error)
    setGeolocationError(error)
    setIsLoading(false)
  }

  useEffect(() => {
    const geolocationCookie = Cookie.get(GEOLOCATION_COOKIE_NAME)
    if (geolocationCookie) {
      setGeolocation(JSON.parse(geolocationCookie))
    }
  }, [])

  return {
    isLoading,
    geolocation,
    geolocationError,
    getCurrentPosition
  }
}
