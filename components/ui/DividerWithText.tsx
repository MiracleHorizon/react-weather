export default function DividerWithText({ text }: Props) {
  const lineClassname = 'h-[2px] w-[90px] bg-gray-200'

  return (
    <div className='my-[13px] flex h-[15px] items-center justify-center'>
      <div className={lineClassname} />
      <span className='mx-[13px] text-[16px] text-gray-600 dark:text-gray-100'>
        {text}
      </span>
      <div className={lineClassname} />
    </div>
  )
}

interface Props {
  text: string
}
