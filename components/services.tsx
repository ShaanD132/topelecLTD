import React from "react";
import Image from "next/image";
import Service from "./service";

const Services: React.FC = () => (
    <div className = "flex flex-col items-center justify-center" id = "services">
        <p className = "font-latob text-4xl mt-32">Our Services</p>
        <div className = "flex flex-row mb-32 items-center justify-center mt-20">
            <Service id = "data-cabling" text =  "Data Cabling" />
            <Service id = "electrical" text =  "Electrical Installation" />
            <Service id = "air-conditioning" text =  "Air Conditioning" />
            <Service id = "delivery" text =  "Delivery" />
        </div>
    </div>
)



export default Services