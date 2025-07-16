const WeatherItem = ({ isActive, time, temperature }) => {

    return (
        <div
            className={`
                w-[60px] h-[146px] border-[1px] border-white text-white
                flex flex-col gap-y-[16px] items-center rounded-[30px]
                ${isActive ? 'bg-blue-600' : 'bg-blue-400'}
            `}
        >
            <div className={`w-[43px] h-[20px] text-[15px]`}>
                {time}
            </div>
            <div className={`w-[44px] h-[38px] flex items-center justify-center bg-amber-700`}>
                img
            </div>
            <div className={`w-[30px] h-[24px] text-[20px]`}>
                {temperature}
            </div>
        </div>
    );
}

export default WeatherItem;