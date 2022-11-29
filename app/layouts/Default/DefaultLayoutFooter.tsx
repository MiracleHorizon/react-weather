import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'

import { CogSvg, HomeSvg } from 'components/ui/svg'

const NAVIGATION_OBJECTS = [
  { href: '/forecast', IconElement: <i className='wi wi-day-cloudy-gusts' /> },
  { href: '/settings', IconElement: <CogSvg /> },
]

export const DefaultLayoutFooter = () => {
  const { asPath } = useRouter()

  return (
    <footer className='w-screen mt-auto px-[26px]'>
      <nav className='flex items-center justify-between h-[70px]'>
        <div
          className={classNames(
            'text-[16px] ',
            asPath === '/'
              ? 'fill-gray-600 text-gray-600'
              : 'fill-gray-300 text-gray-300'
          )}
        >
          <Link href='/' className='flex items-center justify-center'>
            <HomeSvg />
            <span className='ml-[6px] mb-[4px]'>Home</span>
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          {NAVIGATION_OBJECTS.map(({ href, IconElement }, index) => (
            <Link
              key={href}
              href={href}
              className={classNames(
                asPath === href
                  ? 'text-gray-600 stroke-gray-600 fill-gray-600'
                  : 'text-gray-300 stroke-gray-300 fill-gray-300',
                { ['ml-[16px]']: index === NAVIGATION_OBJECTS.length - 1 }
              )}
            >
              {IconElement}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  )
}
