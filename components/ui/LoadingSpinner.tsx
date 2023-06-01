import { twJoin, twMerge } from 'tailwind-merge'

export default function LoadingSpinner({ className }: Props) {
  return (
    <span
      className={twMerge(
        twJoin([
          'inline-block',
          'h-[48px]',
          'w-[48px]',
          'animate-spin',
          'rounded-full',
          'border-[4px]',
          'border-solid',
          'border-gray-300',
          'border-b-transparent'
        ]),
        className
      )}
    />
  )
}

interface Props {
  className?: string
}
