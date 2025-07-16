import React, {useState} from 'react';
import WeatherItem from '../elements/WeatherItem';

const WeatherList = () => {
    const [weatherList, setWeatherList] = useState([
        { id: 1, time: '00:00', temperature: '19C' },
        { id: 2, time: '01:00', temperature: '19C' },
        { id: 3, time: '02:00', temperature: '19C' },
        { id: 4, time: '03:00', temperature: '19C' },
        { id: 5, time: '04:00', temperature: '19C' },
        { id: 6, time: '05:00', temperature: '19C' },
        { id: 7, time: '06:00', temperature: '19C' },
        { id: 8, time: '07:00', temperature: '19C' },
        { id: 9, time: '08:00', temperature: '19C' },
        { id: 10, time: '09:00', temperature: '19C' },
        { id: 11, time: '10:00', temperature: '19C' },
        { id: 12, time: '11:00', temperature: '19C' },
    ]);

    return (
        <ul className='flex items-center gap-x-[12px] px-[20px] mt-[20px] overflow-scroll'>
            {weatherList.map((el) => (
                <li>
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