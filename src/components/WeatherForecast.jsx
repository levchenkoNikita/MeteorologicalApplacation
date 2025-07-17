import React, { createContext, useState } from 'react';
import BrowButton from './UI/buttons/BrowButton';
import ChangeForecastTime from './ChangeForecastTime';
import WeatherForecastList from './WeatherForecastList';
import WeatherList from './UI/lists/WeatherList';
import ParametrsList from './UI/lists/ParametrsList';

const ActiveWeather = createContext();

const WeatherForecast = ({ isActive, onClick, weatherList, parametrsList }) => {

    const [isActiveWeather, setIsActiveWeather] = useState(1);
    
    return (
        <div
            className={`
                w-full h-[802px] bg-gradient-to-b from-[#2E335A] to-[#1C1B33] backdrop-blur-[50px] absolute top-full opacity-98
                z-1 rounded-tr-[44px] rounded-tl-[44px] text-white bg-[#48319D]
                flex flex-col items-center duration-[0.7s]
                ${isActive ? 'translate-y-[-702px]' : 'translate-y-[-325px]'}
            `}
        >
            <div className='w-full flex flex-col items-center gap-y-[15px] pb-[6px] border-b-[1px]'>
                <BrowButton onClick={onClick} />
                <ChangeForecastTime />
            </div>
            <div className='w-full flex flex-col items-center gap-y-[15px] pb-[6px] border-b-[1px] overflow-y-scroll'>
                <ActiveWeather.Provider value={ {isActiveWeather, setIsActiveWeather} }>
                    <WeatherList weatherList={weatherList} />
                    <ParametrsList parametrsList={parametrsList} />
                </ActiveWeather.Provider>
            </div>
        </div>
    );
}

export default WeatherForecast;
export { ActiveWeather };