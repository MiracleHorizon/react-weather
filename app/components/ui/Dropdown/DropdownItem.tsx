import { CheckSvg } from 'components/ui/svg'
import { SetState } from 'types/types'

export const DropdownItem = <T,>({
  item,
  setSelectedItem,
  setFunction,
  handleCloseDropdown,
  afterClose,
  isSelected,
}: Props<T>) => {
  const handleSetSelectedItem = () => {
    setFunction(item)
    setSelectedItem(item)
    afterClose && handleCloseDropdown()
  }

  return (
    <div
      className='flex items-center cursor-pointer px-[8px] py-[2px] rounded-[4px] hover:bg-gray-100 active:bg-gray-200'
      onClick={handleSetSelectedItem}
    >
      <span className='text-[16px]'>{item as string}</span>
      {isSelected && <CheckSvg className='ml-auto w-[20px] h-[20px]' />}
    </div>
  )
}

interface Props<T> {
  item: T
  setSelectedItem: SetState<T>
  setFunction: (item: T) => void
  handleCloseDropdown: () => void
  afterClose: boolean
  isSelected: boolean
}
