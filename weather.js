const COORDS = 'coords';

function handleGeoSucces(position){
    console.log(position);
}

function handleGeoError(){
    console.log("Can't access geo location ")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition();
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}
init();