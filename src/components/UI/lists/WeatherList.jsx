import React, {useState} from 'react';
import WeatherItem from '../elements/WeatherItem';
import useDataWeatherList from '../../Hooks/useDataWeatherList';

const WeatherList = ({ weatherList }) => {
    

    return (
        <ul className='w-full h-[200px] flex shrink-0 items-center gap-x-[12px] px-[20px] overflow-x-scroll pl-[20px]'>
            {weatherList.map((el) => (
                <li key={el.id}>
                    <WeatherItem
                        key={el.id}
                        time={el.time}
                        isActive={false}
                        temperature={el.temperature}
                    />
                </li>
            ))}
        </ul>
    );
}

export default WeatherList;