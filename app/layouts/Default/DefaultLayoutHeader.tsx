import { FC } from 'react'

export const DefaultLayoutHeader: FC<{ title: string }> = ({ title }) => (
  <header className='bg-gray-50 py-[20px]'>
    <h1 className='text-center text-[16px] font-bold'>{title}</h1>
  </header>
)
