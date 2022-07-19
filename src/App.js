import { MainPage } from "./pages/MainPage/MainPage";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { useBrowserContext } from "./context/BrowserContext";
import { useEffect } from "react";

function App() {
  let wallpaper = "https://source.unsplash.com/1920x1080/?wallpaper";

  const { greetName, setGreetName } = useBrowserContext();
  useEffect(() => {
    setGreetName(localStorage.getItem("username"));
  }, []);

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {greetName ? <MainPage /> : <WelcomePage />}
    </div>
  );
}

export default App;
