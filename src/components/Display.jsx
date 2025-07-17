import React from 'react';
import Time from './UI/elements/Time';
import City from './UI/elements/City';

const Display = ({ city, temperature }) => {
    const currentTime = new Date();
    const nowHour = currentTime.getHours();

    return (
        <div className="w-full h-[183px] mt-[98px] bg-transparent absolute flex flex-col items-center justify-center text-white">
            <Time>
                {temperature[nowHour].temperature}
            </Time>
            <City>
                <p className='flex items-center justify-center'>
                    {city.country}
                </p>
                |
                <p className='flex items-center justify-center'>
                    {city.regionName}
                </p>
            </City>
        </div>
    );
}

export default Display;