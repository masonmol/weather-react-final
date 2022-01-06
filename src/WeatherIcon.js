import React from "react";

export default function WeatherIcon(props) {
  console.log("ICON", props);
  let url = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <img style={{ width: props.width }} src={url} alt={props.description} />
  );
}
