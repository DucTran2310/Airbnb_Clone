import { Nunito } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const font = Nunito({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}
