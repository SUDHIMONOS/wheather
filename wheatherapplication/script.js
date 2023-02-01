function getWeather(){
    let cityName=id_city.value;
    console.log(cityName);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))
   
      

}


function displayWeather(data){
  // temparature
  // min temp
  // max temp
  let temparature=data.main.temp;
  let minTemp=data.main.temp_min;
  let maxTemp=data.main.temp_max;
  
  id_location.innerHTML=`<h1 class="text-center">Weather in ${data.name}</h1>`

  let htmlData=`
  
  <div class="card text-center">
  <div class="card-header">
    Temparature Info
  </div>
  <div class="card-body">
    <h5 class="card-title">Temparature is ${temparature}</h5>
    <p class="card-text">Min Temp ${minTemp}</p>
    <p class="card-text">Min Temp ${maxTemp}</p>
  </div>
  <div class="card-footer text-muted">
   Today
  </div>
</div>
  `
let humidity=data.main.humidity;
let windDegree=data.wind.deg;
let feelsLike=data.main.feels_like;

let humidityData=`
<div class="card text-center">
  <div class="card-header">
      Humidity Info
  </div>
  <div class="card-body">
    <h5 class="card-title">${humidity}</h5>
    <p class="card-text">Wind degree is ${windDegree}</p>
    <p class="card-text">Feels Like ${feelsLike}</p>
    <p class="card-text">humidity ${humidity}</p>

  </div>
  <div class="card-footer text-muted">
   Today
  </div>
</div>
`




  let widSpeed=data.wind.speed;
  let sunRise=data.sys.sunrise;
  let sunSet=data.sys.sunset;


let windData=`
<div class="card text-center">
  <div class="card-header">
      Wind Info
  </div>
  <div class="card-body">
    <h5 class="card-title">wind Speed ${widSpeed}</h5>
    <p class="card-text">SunRise ${sunRise}</p>
    <p class="card-text">sunset ${sunSet}</p>

  </div>
  <div class="card-footer text-muted">
   Today
  </div>
</div>
`
id_temp.innerHTML=htmlData
id_humidity.innerHTML=humidityData
id_wind.innerHTML=windData


}


function getWeatherByLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
      let lat=pos.coords.latitude;
      let long=pos.coords.longitude
      console.log(lat,long);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0e4e2433e501f8f56c7f4ba4ba8dac15`).
      then(res=>res.json()).then(data=>displayWeather(data))
  
    })
  }
 
}

