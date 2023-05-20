import Head from 'next/head'
import { FC } from 'react'

import { ISeoParams } from 'models/ISeoParams'

export const NextHead: FC<ISeoParams> = ({ title, description, keywords }) => (
  <Head>
    <title>{`React Weather | ${title}`}</title>
    <meta name='description' content={`${description || 'weather app'}`} />
    <meta
      name='keywords'
      content={(keywords || ['weather', 'temperature', 'forecast']).join(', ')}
    />
    <meta name='robots' content='index, follow' />
  </Head>
)
