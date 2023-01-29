import React from "react";
import Image from "next/image";

interface Props {
    id: string,
    text: string
}

const Service: React.FC<Props> = ({id, text}) => (
    <div className = "flex flex-row items-center justify-center">
        <Image width = {350} height = {350} alt = {text} src = {`/assets/services/${id}.png`} className = "overflow-hidden rounded-md" />
    </div>
)

export default Service

{/* 
- All Headings
- Services x Gap
- Navbar in general
- Company Values

*/}