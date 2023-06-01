'use client'

import EnterCityForm from './EnterCityForm'
import { setCityCookie } from '@lib/cookies/city'

export default function EnterCity() {
  async function handleSubmitForm(value: string) {
    await setCityCookie(value)
  }

  return (
    <div className='flex h-[45px] w-full items-start justify-center'>
      <EnterCityForm handleSubmitForm={handleSubmitForm} />
    </div>
  )
}
