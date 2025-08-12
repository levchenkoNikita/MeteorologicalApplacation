const WeatherItem = ({ isActive, id, time, temperature, onClick }) => {

    return (
        <div
            className={`
                weather-item
                ${isActive ? 'background-active-w-card' : 'background-w-card'}
            `}
            onClick={() => onClick(id)}
        >
            <div className={`w-[43px] h-[20px] text-[15px] flex items-center justify-center`}>
                {time}
            </div>
            <div className={`w-[44px] h-[38px] flex items-center justify-center bg-amber-700`}>
                img
            </div>
            <div className={`w-[30px] h-[24px] text-[15px] flex items-center justify-center`}>
                {temperature}
            </div>
        </div>
    );
}

export default WeatherItem;