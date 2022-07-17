import React from "react";
import "../../App.css";
import { useDate } from "../../hooks/useDate";

const MainPage = () => {
  const { date, time, wish } = useDate();

  let wallpaper = "https://source.unsplash.com/1920x1080/?wallpaper";

  return (
    <div className="App">
      <img src={wallpaper} className="image_container" alt="wallpaper" />
      <div className="time_container">
        <span>{wish}</span>
        <h1>{time}</h1>
        <span>{date}</span>
      </div>
    </div>
  );
};

export { MainPage };
