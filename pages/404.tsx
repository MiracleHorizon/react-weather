import Link from 'next/link'

const NotFoundPage = () => (
  <div className='w-screen h-screen flex items-center justify-center'>
    <div className='h-max flex flex-col items-center justify-center'>
      <h1 className='inline-block h-[105px] text-[80px] text-gray-800'>404</h1>
      <h2 className='text-gray-700'>Sorry, page is not found.</h2>
      <Link href='/'>
        <button className='uppercase mt-[14px] text-[14px] px-[24px] py-[6px] rounded-[12px] bg-gray-800 text-gray-50'>
          Go home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
