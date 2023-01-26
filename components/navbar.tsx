import React from "react";
import Link from "next/link"
import Image from "next/image"

const Navbar: React.FC = () => {
    return(
        <div className = "navbar drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] fixed w-full z-10">
            <div className = "flex justify-between flex-row mx-20 py-5">
                <a href = "/">
                    <div className = "flex flex-row items-center justify-center main-logo">
                    <Image width = {50} height = {50} alt = "logo" src = "/assets/black_logo.png" />
                    <h1 className = " ml-3 text-3xl font-mb">TOPELEC LTD</h1>
                    </div></a>
                <div className = "flex flex-row text-xl mt-2 font-h">
                    <Link href = "/" className = "hover:text-blu"><h2 className = "mx-6">Home</h2></Link>
                    <Link href = "#products" className = "hover:text-blu"><p className = "mx-6">Products</p></Link>
                    <Link href = "#services" className = "hover:text-blu"><p className = "mx-6 hover:text-blu">Services</p></Link>
                    <Link href = "#about" className = "hover:text-blu"><p className = "mx-6 hover:text-blu">About Us</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar