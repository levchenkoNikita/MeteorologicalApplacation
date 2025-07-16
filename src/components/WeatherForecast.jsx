import React from 'react';
import BrowButton from './UI/buttons/BrowButton';

const WeatherForecast = ({isActive, onClick}) => {

    return (
        <div
            className={`
                w-full min-h-[702px] bg-green-400 absolute top-full
                z-1 rounded-tr-[44px] rounded-tl-[44px]
                flex flex-col items-center duration-[0.7s]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[-325px]'}
            `}
        >
            <BrowButton onClick={onClick}/>
        </div>
    );
}

export default WeatherForecast;