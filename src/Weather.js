import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import FormattedTime from "./FormattedTime.js";
import WeatherForecast from "./WeatherForecast.js";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
    });

    const apiKey = "eda5f4c1faef5ba99e914999cfcb1292";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude={part}&appid=${apiKey}&units=imperial`;
    axios.get(forecastUrl).then(handleForecastResponse);
  }

  function handleForecastResponse(response) {
    setForecastData({ ready: true, data: response.data.daily });
  }

  async function search() {
    const apiKey = "eda5f4c1faef5ba99e914999cfcb1292";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    await axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready && forecastData.ready) {
    return (
      <div className="Weather">
        <div className="Header row align-items-start">
          <div className="col-6 date">
            <FormattedDate date={weatherData.date} />
          </div>
          <div className="col-6 time">
            <FormattedTime date={weatherData.time} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <div className="d-flex justify-content-evenly">
          <WeatherForecast forecast={forecastData.data[1]} />
          <WeatherForecast forecast={forecastData.data[2]} />
          <WeatherForecast forecast={forecastData.data[3]} />
          <WeatherForecast forecast={forecastData.data[4]} />
          <WeatherForecast forecast={forecastData.data[5]} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
