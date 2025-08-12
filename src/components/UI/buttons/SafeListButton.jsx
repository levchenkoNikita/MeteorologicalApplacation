const SafeListButton = ({isActive, onClick}) => {

    return (
        <button
            className={`
                size-full flex items-end justify-end duration-[0.2s] pb-[25px] pr-[22%]
                ${isActive ? 'bg-white text-black' : 'bg-[#48319D] text-white'}
            `}
            onClick={onClick}
        >
            List
        </button>
    );
}

export default SafeListButton;