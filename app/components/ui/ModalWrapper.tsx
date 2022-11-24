import { createPortal } from 'react-dom'
import { FC } from 'react'

export const ModalWrapper: FC<Props> = ({ children, inset }) =>
  createPortal(
    <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-[1000]'>
      {inset && (
        <div className='absolute inset-0 z-[-1] bg-[rgba(15, 15, 15, 0.8)]' />
      )}
      {children}
    </div>,
    document.getElementById('__next') as HTMLDivElement
  )

interface Props {
  children: JSX.Element
  inset?: boolean
}
