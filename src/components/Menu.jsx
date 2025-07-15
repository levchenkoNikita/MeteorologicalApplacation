import React from 'react';
import Geolocation from './Geolocation';
import AddCity from './AddCity';
import SafeList from './SafeList';

const Menu = () => {

    return (
        <div
            className="
                w-full h-[100px] bg-[#48319D] absolute 
                top-full translate-y-[-100%] z-4
                flex items-end justify-between text-white
            "
        >
            <Geolocation />
            <AddCity />
            <SafeList />
        </div>
    );
}

export default Menu;