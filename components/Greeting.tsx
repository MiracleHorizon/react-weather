import LocationForm from './LocationForm'

export default function Greeting({ title }: Props) {
  return (
    <main className='flex h-full w-full items-center justify-center p-[24px]'>
      <div className='min-h-[150px] w-[500px] min-w-[200px] rounded-[32px] bg-slate-500 p-[24px]'>
        <article>
          <h1 className='text-center text-[26px] font-light text-gray-100'>
            {title}
          </h1>
        </article>
        <div className='mt-[10px] w-full px-[24px]'>
          <LocationForm initialFocus />
        </div>
      </div>
    </main>
  )
}

interface Props {
  title: string
}
