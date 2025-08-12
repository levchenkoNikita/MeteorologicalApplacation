import { useState } from 'react';
import Geolocation from './Geolocation';
import AddCity from './AddCity';
import SafeList from './SafeList';
import SafeListLayer from './UI/layers/SafeListLayer';

const Menu = ({ isGeolocation, onClickGeolocationButton, onClickAddCity, onClickSafeCity, safeList, onClickDeleteCity }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="
                menu text-white
                flex items-end justify-between 
            "
        >

            <AddCity
                onClickAddCity={(valueInput, valueSelect, valueSave) => onClickAddCity(valueInput, valueSelect, valueSave)}
            />

            <div className='size-full menu-items-wrapper clip-path-menu flex items-end'>
                <div className='menu-items clip-path-menu flex items-center'>
                    <Geolocation
                        isGeolocation={isGeolocation}
                        onClick={onClickGeolocationButton}
                    />

                    <SafeList isActive={isActive} setIsActive={() => setIsActive(!isActive)} />
                </div>
            </div>

            <SafeListLayer isActive={isActive} safeList={safeList} onClickSafeCity={(nameCity) => onClickSafeCity(nameCity)} onClickDeleteCity={(nameCity) => onClickDeleteCity(nameCity)} />

        </div>
    );
}

export default Menu;