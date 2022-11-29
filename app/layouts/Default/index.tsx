import { FC } from 'react'

import { DefaultLayoutFooter } from './DefaultLayoutFooter'
import { LayoutProps } from 'layouts/Layout.types'

export const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <div className='w-screen h-screen flex flex-col items-start'>
    {children}
    <DefaultLayoutFooter />
  </div>
)
