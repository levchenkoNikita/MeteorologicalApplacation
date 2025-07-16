import React, { useState } from 'react';
import SafeListButton from './UI/buttons/SafeListButton';
import SafeListLayer from './UI/layers/SafeListLayer';

const SafeList = () => {
    const [isActive, setIsActive] = useState(true);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className='size-full'>
            <SafeListButton isActive={isActive} onClick={handleClick}/>
            <SafeListLayer isActive={isActive}/>
        </div>
    );
}

export default SafeList;