import ForecastTimeButton from './UI/buttons/ForecastTimeButton';

const ChangeForecastTime = () => {
    return (
        <div className='w-full flex text-[rgba(235,235,245,0.6)]'>
            <ForecastTimeButton isActive={true}>Hourly Forecast</ForecastTimeButton>
            <ForecastTimeButton>Weekly Forecast</ForecastTimeButton>
        </div>
    );
}

export default ChangeForecastTime;