import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import WeatherForecast from './components/WeatherForecast';
import Display from './components/Display';
import useSafeList from './components/Hooks/useDataSafeList';
import useDataWeatherList from './components/Hooks/useDataWeatherList';
import useDataParametrsList from './components/Hooks/useDataParametrsList';
import createArrOfObj from './components/Scripts/createArrOfObj';

function App() {
  const API = "122a5401a9947dd6776e0dd8e0eaf194";
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false);
  const [isGeolocation, setIsGeolocation] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [changeCity, setChangeCity] = useState({ valueInput: '', valueSelect: false, valueSave: false });
  const [currentCity, setCurrentCity] = useState({ regionName: '', country: '', lat: 0, lon: 0 });
  const [safeList, setSafeList] = useSafeList([{}]);
  const [weatherList, setWeatherList] = useDataWeatherList({ id: 8, time: '12:00', temperature: '1C' });
  const [parametrsList, setParametrsList] = useDataParametrsList({ id: 8, nameData: "UV-index", data: '11' });

  function handleClick() {
    setIsActive(!isActive);
  }

  function handleGeolocationButton() {
    setIsGeolocation(!isGeolocation);
  }

  function handleAddCity(valueI, valueSl, valueSv) {
    setChangeCity({ valueInput: valueI, valueSelect: valueSl, valueSave: valueSv });
  }

  function handleSafeCity(nameCity) {
    setChangeCity({ valueInput: nameCity, valueSelect: false, valueSave: false });
  }

  function deleteSafeCity(nameCity) {
    const newArray = [...safeList];
    const index = newArray.findIndex(city => city.regionName === nameCity);
    if (index !== -1) {
      newArray.splice(index, 1);
      setSafeList(newArray);
    }
  }

  useEffect(() => {
    if (isGeolocation) {
      // const proxy = 'https://api.allorigins.win/raw?url=';
      // const urladfa = 'https://freegeoip.app/json/';
      // fetch(String('https://freegeoip.app/json/'))
      //   .then((response) => response.json())
      //   .then((data) => {
      // console.log(data)
      // const regionName= data[city];
      // const country = data[country_name];
      // const lat = data[latitude];
      // const lon = data[longitude];
      const regionName = "Russia";
      const country = "Sevastopol";
      const lat = 44.5888290405273;
      const lon = 33.5223999023438;
      setCurrentCity({ regionName, country, lat, lon });
      setIsLoading(false);
      // })
      // .catch((er) => console.log("Error: ", er));
    }
  }, [isGeolocation]);

  useEffect(() => {
    if (changeCity.valueInput.length > 1) {
      const geoCity = `https://api.openweathermap.org/geo/1.0/direct?q=${changeCity.valueInput}&limit=1&appid=${API}`;
      fetch(String(geoCity))
        .then((response) => response.json())
        .then((data) => {
          const { name, country, lat, lon } = data[0];
          setCurrentCity({ name, country, lat, lon });
          if (changeCity.valueSave) {
            setSafeList([...safeList, { id: Date.now(), regionName: changeCity.valueInput }]);
          }
        })
        .catch((er) => console.log("Error: ", er));
    }
  }, [changeCity]);

  useEffect(() => {
    if (currentCity.name !== '') {
      const temperature = "temperature_2m";
      const humidity = "relative_humidity_2m";
      const visibility = "visibility";
      const apparent = "apparent_temperature";
      const pressure = "pressure_msl";
      const raddiance = "direct_normal_irradiance";
      const wind = "wind_gusts_10m";
      const urlAdr = `https://api.open-meteo.com/v1/forecast?latitude=${currentCity.lat}&longitude=${currentCity.lon}&hourly=${temperature}&hourly=${humidity}&hourly=${visibility}&hourly=${apparent}&hourly=${pressure}&hourly=${raddiance}&hourly=${wind}`;

      fetch(String(urlAdr))
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          const timeString = Object.values(data.hourly.time).slice(0, 24);
          const time = timeString.map((el) => el.slice(11, 16));
          const time_unit = ' ';
          const temperature = Object.values(data.hourly['temperature_2m'].slice(0, 24));
          const temperature_unit = 'С°';
          setWeatherList(createArrOfObj(24,
            [
              time,
              temperature
            ],
            {
              time: time_unit,
              temperature: temperature_unit
            }
          ));
          //
          //
          const humidity = Object.values(data.hourly['relative_humidity_2m']).slice(0, 24);
          const humidity_unit = data['hourly_units']['relative_humidity_2m'];
          const visibility = Object.values(data.hourly['visibility']).slice(0, 24);
          const visibility_unit = data['hourly_units']['visibility'];
          const apparent = Object.values(data.hourly['apparent_temperature']).slice(0, 24);
          const apparent_unit = data['hourly_units']['apparent_temperature'];
          const pressure = Object.values(data.hourly['pressure_msl']).slice(0, 24);
          const pressure_unit = data['hourly_units']['pressure_msl'];
          const raddiance = Object.values(data.hourly['direct_normal_irradiance']).slice(0, 24);
          const raddiance_unit = data['hourly_units']['direct_normal_irradiance'];
          const wind = Object.values(data.hourly['wind_gusts_10m']).slice(0, 24);
          const wind_unit = data['hourly_units']['wind_gusts_10m'];
          setParametrsList(createArrOfObj(24,
            [
              humidity,
              visibility,
              apparent,
              pressure,
              raddiance,
              wind
            ],
            {
              'Humidity 💧': humidity_unit,
              'Visibility 👁️': visibility_unit,
              'Feels like 🤒': apparent_unit,
              'Rainfall 🌧️': pressure_unit,
              'UV index ☀️': raddiance_unit,
              'Wind 🌬️': wind_unit
            }
          ));
        })
        .catch((er) => console.log("Error: ", er));
    }
  }, [currentCity]);

  if (isLoading) return (
    <div>
      Loading...
    </div>
  )

  return (
    <div className='w-screen h-screen bg-blue-400 bg-[url("../assets/images/bg.png")] bg-center bg-cover bg-no-repeat overflow-hidden'>

      <Display city={currentCity} temperature={weatherList} />

      <WeatherForecast
        isActive={isActive}
        onClick={handleClick}
        weatherList={weatherList}
        parametrsList={parametrsList}
      />

      <Menu
        isGeolocation={isGeolocation}
        onClickGeolocationButton={handleGeolocationButton}
        onClickSafeCity={handleSafeCity}
        onClickDeleteCity={deleteSafeCity}
        safeList={safeList}
        onClickAddCity={(valueInput, valueSelect, valueSave) => handleAddCity(valueInput, valueSelect, valueSave)}
      />

      <div className='w-[390px] aspect-[1] absolute top-[60%] left-[50%] translate-[-50%] bg-transparent bg-[url("../assets/images/house.png")]'></div>
    </div>
  )
}

export default App;