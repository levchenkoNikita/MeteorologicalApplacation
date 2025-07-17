import React from 'react';
import Time from './UI/elements/Time';
import City from './UI/elements/City';

const Display = () => {

    return (
        <div className="w-full h-[183px] mt-[98px] bg-amber-300 absolute flex flex-col items-center justify-center text-white">
            <Time></Time>
            <City></City>
        </div>
    );
}

export default Display;