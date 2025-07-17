import React, { useState, useContext } from 'react';
import ParametrsItem from '../elements/ParametrsItem';

const ParametrsList = ({ parametrsList }) => {
    const isActiveWeather = useContext;
    const nameListForUser = ['UV index ☀️', 'Wind 🌬️', 'Rainfall 🌧️', 'Feels like 🤒', 'Humidity 💧', 'Visibility 👁️'];
    const nameListForProgram = ['UV-index', 'Wind', 'Rainfall', 'Feels-like', 'humidity', 'visibility'];
    console.log(isActiveWeather)
    return (
        <ul
            className={`
                h-full grid grid-cols-2 gap-x-[14px] gap-y-[10px] pb-[100px]
            `}>
            {Object.entries(parametrsList[1]).map((el, index) => {
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