const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = 'coords';
const weather = document.querySelector(".weather");

async function getWeather(lat, lng) {
    const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    const json = await result.json();
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}˚ - ${place}`
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}

function handleGeoError(){
    console.log("Can't access geo location ")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    }else{
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();