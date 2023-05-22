import { type ChangeEvent, useState } from 'react'

export function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function handleReset() {
    setValue(defaultValue)
  }

  function handleClear() {
    setValue('')
  }

  return {
    value,
    handleChange,
    handleReset,
    handleClear
  }
}
