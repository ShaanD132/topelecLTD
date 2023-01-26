import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/navbar'
import MainText from '@/components/maintext'
import Values from "@/components/values"
import Products from "@/components/products"
import Services from "@/components/services"

export default function Home() {
  return (
    <>
      <Head>
        <title>Topelec LTD</title>
        <meta name="description" content="Topelec LTD - Mauritius" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className = "main flex flex-col">
        <Image width = {1000} height = {1000} alt = "industrial" src = "/assets/industrial.jpg" className = "absolute z-1 main-image w-full h-full object-cover"/>
        <MainText />
        <div className = "relative flex-grow-1 z-10 items-center flex justify-center text-center mb-4">
          <Image width = {70} height = {70} alt = "scroll-down" src = "/assets/arrow-bg.png" className = "arrow-down"/>
        </div>
        <Navbar />
      </div>


      <Products />

      <Services />

      <Values />
    </>
  )
}
