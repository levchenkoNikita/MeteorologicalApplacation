import Geolocation from './Geolocation';
import AddCity from './AddCity';
import SafeList from './SafeList';

const Menu = ({ isGeolocation, onClickGeolocationButton, onClickAddCity, onClickSafeCity, safeList, onClickDeleteCity }) => {

    return (
        <div
            className="
                w-full h-[100px] bg-[#48319D] relative 
                top-full translate-y-[-100%] z-100
                flex items-end justify-between text-white
            "
        >
            <Geolocation
                isGeolocation={isGeolocation}
                onClick={onClickGeolocationButton}
            />
            <AddCity
                onClickAddCity={(valueInput, valueSelect, valueSave) => onClickAddCity(valueInput, valueSelect, valueSave)}
            />
            <SafeList safeList={safeList} onClickSafeCity={(nameCity) => onClickSafeCity(nameCity)} onClickDeleteCity={(nameCity) => onClickDeleteCity(nameCity)}/>
        </div>
    );
}

export default Menu;