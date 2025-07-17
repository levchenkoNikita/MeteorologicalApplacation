import React, { useState } from "react";
import LayerInput from "../inputs/LayerInput";
import LayerButton from "../buttons/LayerButton";

const SafeListLayer = ({isActive}) => {
    const [safeList, setSafeList] = useState([
        {id: 1, name: "Москва"},
        {id: 2, name: "Питер"},
    ]);
    

    return (
        <div
            className={`
                w-full min-h-[702px] absolute top-[100px] left-0 z-[-1] rounded-tr-[44px] rounded-tl-[44px]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[0px]' }
                bg-[#48319D] bg-[url('./assets/images/addcity-back-button.png')]
                flex flex-col items-center justify-start shrink-0 duration-[0.7s]
                overflow-scroll pb-[220px] opacity-98
            `}>
                <LayerInput />
                {safeList.map((city) => (
                    <LayerButton isActive={false} isIcon={true} key={city.id}>
                        {city.name}
                    </LayerButton>
                ))}
        </div>
    );
}

export default SafeListLayer;
