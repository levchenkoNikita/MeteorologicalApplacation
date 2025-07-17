import React, { useState } from 'react';
import ParametrsItem from '../elements/ParametrsItem';

const ParametrsList = ({ parametrsList }) => {

    const nameListForUser = ['UV index ☀️', 'Wind 🌬️', 'Rainfall 🌧️', 'Feels like 🤒', 'Humidity 💧', 'Visibility 👁️'];
    const nameListForProgram = ['UV-index', 'Wind', 'Rainfall', 'Feels-like', 'humidity', 'visibility'];

    return (
        <ul
            className={`
                h-full grid grid-cols-2 gap-x-[14px] gap-y-[10px] pb-[100px]
            `}>
            {parametrsList.map((el, index) => (
                <li key={el.id}>
                    <ParametrsItem
                        key={el.id}
                        nameData={nameListForUser[index]}
                        data={el[nameListForProgram[4]]}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ParametrsList;