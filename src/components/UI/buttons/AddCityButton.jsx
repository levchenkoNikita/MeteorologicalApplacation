const AddCityButton = ({ isActive, onClick }) => {

    return (
        <button
        className="w-[64px] aspect-[1] bg-red-950 rounded-full relative"
        onClick={onClick}
        >
            <div
                className={`
                    w-[28px] h-[4px] bg-violet-600 rounded-[2px] absolute top-[50%] left-[50%] translate-[-50%]
                `}
            >

            </div>
            <div className={`
                w-[28px] h-[4px] bg-violet-600 rounded-[2px] 
                absolute top-[50%] left-[50%] translate-[-50%] 
                duration-[0.2s]
                ${isActive ? '' : 'rotate-[90deg]'}
                `}
            >

            </div>
        </button>
    );
}

export default AddCityButton;