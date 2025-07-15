import React from 'react';

const AddCityLayerButton = ({ isIcon, children }) => {

    return (
        <button
            className={`
                w-[358px] h-[36px] bg-red-950 rounded-[10px]
                flex items-center justify-between py-[7px] px-[16px]
            `}>
            {children}
            {/* {isIcon ? : } */}
        </button>
    );
}

export default AddCityLayerButton;