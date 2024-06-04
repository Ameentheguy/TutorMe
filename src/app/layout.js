import { Inter } from 'next/font/google'
import '@/styles/globals.css';

import {Providers} from "./providers";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
// import Login from 

export const metadata = {
  title: 'NHS TutorMe',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
