import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MainPage/MainPage.css";
import { useDate } from "../../hooks/useDate";
import { Weather } from "../../components/Weather/Weather";
import { useBrowserContext } from "../../context/BrowserContext";

const MainPage = () => {
  const { greetName, setGreetName, mainFocus, setMainFocus } =
    useBrowserContext();

  const initialValues = {
    content: "Source of Wisdom is Pain",
    author: "Naval",
  };

  // const [greet, setGreetName] = useState("anjali");
  const [quote, setQuote] = useState(initialValues);
  // const [mainFocus, setMainFocus] = useState("deafaultFocus");
  const { time, wish } = useDate();

  const { content, author } = quote;

  const editNameHandler = () => {
    setGreetName("");
    localStorage.setItem("username", "");
  };

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
    <div className="main-page-container">
      <span className="time-cont">{time}</span>
      <div className="greeting-wrapper">
        <span className="greet-cont">{wish}</span> {greetName}.
      </div>
      <div className="main-focus-wrapper">
        {mainFocus ? (
          <div className="main-focus">My main focus is : {mainFocus} </div>
        ) : (
          <input
            className="main-focus-input"
            type="text"
            placeholder="Enter your main focus"
          />
        )}
      </div>
      <div className="quote_main_container">
        <div className="quote-content">{content}</div>
        <div className="quote-author">{author}</div>
      </div>
      <Weather />
      {greetName !== null && (
        <button
          className="btn btn-name"
          onClick={() => {
            editNameHandler();
          }}
        >
          Edit Name
        </button>
      )}
      {mainFocus !== null && (
        <button className="btn btn-focus">Edit Focus |</button>
      )}
    </div>
  );
};

export { MainPage };
