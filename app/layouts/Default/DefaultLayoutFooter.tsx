import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import { CogSvg, HomeSvg } from 'components/ui/svg'

const navigationObjects = [
  { path: '/forecast', icon: <i className='wi wi-day-cloudy' /> },
  { path: '/settings', icon: <CogSvg /> },
]

export const DefaultLayoutFooter = () => {
  const { asPath } = useRouter()

  return (
    <footer className='w-screen mt-auto'>
      <nav className='h-full flex items-center justify-between px-[32px] pt-[24px] pb-[28px] mobile:px-[18px]'>
        <Link
          href='/'
          className={classNames(
            'flex items-center justify-center font-medium text-[16px] text-gray-400',
            asPath === '/'
              ? 'fill-gray-600 text-gray-600'
              : 'fill-gray-300 text-gray-300'
          )}
        >
          <HomeSvg />
          <span className='ml-[4px]'>Home</span>
        </Link>
        <div className='flex'>
          {navigationObjects.map(({ path, icon }, index) => (
            <Link
              key={path}
              href={path}
              className={classNames(
                asPath !== path ? 'text-gray-300' : 'text-gray-600',
                asPath !== path ? 'stroke-gray-300' : 'stroke-gray-600',
                asPath !== path ? 'fill-gray-300' : 'fill-gray-600',
                {
                  ['ml-[16px]']: index === navigationObjects.length - 1,
                }
              )}
            >
              {icon}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  )
}
