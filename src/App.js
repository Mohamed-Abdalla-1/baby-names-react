import "./App.css";
import Names from "./Names";
import { useState } from "react";
import Search from "./Search";
import Favourites from "./Favourites";
import babyNamesData from "./babyNamesData.json";

function App() {
  function handleInput(event) {
    setBabyNames(
      babyNamesData.filter((baby) =>
        baby.name.toUpperCase().includes(event.target.value.toUpperCase())
      )
    );
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
        <Search inputSetter={handleInput} />
        <legend>
          <input type={"radio"} name="a" />
          <input type={"radio"} name="a" />
          <input type={"radio"} name="a" />
        </legend>
        <Favourites favourit={favourit} handleClick={removeFromFavouite} />
        <Names babyNames={babyNames} handleClick={addToFavouite} />
      </div>
    </div>
  );
}

export default App;
