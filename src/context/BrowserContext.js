import { createContext, useContext, useState } from "react";

const BrowserContext = createContext();

const CommonProvider = ({ children }) => {
  const [greetName, setGreetName] = useState("");
  const [mainFocus, setMainFocus] = useState("");
  return (
    <BrowserContext.Provider value={{ greetName, mainFocus, setGreetName, setMainFocus }}>
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowserContext = () => useContext(BrowserContext);

export { useBrowserContext, CommonProvider };
