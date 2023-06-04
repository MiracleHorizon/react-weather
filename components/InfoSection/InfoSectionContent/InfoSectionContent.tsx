import HomeSectionItem from './InfoSectionItem'
import type { Props } from '../InfoSection.types'

export default function InfoSectionContent({ items }: Pick<Props, 'items'>) {
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
