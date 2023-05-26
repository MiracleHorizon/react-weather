export default function SunsetSvg({ rootClassName, pathClassName }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 64 64'
      className={rootClassName}
    >
      <path
        d='m22.1,37.27l-2.83,2.83-7.07-7.07,2.83-2.83,7.07,7.07Zm-16.1,14.73h10v-4H6v4Zm26-14c-6.63,0-12,5.37-12,12v2h24v-2c0-6.63-5.37-12-12-12Zm16,10v4h10v-4h-10Zm.97-17.8l-7.07,7.07,2.83,2.83,7.07-7.07-2.83-2.83Zm-3.97-9.37l-2.83-2.83-8.17,8.17V8h-4v18.17l-8.17-8.17-2.83,2.83,13,13,13-13Z'
        className={pathClassName}
      />
    </svg>
  )
}

interface Props {
  rootClassName?: string
  pathClassName?: string
}
