import "./App.css";
import Names from "./Names";
import babyNamesData from "./babyNamesData.json";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <input
          className="input"
          placeholder="Search for a name..."
          value={value}
          type="text"
          onInput={(event) => handleInput(event)}
        />
        <Names babyNames={babyNamesData} input={value} />
      </div>
    </div>
  );
}

export default App;
