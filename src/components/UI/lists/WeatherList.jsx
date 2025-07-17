import React, { useState, useContext } from 'react';
import WeatherItem from '../elements/WeatherItem';
import useDataWeatherList from '../../Hooks/useDataWeatherList';
import { ActiveWeather } from '../../WeatherForecast';

const WeatherList = ({ weatherList }) => {
    const {setIsActiveWeather} = useContext(ActiveWeather);

    function handleClick(id) {
        setIsActiveWeather(id);
    }

    return (
        <ul className='w-full h-[200px] flex shrink-0 items-center gap-x-[12px] px-[20px] overflow-x-scroll pl-[20px]'>
            {weatherList.map((el) => (
                <li key={el.id}>
                    <WeatherItem
                        key={el.id}
                        id={el.id}
                        time={el.time}
                        isActive={false}
                        temperature={el.temperature}
                        onClick={(id) => handleClick(id)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default WeatherList;