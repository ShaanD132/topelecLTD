import React, { useState } from "react";
import Image from "next/image";
import ServicePopup from "./service-popup";

interface Props {
    id: string,
    text: string,
    description: string
}

const Service: React.FC<Props> = ({id, text, description}) => {
    return(
        <div>
            <div className = "flex flex-row items-center justify-center service">
                <Image width = {350} height = {350} alt = {text} src = {`/assets/services/${id}.png`} className = "overflow-hidden rounded-lg"  />
            </div>
        </div>
    )
}

export default Service

{/*
<button  onClick={() => setIsVisible(!isVisible)}>
                    <Image width = {350} height = {350} alt = {text} src = {`/assets/services/${id}.png`} className = "overflow-hidden rounded-lg"  />
                </button>
            </div>
            {isVisible && <ServicePopup description={description}/>}
*/}