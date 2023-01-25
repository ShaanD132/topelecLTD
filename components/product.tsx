import React from "react";
import Image from "next/image";
import Link from "next/link"

interface Props {
    id: string,
    name: string,
    link: string
}

const Product: React.FC<Props> = ({id, name, link}) => (
    <div className = "flex flex-row items-center justify-center">
        <a href = {link} target = "_blank" rel="noopener noreferrer"><Image src = {`/assets/logos/${id}.png`} width = {175} height = {175} alt = {name} /></a>
    </div>
)

export default Product