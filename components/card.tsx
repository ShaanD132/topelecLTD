import React from "react";
import Image from "next/image"

interface Props {
    id: string,
    name: string,
    text: string
}

const Card: React.FC<Props> = ({id, name, text}) => (
    <div className = "rounded-md bg-white text-black flex-1 flex flex-col mt-7 mx-8 \
    items-center top-0 sm:h-card3 md:h-card2 lg:h-card1 \
    card drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]">
        <div>
            <Image width = {180} height = {180} alt = {name} src = {`/assets/${id}.png`} className = "sm:mt-5 md:mt-10 lg:mt-24 text-center"/>
        </div>

        <div className = "text-left mx-10 md:mt-5 lg:mt-28">
            <p className = "font-hb sm:text-lg md:text-xl lg:text-3xl">{name}</p>
            <p className = "font-lato sm:text-md md:text-md lg:text-card">{text}</p>
        </div>
    </div>
)


export default Card