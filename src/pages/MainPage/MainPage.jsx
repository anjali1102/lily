import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MainPage/MainPage.css";
import { useDate } from "../../hooks/useDate";

const MainPage = () => {
  const initialValues = {
    content: "Source of Wisdom is Pain",
    author: "Naval",
  };
  const [quote, setQuote] = useState(initialValues);
  const { date, time, wish } = useDate();

  let wallpaper = "https://source.unsplash.com/1920x1080/?wallpaper";

  const { content, author } = quote;

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.quotable.io/random?maxLength=90"
        );
        setQuote({
          content: res.data.content.slice(0, -1),
          author: res.data.author,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="App">
        <img src={wallpaper} className="image_container" alt="wallpaper" />
        <div className="time_container">
          <span>{wish}</span>
          <h1>{time}</h1>
          <span>{date}</span>
          <div className="quote_main_container">
            <div className="quote_container">
              {!!content && (
                <code>
                  {content} <i className="quote-i"> ~{author}</i>
                </code>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MainPage };
