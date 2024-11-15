import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import languages from "./data/languages";

function App() {
  const [active, setActive] = useState(0);

  function handleClick(e) {
    console.log(e.target);
    const newActive = Number(e.target.getAttribute("data-index"));

    setActive(newActive);
  }

  return (
    <>
      <AppHeader />

      <div className="container">
        <div className="buttons-container">
          {languages.map((item, index) => (
            <button
              className={`language-button ${item.title}`}
              key={item.id}
              onClick={handleClick}
              data-index={index}
            >
              {item.title}
            </button>
          ))}
        </div>

        {languages.map((item, index) => (
          <div
            key={item.id}
            className={active == index ? "description-card" : "hide"}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
