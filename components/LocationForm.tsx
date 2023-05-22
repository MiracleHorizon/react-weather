'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { type FormEvent, useEffect, useRef } from 'react'

import { useInput } from '@hooks/useInput'
import { CITY_COOKIE_NAME } from '@constants/cookie'

export default function LocationForm({ defaultValue, initialFocus }: Props) {
  const { value, handleChange } = useInput(defaultValue ?? '')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Cookies.set(CITY_COOKIE_NAME, value)
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
        className='h-[44px] w-full rounded-[10px] px-[12px] text-[18px]'
        onChange={handleChange}
      />
    </form>
  )
}

interface Props {
  defaultValue?: string
  initialFocus?: boolean
}
