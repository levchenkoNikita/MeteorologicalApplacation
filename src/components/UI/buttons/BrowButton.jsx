const BrowButton = ({onClick}) => {
    return (
        <button className={`
                w-[48px] h-[10px] bg-transparent mt-[10px]
            `}
            onClick={onClick}
            >
            <div className={`
                w-full h-[5px] bg-amber-400 rounded-[10px]
            `}>

            </div>
        </button>
    );
}

export default BrowButton;