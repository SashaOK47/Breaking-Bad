import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import CardList from "./components/organisms/CardList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CardList />
      </div>
    </div>
  );
}

export default App;
