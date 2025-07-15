import React from "react";

const AddCityLayer = ({isActive}) => {
    

    return (
        <div
            className={`
                w-full h-[702px] absolute top-[100px] z-[-1]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[0px]' }
                bg-violet-600 bg-[url('./assets/images/addcity-back-button.png')]
                flex items-center justify-center shrink-0
            `}>
                
        </div>
    );
}

export default AddCityLayer;
// top-[-602px] -- раскрытие слоя