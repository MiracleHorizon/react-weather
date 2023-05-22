import classNames from 'classnames'

export default function Divider({ className }: Props) {
  return (
    <div
      className={classNames(
        'mb-[16px] mt-[16px] h-[1px] w-[calc(550px-28px)] bg-gray-700 dark:bg-gray-100',
        className && className
      )}
    />
  )
}

interface Props {
  className?: string
}
