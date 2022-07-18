import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MainPage/MainPage.css";
import { useDate } from "../../hooks/useDate";

const MainPage = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const { date, time, wish } = useDate();

  let wallpaper = "https://source.unsplash.com/1920x1080/?wallpaper";

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://api.quotable.io/random?maxLength=90"
        );
        console.log(res);
        setQuote({
          content: res.data.content.slice(0, -1),
          author: res.data.author,
        });
        console.log(quote);
      } catch (error) {
        console.log(error);
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
              {!!quote.content && (
                <code>
                  {quote.content} <i className="quote-i"> ~{quote.author}</i>
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
