const AddCityButton = ({ isActive, onClick }) => {

    return (
        <div className="w-[64px] aspect-[1] add-city-button-border flex items-center justify-center">
            <button
                className="w-[58px] aspect-[1] add-city-button rounded-full relative hover:w-[64px]"
                onClick={onClick}
            >
                <div
                    className={`
                    w-[28px] h-[4px] bg-[#48319D] rounded-[2px] absolute top-[50%] left-[50%] translate-[-50%]
                `}
                >

                </div>
                <div className={`
                w-[28px] h-[4px] bg-[#48319D] rounded-[2px] 
                absolute top-[50%] left-[50%] translate-[-50%] 
                duration-[0.2s]
                ${isActive ? '' : 'rotate-[90deg]'}
                `}
                >

                </div>
            </button>
        </div>
    );
}

export default AddCityButton;