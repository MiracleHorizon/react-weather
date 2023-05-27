export default function WeatherDetailsItem({
  title,
  value,
  postfix,
  iconClassName
}: Props) {
  return (
    <li
      key={title}
      className='w-full text-gray-700 dark:text-gray-100 [&:not(&:last-of-type)]:mb-[2px]'
    >
      <article className='flex w-full justify-between text-[16px]'>
        <span className='[440px-max]:text-[14px]'>{title}</span>
        <span className='[440px-max]:text-[13px]'>
          {value}
          {postfix}
          <i className={`wi ml-[8px] text-[20px] wi-${iconClassName}`} />
        </span>
      </article>
    </li>
  )
}

interface Props {
  title: string
  value: number | string
  postfix: string
  iconClassName: string
}
