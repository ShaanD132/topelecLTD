import React from "react";
import Card from "@/components/card"

const Values: React.FC = () => (
    <div className = "flex flex-col items-center justify-center mb-20">
        <p className = "font-latob text-2xl md:text-4xl mt-10 md:mt-28">Company Values</p>
        <div className = "grid grid-cols-1 gap-y-10 lg:grid-cols-3 items-center justify-center w-full auto-rows-min px-32 mt-14" id = "values">
            <Card id = "trend" name = "Value 1" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing. " />
            <Card id = "sprout" name = "Value 2" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing."/>
            <Card id = "industry-40" name = "Value 3" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing."/>
        </div>
  </div>
)

export default Values