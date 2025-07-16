const SafeListButton = ({isActive, onClick}) => {

    return (
        <button
            className={`
                size-full flex items-center justify-center duration-[0.2s]
                ${isActive ? 'bg-white text-black' : 'bg-transparent text-white'}
            `}
            onClick={onClick}
        >
            List
        </button>
    );
}

export default SafeListButton;