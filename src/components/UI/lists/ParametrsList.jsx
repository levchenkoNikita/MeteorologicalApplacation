import React, { useState } from 'react';
import ParametrsItem from '../elements/ParametrsItem';

const ParametrsList = ({ parametrsList }) => {

    return (
        <ul
            className={`
                h-full grid grid-cols-2 gap-x-[14px] gap-y-[10px] pb-[100px]
            `}>
            {parametrsList.map((el) => (
                <li key={el.id}>
                    <ParametrsItem
                        key={el.id}
                        nameData={el.humidity}
                        data={el.visibility}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ParametrsList;