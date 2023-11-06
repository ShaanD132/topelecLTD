import React from "react";

const MainText: React.FC = () => {
    return(
        <div className = "relative z-10 flex-1 flex items-left justify-center flex-col px-20" >
            <div>
                <h1 className = "text-4xl md:text-5xl lg:text-5xl line font-hb">QUALITY <br/> MADE <span className = "text-main-yellow">AFFORDABLE</span></h1>
                <div className = "text-2xl md:text-2xl lg:text-3xl mt-2 font-o md:w-2/3">
                    <p><span className = "font-ob">Trusted by leaders</span> in the Construction and Hotel Industry, such as LUX and Baobab. <span className = "font-ob">Topelec guarantees </span> high quality work.</p>
                </div>
            </div>
        </div>
    )
}

export default MainText