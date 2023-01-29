import React from "react";

const MainText: React.FC = () => {
    return(
        <div className = "relative z-10 flex-1 flex items-left justify-center flex-col px-20" >
            <div>
                <h1 className = "text-3xl md:text-5xl lg:text-5xl line font-hb">QUALITY <br/> MADE <span className = "text-main-yellow">AFFORDABLE</span></h1>
                <div className = "text-lg md:text-2xl lg:text-2xl mt-2 font-o w-1/2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ipsum consequat, eleifend est eget, rhoncus velit.</p>
                </div>
            </div>
        </div>
    )
}

export default MainText