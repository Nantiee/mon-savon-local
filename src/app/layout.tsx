import '@/assets/styles/main.css'
import 'focus-visible'
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className}>
      <head>
        <title>N + T + S</title>
      </head>
      <body>
        <div className='default-layout'>
          {/* Header */}

          <main>
            {children}
          </main>

          {/* Footer */}
        </div>
      </body>
    </html>
  )
}
