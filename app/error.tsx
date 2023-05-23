'use client'

import Cookies from 'js-cookie'

import Greeting from '@components/Greeting'
import { CITY_COOKIE_NAME } from '@constants/cookie'
import { NotFoundCityException } from '@exceptions/NotFoundCityException'
import { NoCityCookieException } from '@exceptions/NoCityCookieException'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import type { ErrorPageProps } from '@app-types/ErrorPageProps'

export default function ErrorPage({ error }: ErrorPageProps) {
  if (error.message === NoCityCookieException.getMessage()) {
    return <Greeting title='Hello! Please, enter city' />
  }

  if (error.message === NotFoundCityException.getMessage()) {
    Cookies.remove(CITY_COOKIE_NAME)
    return <Greeting title='City not found, try again' />
  }

  if (error.message === WrongCredentialsException.getMessage()) {
    return (
      <main>
        <h1>WRONG CREDENTIALS</h1>
      </main>
    )
  }

  return (
    <main>
      <h1>Something went wrong</h1>
    </main>
  )
}
