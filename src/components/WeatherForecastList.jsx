import React from 'react';
import WeatherList from './UI/lists/WeatherList';
import ParametrsList from './UI/lists/ParametrsList';

const WeatherForecastList = () => {
    return (
        <>
            <WeatherList />
            <ParametrsList />
        </>
    );
}

export default WeatherForecastList;