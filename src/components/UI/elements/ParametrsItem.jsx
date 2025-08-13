const ParametrsItem = ({nameData, data}) => {
    return ( // bg-[#48319D]
        <article className={`w-[164px] aspect-[1] bg-transparent rounded-[22px] flex flex-col items-center justify-center`}>
            <div>
                {nameData}
            </div>
            <div>
                {data}
            </div>
        </article>
    );
}

export default ParametrsItem