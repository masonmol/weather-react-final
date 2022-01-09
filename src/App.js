import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="footer">
          This website was coded by{" "}
          <a
            href="https://infallible-bhaskara-573893.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Morgan Mason
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/masonmol/weather-react-final"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
