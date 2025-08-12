const GeolocationButton = ({ isActive, onClick }) => {

    return (
        <button
            className={`
                size-full flex items-end justify-start duration-[0.2s] pb-[25px] pl-[22%]
                ${isActive ? 'bg-white text-black' : 'bg-[#48319D] text-white'}
            `}
            onClick={onClick}
            >
            Geo
        </button>
    );
}

export default GeolocationButton;