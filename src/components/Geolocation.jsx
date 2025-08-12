import GeolocationButton from './UI/buttons/GeolocationButton';

const Geolocation = ({isGeolocation, onClick}) => {


    return (
        <div className='size-full'>
            <GeolocationButton isActive={isGeolocation} onClick={onClick}/>
        </div>
    );
}

export default Geolocation;