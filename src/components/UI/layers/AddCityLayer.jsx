import { useState, useEffect } from "react";
import LayerInput from "../inputs/LayerInput";
import LayerButton from "../buttons/LayerButton";

const AddCityLayer = ({ isActive, onClickAddCity }) => {
    const [inputValue, setInputValue] = useState('');
    const [isAddCity, setIsAddCity] = useState(false);
    const [isSaveCity, setIsSaveCity] = useState(false);

    function handleAddCity() {
        setIsAddCity(!isAddCity);
    }

    function handleSaveCity() {
        setIsSaveCity(!isSaveCity);
    }

    useEffect(() => {
        if (isAddCity) {
            onClickAddCity(inputValue, true, isSaveCity);
            setInputValue('');
            setIsAddCity(false);
        }
    }, [isAddCity]);

    return (
        <div
            className={`
                w-full h-[702px] absolute top-[100px] z-[-1] rounded-tr-[44px] rounded-tl-[44px] 
                ${isActive ? 'translate-y-[-80vh]' : 'translate-y-[0px]'}
                background-weather flex flex-col items-center justify-start duration-[0.7s] opacity-98
            `}>
            <LayerInput value={inputValue} onChange={(city) => setInputValue(city)} />
            <LayerButton onClick={handleAddCity}>
                Выбрать
            </LayerButton>
            <LayerButton onClick={handleSaveCity} isActive={isSaveCity} isStatic={true}>
                Добавить в избранное
            </LayerButton>
        </div>
    );
}

export default AddCityLayer;