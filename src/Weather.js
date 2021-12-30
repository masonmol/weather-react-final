import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Sunday, December 12, 2021",
      time: "12:00pm",
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Header row align-items-start">
          <div className="col-6 date">{weatherData.date}</div>
          <div className="col-6 time">{weatherData.time}</div>
        </div>
        <form className="Search">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
              <i className="fa fas fa-location-arrow"></i>
            </div>
          </div>
        </form>
        <div className="Overview">
          <h1 className="city">{weatherData.city}</h1>
        </div>
        <div className="Row align-items-start mt-3">
          <div class="col-5">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> °F</span>
            </div>
          </div>
          <div class="col-4">
            <ul className="conditions">
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Hi/Lo:{" "}
                <span className="temp-high">
                  {Math.round(weatherData.tempHigh)}
                </span>
                °/
                <span className="temp-low">
                  {Math.round(weatherData.tempLow)}
                </span>
                °
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="conditions">
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind:{" "}
                <span className="wind">{Math.round(weatherData.wind)}</span> mph
              </li>
              <li>
                Feels Like:{" "}
                <span className="feels-like-temp">
                  {Math.round(weatherData.feelsLike)}
                </span>
                °
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "eda5f4c1faef5ba99e914999cfcb1292";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
