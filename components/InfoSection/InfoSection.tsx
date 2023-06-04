import InfoSectionHeader from './InfoSectionHeader'
import InfoSectionContent from './InfoSectionContent'
import type { Props } from './InfoSection.types'

export default function InfoSection({ title, items }: Props) {
  return (
    <section className='mt-[16px] [550px-max]:mt-[10px]'>
      <InfoSectionHeader title={title} />
      <InfoSectionContent items={items} />
    </section>
  )
}
