import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { ModalWrapper } from '../ModalWrapper'
import { DropdownItem } from './DropdownItem'
import { ArrowDownSvg } from 'components/ui/svg'

export const Dropdown = <T,>({
  items,
  defaultItem,
  setFunction,
  afterClose,
}: Props<T>) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultItem)

  const ref = useRef<HTMLDivElement>(null)
  const ulRef = useRef<HTMLUListElement>(null)

  // const rect = useMemo(() => {
  //   return ref.current?.getBoundingClientRect()
  // }, [])

  const toggleOpen = () => setOpen(!isOpen)

  const handleClose = () => setOpen(false)

  useOnClickOutside(ulRef, handleClose)

  return (
    <div className='relative w-max'>
      <div
        ref={ref}
        className='flex items-center justify-between cursor-pointer px-[8px] py-[2px] rounded-[4px] hover:bg-gray-200'
        onClick={toggleOpen}
      >
        <span className='text-[16px]'>{selectedItem as string}</span>
        <ArrowDownSvg className='w-[18px] h-[18px]' />
      </div>
      {isOpen && (
        <ModalWrapper inset>
          <div
            className={`top-0 left-0 w-[150px] rounded-[4px]`}
            style={{
              boxShadow:
                'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px',
            }}
          >
            <ul className='relative z-[100]' ref={ulRef}>
              {items.map(item => (
                <DropdownItem
                  key={item as string}
                  item={item}
                  setSelectedItem={setSelectedItem}
                  setFunction={setFunction}
                  handleCloseDropdown={handleClose}
                  afterClose={afterClose}
                  isSelected={item === selectedItem}
                />
              ))}
            </ul>
          </div>
        </ModalWrapper>
      )}
    </div>
  )
}

interface Props<T> {
  items: T[]
  defaultItem: T
  setFunction: (item: T) => void
  afterClose: boolean
}
