import React, { useState, useContext } from 'react';
import ParametrsItem from '../elements/ParametrsItem';
import { ActiveWeather } from '../../WeatherForecast';

const ParametrsList = ({ parametrsList }) => {
    const {isActiveWeather} = useContext(ActiveWeather);

    return (
        <ul
            className={`
                h-full grid grid-cols-2 gap-x-[14px] gap-y-[10px] pb-[100px]
            `}>
            {Object.entries(parametrsList[isActiveWeather]).map((el, index) => {
                if (el[0] === 'id') {

                } else {
                    return (
                        <li key={Date.now() + index}>
                            <ParametrsItem
                                key={Date.now() + index}
                                nameData={el[0]}
                                data={el[1]}
                            />
                        </li>
                    );
                }
            })}
        </ul>
    );
}

export default ParametrsList;