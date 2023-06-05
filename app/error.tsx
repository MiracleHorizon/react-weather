'use client'

import WrongCredentials from '@components/WrongCredentials'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import type { ErrorPageProps } from '@app-types/ErrorPageProps'

export default function ErrorPage({ error }: ErrorPageProps) {
  if (error.message === WrongCredentialsException.getMessage()) {
    return <WrongCredentials />
  }

  return <h1>Error</h1>
}
