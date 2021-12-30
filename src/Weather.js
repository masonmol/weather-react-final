import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Header row align-items-start">
        <div className="col-6 date">Sunday, December 12, 2021</div>
        <div className="col-6 time">12:00pm</div>
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
        <h1 className="city">New York</h1>
      </div>
      <div className="Row align-items-start mt-3">
        <div class="col-5">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              id="icon"
              className="float-left"
            />

            <span className="temperature">55</span>
            <span className="units"> °F</span>
          </div>
        </div>
        <div class="col-4">
          <ul className="conditions">
            <li>Clear Sky</li>
            <li>
              Hi/Lo: <span className="temp-high">67</span>°/
              <span className="temp-low">40</span>°
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="conditions">
            <li>
              Humidity: <span className="humidity">15</span>%
            </li>
            <li>
              Wind: <span className="wind">10</span> mph
            </li>
            <li>
              Feels Like: <span className="feels-like-temp">53</span>°
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
