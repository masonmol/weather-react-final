import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import FormattedTime from "./FormattedTime.js";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "eda5f4c1faef5ba99e914999cfcb1292";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
