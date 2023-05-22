import NavigationItem from './NavigationItem'
import { Routes } from '@router/Routes'
import type { NavigationCategory } from '@models/NavigationCategory'

const navigationCategories: NavigationCategory[] = [
  { title: 'Home', href: Routes.HOME },
  { title: 'Forecast', href: Routes.FORECAST },
  { title: 'Settings', href: Routes.SETTINGS }
]

export default function Navigation() {
  return (
    <nav>
      <ul className='flex items-center'>
        {navigationCategories.map(navigationCategory => (
          <NavigationItem
            key={navigationCategory.href}
            {...navigationCategory}
          />
        ))}
      </ul>
    </nav>
  )
}
