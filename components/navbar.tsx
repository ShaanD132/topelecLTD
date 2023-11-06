import React from "react";
import {Link} from "react-scroll";
import Image from "next/image"

const Navbar: React.FC = () => {
    return(
        <div className = "navbar drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] fixed w-full z-20">
            <div className = "flex justify-between flex-row mx-8 md:mx-20 py-5">
                <Link to = "home" spy = {true} smooth = {true} offset = {0} duration = {1000} className = "cursor-pointer">
                    <div className = "flex flex-row items-center justify-center main-logo">
                    <Image width = {50} height = {50} alt = "logo" src = "/assets/black_logo.png" className = "hidden lg:block"/>
                    <h1 className = "ml-0 lg:ml-3 text-sm md:text-2xl xl:text-3xl font-mb">TOPELEC LTD</h1>
                    </div></Link>
                <div className = "flex flex-row text-sm md:text-lg xl:text-xl md:mt-2 font-h">
                    <Link to = "home" spy = {true} smooth = {true} offset = {0} duration = {1000} className = "hover:text-main-yellow cursor-pointer"><h2 className = "mx-2 md:mx-6">Home</h2></Link>
                    <Link to = "services" spy = {true} smooth = {true} offset = {-50} duration = {1000} className = "hover:text-main-yellow cursor-pointer"><p className = "mx-2 md:mx-6">Services</p></Link>
                    <Link  to = "products" spy = {true} smooth = {true} offset = {-50} duration = {1000} className = "hover:text-main-yellow cursor-pointer"><p className = "mx-2 md:mx-6">Products</p></Link>
                    <Link to = "projects" spy = {true} smooth = {true} offset = {-50} duration = {1000} className = "hover:text-main-yellow cursor-pointer"><p className = "mx-2 md:mx-6">Projects</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar