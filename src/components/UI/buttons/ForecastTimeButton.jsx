const ForecastTimeButton = ({ children, isActive }) => {


    return (
        <button
            className={`
                w-full h-[20px] relative
                ${isActive ? 'forecast-time' : ''}
            `}
        >
            {children}
        </button>
    );
}

export default ForecastTimeButton;