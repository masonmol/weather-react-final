import React, { useState } from "react";

export default function FormattedTime(props) {
  function convertToStandardTime(hour, minute) {
    let meridiem;

    if (minute < 10) {
      minute = "0" + minute;
    }

    if (hour >= 12) {
      meridiem = "pm";
    } else {
      meridiem = "am";
    }

    if (hour > 12) {
      return `${hour - 12}:${minute} ${meridiem}`;
    } else {
      return `${hour}:${minute} ${meridiem}`;
    }
  }

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  return <div>{convertToStandardTime(hours, minutes)}</div>;
}
