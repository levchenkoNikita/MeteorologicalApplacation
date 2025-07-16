import React from "react";
import LayerInput from "../inputs/LayerInput";
import LayerButton from "../buttons/LayerButton";

const SafeListLayer = ({isActive}) => {
    

    return (
        <div
            className={`
                w-full h-[702px] absolute top-[100px] left-0 z-[-1] rounded-tr-[44px] rounded-tl-[44px]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[0px]' }
                bg-violet-600 bg-[url('./assets/images/addcity-back-button.png')]
                flex flex-col items-center justify-start shrink-0 duration-[0.7s]
            `}>
                <LayerInput />
                <LayerButton>
                    Выбрать
                </LayerButton>
                <LayerButton>
                    Добавить в избранное
                </LayerButton>
        </div>
    );
}

export default SafeListLayer;
