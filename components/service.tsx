import React from "react";
import Image from "next/image";

interface Props {
    id: string,
    text: string
}

const Service: React.FC<Props> = ({id, text}) => (
    <div className = "px-10 product">
        <Image width = {350} height = {350} alt = {text} src = {`/assets/services/${id}.png`} className = "overflow-hidden rounded-lg" />
    </div>
)

export default Service