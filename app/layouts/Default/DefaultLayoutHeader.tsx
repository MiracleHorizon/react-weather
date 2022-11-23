import { FC } from 'react'

export const DefaultLayoutHeader: FC<{ title: string }> = ({ title }) => (
  <header className='py-[20px] bg-gray-100'>
    <h1 className='text-center text-[16px] font-bold'>{title}</h1>
  </header>
)
