import React, { useState } from 'react';
import SafeListButton from './UI/buttons/SafeListButton';
import SafeListLayer from './UI/layers/SafeListLayer';

const SafeList = ({ safeList, onClickSafeCity, onClickDeleteCity }) => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className='size-full'>
            <SafeListButton isActive={isActive} onClick={handleClick}/>
            <SafeListLayer isActive={isActive} safeList={safeList} onClickSafeCity={(nameCity) => onClickSafeCity(nameCity)} onClickDeleteCity={(nameCity) => onClickDeleteCity(nameCity)}/>
        </div>
    );
}

export default SafeList;