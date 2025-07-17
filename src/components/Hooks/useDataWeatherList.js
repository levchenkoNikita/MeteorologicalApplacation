import { useState } from 'react';

const useDataWeatherList = () => {
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
        { id: 13, time: '00:00', temperature: '19C' },
        { id: 14, time: '01:00', temperature: '19C' },
        { id: 15, time: '02:00', temperature: '19C' },
        { id: 16, time: '03:00', temperature: '19C' },
        { id: 17, time: '04:00', temperature: '19C' },
        { id: 18, time: '05:00', temperature: '19C' },
        { id: 19, time: '06:00', temperature: '19C' },
        { id: 20, time: '07:00', temperature: '19C' },
        { id: 21, time: '08:00', temperature: '19C' },
        { id: 22, time: '09:00', temperature: '19C' },
        { id: 23, time: '10:00', temperature: '19C' }
    ]);
    // console.log(weatherList)

    return [weatherList, setWeatherList];
}

export default useDataWeatherList;