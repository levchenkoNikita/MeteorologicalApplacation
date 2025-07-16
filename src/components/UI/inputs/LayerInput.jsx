const LayerInput = ({ value, onChange}) => {

    return (
        <div className="relative mt-[40px] border-b-1 border-white pb-[20px]">
            <div className="w-[16px] aspect-[1] absolute top-[10px] left-[8px] flex items-center justify-center">
                <svg height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3">
                    <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 
                        0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 
                        0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" 
                    />
                </svg>
            </div>
            <input
                type="text"
                className={`
                w-[358px] h-[36px] bg-red-950 rounded-[10px]
                py-[7px] pl-[26px] pr-[16px] outline-none
                border-1 border-transparent
                focus:border-white
            `}
                placeholder="Search city..."
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}

export default LayerInput;