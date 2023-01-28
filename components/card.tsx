import React from "react";
import Image from "next/image"

interface Props {
    id: string,
    name: string,
    text: string
}

const Card: React.FC<Props> = ({id, name, text}) => (
    <div className = "rounded-md bg-white text-black flex-1 flex flex-col lg:mx-10 \
    items-center top-0 card drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]">
        <div>
            <Image width = {110} height = {110} alt = {name} src = {`/assets/${id}.png`} className = "mt-10 lg:mt-20 text-center"/>
        </div>

        <div className = "mx-10 md:mt-5 lg:mt-12 text-center">
            <p className = "font-hb sm:text-lg md:text-xl lg:text-2xl">{name}</p>
            <p className = "font-lato sm:text-md md:text-md lg:text-card mt-2 mb-10">{text}</p>
        </div>
    </div>
)


export default Card