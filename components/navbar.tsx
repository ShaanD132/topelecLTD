import React from "react";
import Link from "next/link";
import Image from "next/image"

const Navbar: React.FC = () => {
    return(
        <div className = "navbar drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] fixed w-full z-20">
            <div className = "flex justify-between flex-row mx-8 md:mx-20 py-5">
                <Link href = "/" className = "cursor-pointer">
                    <div className = "flex flex-row items-center justify-center main-logo">
                    <Image width = {50} height = {50} alt = "logo" src = "/assets/black_logo.png" className = "hidden lg:block"/>
                    <h1 className = "ml-0 lg:ml-3 text-md sm:text-2xl md:text-2xl xl:text-3xl font-mb">TOPELEC LTD</h1>
                    </div></Link>
                <div className = "flex flex-row text-lg md:text-lg xl:text-xl md:mt-2 font-letters">
                    <Link href="/" className = "hover:text-main-yellow cursor-pointer"><h2 className = "mx-4 md:mx-6">Home</h2></Link>
                    <Link  href = "/#services" className = "hover:text-main-yellow cursor-pointer"><p className = "mx-4 md:mx-6">Services</p></Link>
                    <Link  href = "/#products" className = "hover:text-main-yellow cursor-pointer"><p className = "mx-4 md:mx-6">Products</p></Link>
                    <Link  href = "/#projects" className = "hover:text-main-yellow cursor-pointer"><p className = "mx-4 md:mx-6">Projects</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar