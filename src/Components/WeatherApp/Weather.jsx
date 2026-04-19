import React, { useState } from 'react'
import './weather.css'

const Weather = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

    const handleCityChange = (event) => {
        setCity(event.target.value);
        console.log(city);
    }

    const handleGetWeather = () => {
        fetchWeather(); 
    }

    const fetchWeather = async () => {
        try{
            const getLatLong = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${'f4e36c8f32abbe1b0262d3394b428531'}`);
            
            const getData = await getLatLong.json();

            const lat = getData[0].lat;
            const lon = getData[0].lon;
            
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'f4e36c8f32abbe1b0262d3394b428531'}`);

            const weather = await weatherData.json();
            setWeather(weather);
            console.log(weather);
        }
        catch(error){
            console.log("error ", error);
        }
    }

  return (
    <div className='weather-container'>
      <input type='text' placeholder='enter city' value={city} onChange={handleCityChange}/>
      <button onClick={handleGetWeather}>Get weather</button>
      {
        weather && 
        <div className='weather-data'>
            <h3>Humidity - {weather.main.humidity}</h3>
            <h3>Temperature - {weather.main.temp - 273.15}</h3>
        </div>
      }
    </div>
  )
}

export default Weather
