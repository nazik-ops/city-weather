let cityName=document.getElementById("cityName")
let btn=document.getElementById('btn')
const API='cc6fa2ec0a4418809454220887c87f7f'
const getWeather=()=>{ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${API}`)
    .then( result=> result.json())
    .then( data=>{
        console.log(data)   
          document.getElementById('city').innerText = data.name;
        document.getElementById('temp').innerText = data.main.temp; 
        document.getElementById('desc').innerText = data.weather[0].main; 
    })
}
