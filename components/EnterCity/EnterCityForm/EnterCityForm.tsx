import dynamic from 'next/dynamic'
import { type FormEvent, useEffect, useRef } from 'react'

import { useInput } from '@hooks/useInput'
import styles from './EnterCityForm.module.css'

const EnterCitySubmit = dynamic(() => import('./EnterCitySubmit'), {
  loading: () => <div className='h-[45px] w-[45px] bg-gray-600' />,
  ssr: false
})

export default function EnterCityForm({
  handleSubmitForm,
  defaultValue
}: Props) {
  const { value, handleChange, handleClear } = useInput(defaultValue ?? '')
  const inputRef = useRef<HTMLInputElement>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await handleSubmitForm(value)
    handleClear()
  }

  function handleBlur(e: KeyboardEvent) {
    if (e.key === 'Escape' && inputRef.current) {
      inputRef.current.blur()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleBlur)

    return () => {
      window.removeEventListener('keydown', handleBlur)
    }
  }, [])

  return (
    <form onSubmit={onSubmit} className='flex h-full w-full'>
      <input
        value={value}
        ref={inputRef}
        minLength={1}
        maxLength={40}
        type='text'
        placeholder='Enter city name'
        className={`h-full flex-auto border-b-[1.5px] border-l-[1.5px] border-t-[1.5px] bg-gray-100 pl-[50px] pr-[5px] text-center text-[16px] focus:border-solid focus:border-gray-600 ${styles.input}`}
        onChange={handleChange}
      />
      <EnterCitySubmit />
    </form>
  )
}

interface Props {
  handleSubmitForm: (value: string) => Promise<void>
  defaultValue?: string
}
