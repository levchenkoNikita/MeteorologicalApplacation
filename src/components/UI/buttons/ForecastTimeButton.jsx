const ForecastTimeButton = ({children}) => {


    return (
        <button
            className={`
                w-full h-[20px]
            `}
        >
            {children}
        </button>
    );
}

export default ForecastTimeButton;