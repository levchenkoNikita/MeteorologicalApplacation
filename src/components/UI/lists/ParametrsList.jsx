import React, { useState } from 'react';
import ParametrsItem from '../elements/ParametrsItem';

const ParametrsList = () => {
    const [dataList, setDataList] = useState([
        { id: 1, nameData: "UV-index", data: '11' },
        { id: 2, nameData: "UV-index", data: '11' },
        { id: 3, nameData: "UV-index", data: '11' },
        { id: 4, nameData: "UV-index", data: '11' },
        { id: 5, nameData: "UV-index", data: '11' },
        { id: 6, nameData: "UV-index", data: '11' },
        { id: 7, nameData: "UV-index", data: '11' },
        { id: 8, nameData: "UV-index", data: '11' }
    ]);

    return (
        <ul
            className={`
                h-full grid grid-cols-2 gap-x-[14px] gap-y-[10px] pb-[100px]
            `}>
            {dataList.map((el) => (
                <li key={el.id}>
                    <ParametrsItem
                        key={el.id}
                        nameData={el.nameData}
                        data={el.data}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ParametrsList;