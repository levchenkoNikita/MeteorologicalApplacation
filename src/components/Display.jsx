import Time from './UI/elements/Time';
import City from './UI/elements/City';

const Display = ({ city, temperature }) => {
    const currentTime = new Date();
    const nowHour = currentTime.getHours();

    return (
        <div className="w-full bg-transparent absolute z-10 flex flex-col items-center justify-center text-white mt-[80px]">
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