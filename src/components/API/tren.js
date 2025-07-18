const buttonEl = document.querySelector('#button');
const inputEl = document.querySelector('input');
const array = [{name: "Москва"}]

buttonEl.addEventListener('click', () => {
    console.log("Array", array)
    console.log("Push", [...array, {name: "Питер"}])
    // fetchNow()
    // fetchOpenMeteo()
    // console.log(Array.from({
    //           humidity: "humidity_unit",
    //           visibility: 'visibility_unit',
    //           apparent: 'apparent_unit',
    //           pressure: 'pressure_unit',
    //           raddiance: 'raddiance_unit',
    //           wind: 'wind_unit'
    //         }));
    // fetchPost()
});

const fetchPost = () => {
    const city = inputEl.value;
    const limit = 5;
    const API = "122a5401a9947dd6776e0dd8e0eaf194";
    const geoCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API}`;
    fetch(String(geoCity))
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((er) => console.log("Error: ", er))
}

const fetchOpenMeteo = () => {
    const parametr = "temperature_2m";
    const param2 = "relative_humidity_2m";
    const param3 = "visibility";
    const param4 = "apparent_temperature";
    const param5 = "pressure_msl";
    const param6 = "direct_normal_irradiance";
    const param7 = "wind_gusts_10m";
    const urlAdr = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=${parametr}&hourly=${param2}&hourly=${param3}&hourly=${param4}&hourly=${param5}&hourly=${param6}&hourly=${param7}`;
    fetch(String(urlAdr))
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((er) => console.log("Error: ", er))
}

const fetchNow = () => {
    const urll = "http://ip-api.com/json/";
    fetch(String(urll))
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((er) => console.log("Error: ", er))
}