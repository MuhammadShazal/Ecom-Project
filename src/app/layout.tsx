import Navbar from '../../components/sections/Navbar/Navbar'
import Footer from '../../components/sections/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import TopLabel from '../../components/views/TopLabel'
// import HeroBanner from '../../components/sections/HeroBanner'
// import PromotionsTab from '../../components/sections/PromotionsTab'
// import HomeProductSection from '../../components/sections/HomeProductSection'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Hackaton App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className='overflow-hidden w-screen'>
        <TopLabel />
      </div>
      {/* <Wrapper> */}
        <Navbar />
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer />
      {/* </Wrapper> */}
    </body>
  </html> )
}