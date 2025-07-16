import React, { useState } from 'react';
import GeolocationButton from './UI/buttons/GeolocationButton';

const Geolocation = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <GeolocationButton isActive={isActive} onClick={handleClick}/>
    );
}

export default Geolocation;