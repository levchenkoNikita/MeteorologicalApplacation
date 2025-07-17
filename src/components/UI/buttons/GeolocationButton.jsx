const GeolocationButton = ({ isActive, onClick }) => {

    return (
        <button
            className={`
                size-full flex items-center justify-center duration-[0.2s]
                ${isActive ? 'bg-white text-black' : 'bg-[#48319D] text-white'}
            `}
            onClick={onClick}
            >
            Geo
        </button>
    );
}

export default GeolocationButton;