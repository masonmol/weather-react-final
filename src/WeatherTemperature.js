import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="units">°F</span>
    </span>
  );
}
