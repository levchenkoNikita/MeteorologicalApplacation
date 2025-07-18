import ForecastTimeButton from './UI/buttons/ForecastTimeButton';

const ChangeForecastTime = () => {
    return (
        <div className='w-full flex'>
            <ForecastTimeButton>Hourly Forecast</ForecastTimeButton>
            <ForecastTimeButton>Weekly Forecast</ForecastTimeButton>
        </div>
    );
}

export default ChangeForecastTime;