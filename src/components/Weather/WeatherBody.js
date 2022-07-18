import React from "react";
import "./WeatherBody.css";

const WeatherBody = ({ weatherData }) => {
  return (
    <div className="weather_body">
      <h1>{~~weatherData.main.temp}°C</h1>
      <h3>{weatherData.name}</h3>
    </div>
  );
};

export { WeatherBody };
