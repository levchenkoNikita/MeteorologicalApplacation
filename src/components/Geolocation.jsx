import React, { useState } from 'react';
import GeolocationButton from './UI/buttons/GeolocationButton';

const Geolocation = ({isGeolocation, onClick}) => {


    return (
        <GeolocationButton isActive={isGeolocation} onClick={onClick}/>
    );
}

export default Geolocation;