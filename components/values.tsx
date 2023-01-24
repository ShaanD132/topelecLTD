import React from "react";
import Card from "@/components/card"

const Values: React.FC = () => (
    <div className = "values flex flex-col items-center justify-center">
        <p className = "font-latob text-5xl mt-5">Our Values</p>
        <div className = "flex flex-row justify-between w-full px-32 mt-7" id = "values">
            <Card id = "trend" name = "Value 1" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing elit. " />
            <Card id = "sprout" name = "Value 2" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing elit."/>
            <Card id = "industry-40" name = "Value 3" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing elit."/>
        </div>
  </div>
)

export default Values