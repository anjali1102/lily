import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherBody } from "./WeatherBody";
import "./WeatherBody.css";

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async (lat, long) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      fetchData(position.coords.latitude, position.coords.longitude);
    });
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
