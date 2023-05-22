import LocationForm from './LocationForm'

export default function Greeting({ title }: Props) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <article>
        <h1 className='text-center text-[30px] font-light text-gray-100'>
          {title}
        </h1>
      </article>
      <div className='mt-[14px] w-full px-[40px]'>
        <LocationForm initialFocus />
      </div>
    </div>
  )
}

interface Props {
  title: string
}
