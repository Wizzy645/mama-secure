import type { Metadata } from 'next'
import { Inter, Poppins, Roboto, Lato, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
})
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto' 
})
const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-lato' 
})
const openSans = Open_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-open-sans' 
})

export const metadata: Metadata = {
  title: 'Super Energy Ltd - Green & Clean Energy Specialist',
  description: 'The official plug for all your renewable resources, made with love with people who knows how - The natives!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${lato.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
