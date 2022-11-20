import { FC } from 'react'
import { DefaultLayoutFooter } from './DefaultLayoutFooter'

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className='w-screen min-h-screen flex flex-col bg-gray-900'>
      {children}
      <DefaultLayoutFooter />
    </div>
  )
}

interface Props {
  children: JSX.Element
}
