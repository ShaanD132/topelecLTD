
import Service from "./service";

const Services: React.FC = () => (
    <div className = "flex flex-col items-center justify-center z-10" id = "services">
        <p className = "font-latob text-2xl md:text-4xl mt-10 md:mt-14 z-10">Services</p>
        <hr className = "border-t-2 border-main-yellow w-12 mt-1 z-10"/>
        <div className = "z-10 grid gap-x-5 gap-y-10 lg:gap-x-7 lg:gap-y-0 grid-cols-2 lg:grid-cols-4 items-center w-full auto-rows-min px-10 mt-10 md:mt-16">
            <Service id = "data-cabling" text =  "Data Cabling" description="Starts at Rs.4,000"/>
            <Service id = "electrical" text =  "Electrical Installation" description="Starts at Rs.6,000"/>
            <Service id = "air-conditioning" text =  "Air Conditioning" description="Starts at Rs.20,00"/>
            <Service id = "delivery" text =  "Delivery" description="Starts at Rs.200"/>
        </div>
    </div>
)



export default Services