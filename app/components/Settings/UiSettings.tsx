import { observer } from 'mobx-react-lite'

import UiStore from 'stores/UiStore'
import { Dropdown } from 'components/ui/Dropdown'
import { Theme } from 'models/Theme'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'

// const options = [
//   {
//     title: 'Daily forecast panel layout',
//     dropdown: {
//       items: Object.values(DailyForecastPanelLayout),
//       defaultItem: UiStore.dailyForecastPanelLayout,
//       setFunction: UiStore.setDailyForecastPanelLayout,
//       afterClose: true,
//     },
//   },
//   {
//     title: 'Theme',
//     dropdown: {
//       items: Object.values(Theme),
//       defaultItem: UiStore.theme,
//       setFunction: UiStore.setTheme,
//       afterClose: true,
//     },
//   },
// ]

export const UiSettings = observer(() => {
  const { theme, dailyForecastPanelLayout } = UiStore

  return (
    <div className='py-[24px]'>
      <div>
        <strong className='text-[16px]'>Daily forecast panel layout</strong>
        <Dropdown
          items={Object.values(DailyForecastPanelLayout)}
          defaultItem={dailyForecastPanelLayout}
          setFunction={UiStore.setDailyForecastPanelLayout}
          afterClose={true}
        />
      </div>
      <div>
        <strong className='text-[16px]'>Theme</strong>
        <Dropdown
          items={Object.values(Theme)}
          defaultItem={theme}
          setFunction={UiStore.setTheme}
          afterClose={true}
        />
      </div>
      {/*{options.map(({ title, dropdown }) => (*/}
      {/*  <div className='flex flex-col'>*/}
      {/*    <span className='text-[16px]'>Daily forecast panel layout</span>*/}
      {/*    <Dropdown afterClose={dropdown.afterClose} items={dropdown.items} />*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  )
})
