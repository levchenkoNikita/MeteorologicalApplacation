import React, {useState} from "react";
import LayerInput from "../inputs/LayerInput";
import LayerButton from "../buttons/LayerButton";

const AddCityLayer = ({ isActive, onClickAddCity }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSaveCity, setIsSaveCity] = useState(false);

    function handleAddCity() {
        onClickAddCity(inputValue, true, isSaveCity);
    }

    function handleSaveCity() {
        setIsSaveCity(!isSaveCity);
    }

    return (
        <div
            className={`
                w-full h-[702px] absolute top-[100px] z-[-1] rounded-tr-[44px] rounded-tl-[44px]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[0px]' }
                bg-violet-600 bg-[url('./assets/images/addcity-back-button.png')]
                flex flex-col items-center justify-start shrink-0 duration-[0.7s]
            `}>
                <LayerInput value={inputValue} onChange={(data) => setInputValue(data)}/>
                <LayerButton onClick={handleAddCity}>
                    Выбрать
                </LayerButton>
                <LayerButton onClick={handleSaveCity}>
                    Добавить в избранное
                </LayerButton>
        </div>
    );
}

export default AddCityLayer;