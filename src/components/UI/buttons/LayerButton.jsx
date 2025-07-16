import React from 'react';

const LayerButton = ({ isIcon, children }) => {

    return (
        <button
            className={`
                w-[358px] h-[36px] bg-red-950 rounded-[10px]
                flex items-center py-[7px] px-[16px] mt-[30px]
                ${isIcon ? 'justify-center' : 'justify-between'}
            `}>
            {children}
            {/* {isIcon ? : } */}
        </button>
    );
}

export default LayerButton;