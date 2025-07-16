import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import WeatherForecast from './components/WeatherForecast';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false);
  const [isGeolocation, setIsGeolocation] = useState(true);
  const [changeCity, setChangeCity] = useState({valueInput: '', valueSelect: false, valueSave: false});

  function handleClick() {
    setIsActive(!isActive); 
  }

  function handleGeolocationButton() {
    setIsGeolocation(!isGeolocation);
  }

  function handleAddCity(valueInput, valueSelect, valueSave) {
    setChangeCity({valueInput: valueInput, valueSelect: valueSelect, valueSave: valueSave});
  }

  useEffect(() => {
    console.log(changeCity);
  }, [changeCity]);

  return (
    <div className='w-screen h-screen bg-blue-400 bg-[url("./assets/images/background-image.png")] overflow-hidden relative'>
      {/* <Display /> */}

      <WeatherForecast
        isActive={isActive}
        onClick={handleClick}
      />

      <Menu
        isGeolocation={isGeolocation}
        onClickGeolocationButton={handleGeolocationButton}
        onClickAddCity={() => handleAddCity(valueInput, valueSelect, valueSave)}
      />

      <div className='w-[390px] aspect-[1] absolute top-[60%] left-[50%] translate-[-50%] bg-red-300 bg-[url("./assets/images/house.png")]'></div>
    </div>
  )
}

export default App
