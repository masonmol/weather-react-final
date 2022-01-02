import React from "react";

export default function FormattedDate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div>
      {month} {date}, {year}
    </div>
  );
}
