import SafeListButton from './UI/buttons/SafeListButton';

const SafeList = ({ isActive, setIsActive }) => {

    function handleClick() {
        setIsActive();
    }

    return (
        <div className='size-full'>
            <SafeListButton isActive={isActive} onClick={handleClick}/>
        </div>
    );
}

export default SafeList;