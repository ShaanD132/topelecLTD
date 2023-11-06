import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Topelec LTD</title>
        <meta name="description" content="Topelec LTD - Mauritius" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Navbar/>
    </>
  )
}