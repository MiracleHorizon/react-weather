const AUTHOR_GITHUB_URL: string = 'https://github.com/MiracleHorizon'

export default function WrongCredentials() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <article className='flex flex-col items-center justify-center text-center'>
        <p className='my-[12px] text-[21px] text-gray-700 dark:text-gray-100'>
          An internal error has occurred.
          <br />
          If you don't mind, please let us know
        </p>
      </article>
      <button className='mt-[4px] flex max-w-max items-center justify-center rounded-[10px] bg-gray-300'>
        <a
          href={AUTHOR_GITHUB_URL}
          target='_blank'
          rel='noreferrer'
          className='block h-full w-full px-[12px] py-[6px] text-[17px]'
        >
          Contact
        </a>
      </button>
    </div>
  )
}
