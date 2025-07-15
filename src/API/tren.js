const buttonEl = document.querySelector('#button');
const inputEl = document.querySelector('input');

buttonEl.addEventListener('click', () => {
    // 
    fetchOpenMeteo()
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
    const urlAdr = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=${parametr}&hourly=${param2}&hourly=${param3}`;
    fetch(String(urlAdr))
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((er) => console.log("Error: ", er))
}