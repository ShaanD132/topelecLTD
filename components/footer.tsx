import React from "react";

const Footer: React.FC = () => (
    <div className = "mx-10">
        <hr />
            <div className = "mt-10">
                <h1 className = "text-2xl font-ob text-center">Topelec LTD</h1>
                <div className = "justify-between font-o mt-5 text-xl px-20 lg:px-72 lg:flex">
                    <p className = "mt-2">About Us</p>
                    <p className = "mt-1">Our Projects</p>
                    <p className = "mt-1">Contact Us</p>
                </div>
                <div className = "mt-10">
                    <hr/>
                    <a href="https://shaanduss.vercel.app"><h1 className = " my-3 text-md text-center font-at">developed by shaan dussoye</h1></a>
                </div>
            </div>
    </div>
)

export default Footer