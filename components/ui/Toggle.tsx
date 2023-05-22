'use client'

import { memo } from 'react'
import classNames from 'classnames'

function Toggle({ isActive, activate, deactivate }: Props) {
  function handleClick() {
    isActive ? deactivate() : activate()
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'flex h-[30px] w-[60px] cursor-pointer items-center rounded-[50px] bg-gray-700 px-[3px] dark:bg-white',
        isActive ? 'justify-end' : 'justify-start'
      )}
    >
      <div className='h-[26px] w-[26px] rounded-full bg-white dark:bg-gray-600' />
    </button>
  )
}

export default memo(Toggle)

interface Props {
  isActive: boolean
  activate: VoidFunction
  deactivate: VoidFunction
}
