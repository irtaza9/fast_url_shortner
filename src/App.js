import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./components/BackgroundAnimation/BackgroundAnimate";
import InputShortener from "./components/InputShortener";
import LinkResult from "./components/API/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
