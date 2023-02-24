import "./App.css";
import Names from "./Names";
import babyNamesData from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      <Names babyNames={babyNamesData} />
    </div>
  );
}

export default App;
