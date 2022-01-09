import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function day() {
    let day = new Date(props.forecast.dt * 1000).getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecast d-flex justify-space-evenly flex-column align-items-center">
      <span>{day()}</span>
      <div className="icon-container">
        <WeatherIcon
          icon={props.forecast.weather[0].icon}
          description={props.forecast.weather[0].description}
          width="50px"
        />
      </div>

      <span>
        {Math.round(props.forecast.temp.max)}°/
        {Math.round(props.forecast.temp.min)}°
      </span>
    </div>
  );
}
