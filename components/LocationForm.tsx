'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { type FormEvent, useEffect, useRef } from 'react'

import { useInput } from '@hooks/useInput'
import { LOCATION_COOKIE_NAME } from '@constants/cookie'

export default function LocationForm({ initialFocus }: Props) {
  const { value, handleChange } = useInput('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Cookies.set(LOCATION_COOKIE_NAME, value)
    router.refresh()
    // TODO: revalidateTag?
  }

  useEffect(() => {
    initialFocus && inputRef.current?.focus()
  }, [initialFocus])

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={value}
        type='text'
        placeholder='Enter city'
        className='h-[44px] w-full rounded-[10px] px-[12px]'
        onChange={handleChange}
      />
    </form>
  )
}

interface Props {
  initialFocus?: boolean
}
