import "./App.css";
import Names from "./Names";
import { useState } from "react";
import Search from "./Search";
import Favourites from "./Favourites";
import babyNamesData from "./babyNamesData.json";

function App() {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  const [favourit, setFavourit] = useState([]);
  const [babyNames, setBabyNames] = useState(babyNamesData);

  function addToFavouite(e) {
    setFavourit(
      favourit.concat(
        babyNames.filter((baby) => baby.name === e.target.textContent)
      )
    );
    setBabyNames(
      babyNames.filter((baby) => baby.name !== e.target.textContent)
    );
  }

  function removeFromFavouite(e) {
    setBabyNames(
      babyNames.concat(
        favourit.filter((baby) => baby.name === e.target.textContent)
      )
    );

    setFavourit(favourit.filter((baby) => baby.name !== e.target.textContent));
  }

  return (
    <div className="App">
      <div className="container">
        <Search value={value} inputSetter={handleInput} />
        <Favourites favourit={favourit} handleClick={removeFromFavouite} />
        <Names
          babyNames={babyNames}
          input={value}
          handleClick={addToFavouite}
        />
      </div>
    </div>
  );
}

export default App;
