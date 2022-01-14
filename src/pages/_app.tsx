import '@/assets/styles/main.css'
import 'focus-visible'

import DefaultLayout from '@/components/layouts/default'

import type { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
