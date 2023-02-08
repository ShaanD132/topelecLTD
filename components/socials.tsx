import React from "react";
import Link from "next/link";
import Image from "next/image";

const Socials: React.FC = () => (
    <div className = "fixed z-30 bottom-10 right-10 hidden md:block">
        <div className = "flex flex-row bg-white rounded-lg drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)]">
          <Link target = "_blank" href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "instagram" src = "/assets/logos/instagram.png" className = "mx-5 my-2 hover:text-blue"/></Link>
          <Link target = "_blank" href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "email" src = "/assets/logos/mail.png" className = "mx-5 my-2 hover:opacity-96"/></Link>
          <Link target = "_blank" href = "https://www.instagram.com/topelecltd/"><Image width = {30} height = {30} alt = "facebook" src = "/assets/logos/facebook.png" className = "mx-5 my-2"/></Link>
        </div>
      </div>
)

export default Socials