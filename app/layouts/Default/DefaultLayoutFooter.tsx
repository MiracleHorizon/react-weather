import Link from 'next/link'

import { NAVIGATION_PATHS } from 'constants/navigation'

export const DefaultLayoutFooter = () => (
  <footer className='w-screen h-[60px] mt-auto'>
    <nav className='h-full'>
      <ul className='h-full flex items-center justify-around'>
        {NAVIGATION_PATHS.map(path => (
          <li key={path} className='h-[54px] w-[23%] bg-red-200'>
            <Link href={path} className='w-full h-full block' />
          </li>
        ))}
      </ul>
    </nav>
  </footer>
)
