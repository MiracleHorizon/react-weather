import { twMerge } from 'tailwind-merge'

export default function Divider({ className }: Props) {
  return (
    <div
      className={twMerge(
        'my-[16px] h-[1px] w-full bg-gray-700 dark:bg-gray-100',
        className
      )}
    />
  )
}

interface Props {
  className?: string
}
