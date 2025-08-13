import { createContext, useState } from 'react';
import BrowButton from './UI/buttons/BrowButton';
import ChangeForecastTime from './ChangeForecastTime';
import WeatherList from './UI/lists/WeatherList';
import ParametrsList from './UI/lists/ParametrsList';

const ActiveWeather = createContext();

const WeatherForecast = ({ isActive, onClick, weatherList, parametrsList }) => {

    const [isActiveWeather, setIsActiveWeather] = useState(1);
    // bg-[#48319D]
    return (
        <div
            className={`
                w-full h-[802px] absolute top-full z-1 text-white rounded-tr-[44px] rounded-tl-[44px] 
                flex flex-col items-center duration-[0.7s] opacity-98 overflow-hidden
                ${isActive ? 'translate-y-[-80vh]' : 'translate-y-[-325px]'}
                background-weather
            `}
        >
            <div className='w-full flex flex-col items-center gap-y-[15px] pb-[6px] rounded-tr-[44px] rounded-tl-[44px] relative weather-header'>
                <BrowButton onClick={onClick} />
                <ChangeForecastTime />
            </div>
            <div className='w-full flex flex-col items-center gap-y-[15px] pb-[6px] overflow-y-scroll'>
                <ActiveWeather.Provider value={{ isActiveWeather, setIsActiveWeather }}>
                    <WeatherList weatherList={weatherList} />
                    <ParametrsList parametrsList={parametrsList} />
                </ActiveWeather.Provider>
            </div>
        </div>
    );
}

export default WeatherForecast;
export { ActiveWeather };