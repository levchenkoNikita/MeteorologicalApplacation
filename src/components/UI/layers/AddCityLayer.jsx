import React from "react";
import LayerInput from "../inputs/LayerInput";

const AddCityLayer = ({isActive}) => {
    

    return (
        <div
            className={`
                w-full h-[702px] absolute top-[100px] z-[-1] rounded-tr-[44px] rounded-tl-[44px]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[0px]' }
                bg-violet-600 bg-[url('./assets/images/addcity-back-button.png')]
                flex flex-col items-center justify-start shrink-0 duration-[0.2s]
            `}>
                <LayerInput />
                {/* <div>
                    Поле показывающее текущий результат поиска(подсказка при поиске)
                </div> */}
        </div>
    );
}

export default AddCityLayer;
// top-[-602px] -- раскрытие слоя