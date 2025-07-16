import React from 'react';

const LayerButton = ({ isActive, isIcon, children }) => {

    return (
        <button
            className={`
                w-[358px] h-[36px]  rounded-[10px]
                flex items-center py-[7px] px-[16px] mt-[30px]
                ${isIcon ? 'justify-between' : 'justify-center'}
                ${isActive ? 'bg-blue-500' : 'bg-red-950 active:bg-blue-500'}
            `}>
            {children}
            {isIcon
                ? <div className='w-[20px] apsect-[1] flex justify-center items-center'>
                    <svg height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3">
                        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3
                         240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186
                         698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120
                          0h72v-336h-72v336ZM312-696v480-480Z"/>
                    </svg>
                </div>
                : null
            }
        </button>
    );
}

export default LayerButton;