import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Section1 from '@/components/Section1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Header/>
    <Section1/>
   </>
  )
}
