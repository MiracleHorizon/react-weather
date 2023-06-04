import HomeSectionItem from './HomeSectionItem'
import type { Props } from '../HomeSection.types'

export default function HomeSectionContent({ items }: Pick<Props, 'items'>) {
  return (
    <main className='mt-[8px] [550px-max]:mt-[6px]'>
      <ul>
        {items.map(item => (
          <HomeSectionItem key={item.title} {...item} />
        ))}
      </ul>
    </main>
  )
}
