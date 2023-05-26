import classNames from 'classnames'

export default function Divider({ className }: Props) {
  return (
    <div
      className={classNames(
        'my-[16px] h-[1px] w-full bg-gray-700 dark:bg-gray-100',
        className && className
      )}
    />
  )
}

interface Props {
  className?: string
}
