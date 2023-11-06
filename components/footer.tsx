import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
    <div className = "mx-10">
        <hr />
            <div className = "mt-10">
                <h1 className = "text-2xl font-ob text-center">Topelec LTD</h1>
                <div className = "justify-between font-o mt-5 text-xl px-20 lg:px-72 lg:flex">
                    <Link href="/contact" className="hover:underline"><p className = "mt-1">About Us</p></Link>
                    <Link href="/contact" className="hover:underline"><p className = "mt-1">Our Projects</p></Link>
                    <Link href="/contact" className="hover:underline"><p className = "mt-1">Contact Us</p></Link>
                </div>
                <div className = "mt-10">
                    <hr/>
                    <Link target="_blank" href="https://shaanduss.vercel.app"><h1 className = " my-3 text-md text-center font-at">developed by shaan dussoye</h1></Link>
                </div>
            </div>
    </div>
)

export default Footer