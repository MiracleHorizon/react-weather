'use client'

import Cookies from 'js-cookie'

import Greeting from '@components/Greeting'
import { LOCATION_COOKIE_NAME } from '@constants/cookie'
import { NotFoundLocationException } from '@entities/exceptions/NotFoundLocationException'
import type { ErrorPageProps } from '@app-types/ErrorPageProps'

export default function ErrorPage({ error }: ErrorPageProps) {
  if (error.message === NotFoundLocationException.getMessage()) {
    Cookies.remove(LOCATION_COOKIE_NAME)
    return <Greeting title='Location not found, try again' />
  }

  return (
    <main>
      <h1>Something went wrong</h1>
    </main>
  )
}
