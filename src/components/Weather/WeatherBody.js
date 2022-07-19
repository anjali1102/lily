import React from "react";
import "./WeatherBody.css";

const WeatherBody = ({ weatherData }) => {
  return (
    <div className="weather_body">
      <h6>{~~weatherData.main.temp}°C</h6>
      <h6>{weatherData.name}</h6>
    </div>
  );
};

export { WeatherBody };
