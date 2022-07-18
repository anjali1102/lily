import { useEffect, useState } from "react";
import { WeatherBody } from "./WeatherBody";
import "./WeatherBody.css";

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
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
