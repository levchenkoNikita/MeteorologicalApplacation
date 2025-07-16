import React, { useState } from 'react';
import AddCityButton from "./UI/buttons/AddCityButton";
import AddCityLayer from "./UI/layers/AddCityLayer";

const AddCity = ({ onClickAddCity }) => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div
            className={`
                w-[200px] h-full bg-gray-100 
                bg-[url('./assets/images/addcity-back-button.png')]
                flex items-center justify-center shrink-0 
            `}>
            <AddCityButton isActive={isActive} onClick={handleClick}/>
            <AddCityLayer isActive={isActive} onClickAddCity={() => onClickAddCity(valueInput, valueSelect, valueSave)}/>
        </div>
    );
}

export default AddCity;