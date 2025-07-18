import { useContext } from 'react';
import WeatherItem from '../elements/WeatherItem';
import { ActiveWeather } from '../../WeatherForecast';

const WeatherList = ({ weatherList }) => {
    const {setIsActiveWeather} = useContext(ActiveWeather);

    function handleClick(id) {
        setIsActiveWeather(id);
    }

    return (
        <ul className='w-full h-[170px] flex shrink-0 items-center gap-x-[12px] px-[20px] overflow-x-scroll ml-[15px]'>
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