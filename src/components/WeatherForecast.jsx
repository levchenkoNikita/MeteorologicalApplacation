import React from 'react';
import BrowButton from './UI/buttons/BrowButton';
import ChangeForecastTime from './ChangeForecastTime';

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
            <div className='w-full flex flex-col items-center gap-y-[15px] pb-[6px] border-b-[1px]'>
                <BrowButton onClick={onClick}/>
                <ChangeForecastTime />
            </div>

        </div>
    );
}

export default WeatherForecast;