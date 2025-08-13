const BrowButton = ({onClick}) => {
    return (
        <button className={`
                w-[48px] h-[10px] bg-transparent mt-[10px]
            `}
            onClick={onClick}
            >
            <div className={`
                w-full h-[5px] bg-[rgba(0,0,0,0.3)] rounded-[10px]
            `}>

            </div>
        </button>
    );
}

export default BrowButton;