'use client'

import Cookies from 'js-cookie'

import Greeting from '@components/Greeting'
import { CITY_COOKIE_NAME } from '@constants/cookie'
import { NotFoundCityException } from '@entities/exceptions/NotFoundCityException'
import type { ErrorPageProps } from '@app-types/ErrorPageProps'

export default function ErrorPage({ error }: ErrorPageProps) {
  if (error.message === NotFoundCityException.getMessage()) {
    Cookies.remove(CITY_COOKIE_NAME)
    return <Greeting title='City not found, try again' />
  }

  return (
    <main>
      <h1>Something went wrong</h1>
    </main>
  )
}
