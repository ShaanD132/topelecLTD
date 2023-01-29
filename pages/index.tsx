import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/navbar'
import MainText from '@/components/maintext'
import Values from "@/components/values"
import Products from "@/components/products"
import Services from "@/components/services"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Topelec LTD</title>
        <meta name="description" content="Topelec LTD - Mauritius" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className = "fixed z-30 bottom-10 right-10 hidden md:block">
        <div className = "flex flex-row bg-white rounded-lg drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)]">
          <Link href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "instagram" src = "/assets/logos/instagram.png" className = "mx-4 my-2 hover:text-blue"/></Link>
          <Link href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "email" src = "/assets/logos/mail.png" className = "mx-4 my-2 hover:opacity-96"/></Link>
          <Link href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "facebook" src = "/assets/logos/facebook.png" className = "mx-4 my-2"/></Link>
        </div>
      </div>

      <div className = "main flex flex-col bg-white md:bg-black" id = "home">
        <Image width = {1000} height = {1000} alt = "industrial" src = "/assets/industrial.jpeg" className = "absolute hidden md:block z-1 h-full w-full object-cover"/>
        <Image width = {1000} height = {1000} alt = "industrial" src = "/assets/industrial_vertical1.jpg" className = "absolute block md:hidden z-1 h-full w-full object-cover"/>
        <MainText />
        {/* <div className = "relative flex-grow-1 z-10 items-center flex justify-center text-center mb-4">
          <Image width = {70} height = {70} alt = "scroll-down" src = "/assets/arrow-bg.png" className = "arrow-down"/>
        </div>*/}
        <Navbar />
      </div>


      <Services />

      <Products />

      <Values />
    </>
  )
}
