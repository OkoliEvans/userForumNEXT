import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayouts from './PageLayouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const title = "AI";
  return (
    <>
      <Head>
        <title>Next {title}</title>
        <meta name="description" content="sys con routing built by Evans" />
        <meta name="viewport" content="width=device-width, scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayouts>
        <div className='bg-gray-100 text-2xl py-3 px-4 font-semibold text-blue-600'>
          Home of NEXT Ai
          <p className='text-sm text-red-600 font-semibold py-2 px-1'>building next gen Ai</p>
        </div>
      </PageLayouts>
    </>
  )
}
