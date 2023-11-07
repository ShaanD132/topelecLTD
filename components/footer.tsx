import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
    <div className = "mx-10">
        <hr />
            <div className = "mt-10">
                <h1 className = "text-2xl font-ob text-center">Topelec LTD</h1>
                <div className = "justify-between font-o mt-5 text-xl px-20 lg:px-72 lg:flex">
                    <p className = "mt-1 hover:underline">About Us</p>
                    <Link href="/projects" className="hover:underline"><p className = "mt-1">Our Projects</p></Link>
                    <Link href="/contact" className="hover:underline"><p className = "mt-1">Contact Us</p></Link>
                </div>
                <div className = "x-20 lg:px-72 mt-5 font-lg">
                    <p className = "font-o"> CNR Praslin & Reserves ST,<br/> Les Salines Port-Louis, <br/>Mauritius.</p>
                </div>
                <div className = "mt-10">
                    <hr/>
                    <h1 className = " my-2 text-md text-center font-at">developed by <Link target="_blank" href="https://shaanduss.vercel.app" className = "hover:under">shaan dussoye</Link></h1>
                </div>
            </div>
    </div>
)

export default Footer