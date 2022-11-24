import { UnitsSettings } from './UnitsSettings'
import { UiSettings } from './UiSettings'

export const Settings = () => {
  return (
    <div className='w-full flex flex-col items-start justify-center px-[40px] text-[18px] mobile:px-[24px]'>
      <UnitsSettings />
      <UiSettings />
    </div>
  )
}
