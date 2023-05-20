import { FC } from 'react'
import { TailSpin } from 'react-loader-spinner'

import { DefaultLayoutFooter } from './DefaultLayoutFooter'
import { useChangeRoute } from 'hooks/useChangeRoute'
import { LayoutProps } from 'layouts/Layout.types'
import { NextHead } from 'components/NextHead'

export const DefaultLayout: FC<LayoutProps> = ({ children, ...seoParams }) => (
  <div className='w-screen h-screen flex flex-col items-start'>
    <NextHead {...seoParams} />
    {useChangeRoute() ? (
      <div className='w-screen h-screen flex items-center justify-center'>
        <TailSpin
          height='60'
          width='60'
          color='#262626'
          radius='1'
          visible={true}
        />
      </div>
    ) : (
      children
    )}
    <DefaultLayoutFooter />
  </div>
)
