import HomeSectionHeader from './HomeSectionHeader'
import HomeSectionContent from './HomeSectionContent'
import type { Props } from './HomeSection.types'

export default function HomeSection({ title, items }: Props) {
  return (
    <section className='mt-[16px] [550px-max]:mt-[10px]'>
      <HomeSectionHeader title={title} />
      <HomeSectionContent items={items} />
    </section>
  )
}
