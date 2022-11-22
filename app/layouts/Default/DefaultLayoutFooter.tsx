import Link from 'next/link'

export const DefaultLayoutFooter = () => (
  <footer className='w-screen mt-auto'>
    <nav className='h-full flex items-center justify-between px-[32px] py-[24px] mobile:px-[18px]'>
      <div className='flex'>
        <div className='h-[24px] w-[24px] bg-gray-400 mr-[8px]' />
        <Link href='/' className='font-medium text-[17px] text-gray-400'>
          Home
        </Link>
      </div>
      <div className='flex'>
        <Link href='/forecast'>
          <div className='h-[24px] w-[24px] bg-gray-400'></div>
        </Link>
        <div className='ml-[16px]'>
          <div className='h-[24px] w-[24px] bg-gray-400'></div>
        </div>
      </div>
    </nav>
  </footer>
)
