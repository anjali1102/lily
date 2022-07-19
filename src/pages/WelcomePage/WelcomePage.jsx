import React from "react";
import "./WelcomePage.css";
import { useBrowserContext } from "../../context/BrowserContext";

const WelcomePage = () => {
  const { setGreetName } = useBrowserContext();

  const greetNameInputHandler = (e) => {
    const inputValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setGreetName(inputValue);
    localStorage.setItem("username", `${inputValue}`);
  };

  return (
    <div className="welc-container">
      <div className="welc-msg">Hello 👋, What's your name</div>
      <input
        type="text"
        placeholder="Press Enter"
        className="welc-input"
        onKeyDown={(e) =>
          e.code === "Enter" &&
          e.target.value !== "" &&
          greetNameInputHandler(e)
        }
      />
    </div>
  );
};

export { WelcomePage };
