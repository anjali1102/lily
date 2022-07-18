import { useEffect, useState } from "react";
import { WeatherBody } from "./WeatherBody";
import "./WeatherBody.css";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  const REACT_APP_API_KEY = "c962ed695546773fa54252b994d33923";

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  return (
    <div>
      {typeof data.main !== "undefined" ? (
        <WeatherBody weatherData={data} />
      ) : (
        <div className="loading_class">🌡️</div>
      )}
    </div>
  );
};

export { Weather };
