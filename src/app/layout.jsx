import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Backlash',
  description: 'Backlash is a platform for anyone to share their cinematic creations. Dive into a world of user-generated content, available for viewing 24/7',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
