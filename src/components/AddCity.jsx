import { useState } from 'react';
import AddCityButton from "./UI/buttons/AddCityButton";
import AddCityLayer from "./UI/layers/AddCityLayer";

const AddCity = ({ onClickAddCity }) => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return ( //add-city-container-border
        <>
            <div className='add-city-container-border flex items-center justify-center'>
                <div
                    className={`
                add-city-container flex items-center justify-center
            `}>
                    <AddCityButton isActive={isActive} onClick={handleClick} />

                </div>
            </div>
            <AddCityLayer isActive={isActive} onClickAddCity={(valueInput, valueSelect, valueSave) => onClickAddCity(valueInput, valueSelect, valueSave)} />
        </>
    );
}

export default AddCity;