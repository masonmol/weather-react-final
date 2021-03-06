import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <h1 className="city mt-3">{props.data.city}</h1>
      </div>
      <div className="Row align-items-start mt-3">
        <div className="col-5">
          <div className="clearfix">
            <WeatherIcon
              icon={props.data.icon}
              description={props.data.description}
            />

            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul className="conditions">
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Hi/Lo:{" "}
              <span className="temp-high">
                {Math.round(props.data.tempHigh)}
              </span>
              °/
              <span className="temp-low">{Math.round(props.data.tempLow)}</span>
              °
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="conditions">
            <li>
              Humidity: <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{Math.round(props.data.wind)}</span>{" "}
              mph
            </li>
            <li>
              Feels Like:{" "}
              <span className="feels-like-temp">
                {Math.round(props.data.feelsLike)}
              </span>
              °
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
