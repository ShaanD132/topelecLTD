import React from "react";

const MainText: React.FC = () => {
    return(
        <div className = "relative z-10 flex-1 flex items-left justify-center flex-col px-20 mt-10 md:mt-28" >
            <div>
                <h1 className = "text-3xl md:text-5xl lg:text-5xl line font-hb">QUALITY <br/> MADE <span className = "text-main-yellow">AFFORDABLE</span></h1>
                <div className = "text-lg md:text-2xl lg:text-2xl mt-2 font-o">
                    <p>Topelec Ltd, founded in 2002, is an importer, wholesaler, & retailer of: </p>
                    <ul className = "px-12 py-3">
                        <li>electrical cabling</li>
                        <li>switch gears</li>
                        <li>protection devices</li>
                        <li>other electrical, mechanical, automation <br />and data accessories.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainText