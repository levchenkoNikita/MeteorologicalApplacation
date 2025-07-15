import React, { useState } from 'react';
import AddCityButton from "./UI/buttons/AddCityButton";
import AddCityLayer from "./UI/layers/AddCityLayer";

const AddCity = () => {
    const [isActive, setIsActive] = useState(true);


    return (
        <div
            className={`
                w-[200px] h-full bg-gray-100 
                bg-[url('./assets/images/addcity-back-button.png')]
                flex items-center justify-center shrink-0 
            `}>
            <AddCityButton />
            <AddCityLayer isActive={isActive}/>
        </div>
    );
}

export default AddCity;