import { FC } from 'react'

import { DefaultLayoutHeader } from './DefaultLayoutHeader'
import { DefaultLayoutFooter } from './DefaultLayoutFooter'

export const DefaultLayout: FC<Props> = ({ children, title }) => (
  <div className='w-screen h-screen flex flex-col'>
    <DefaultLayoutHeader title={title} />
    {children}
    <DefaultLayoutFooter />
  </div>
)

interface Props {
  children: JSX.Element
  title: string
}
