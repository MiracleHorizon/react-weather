import { twJoin, twMerge } from 'tailwind-merge'

export default function WeatherIconWidget({ iconClassName }: Props) {
  return (
    <i
      className={twMerge(
        twJoin([
          'wi',
          'text-[44px]',
          'text-gray-600',
          'dark:text-gray-200',
          '[440px-max]:text-[32px]',
          '[550px-441px]:text-[36px]'
        ]),
        iconClassName
      )}
    />
  )
}

interface Props {
  iconClassName: string
}
