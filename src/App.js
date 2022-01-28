import "./assets/styles/main.scss";
import CardList from "./components/organisms/CardList";
import { useSelector } from "react-redux";

function App() {
  const number = useSelector((state) => state.number.number);
  return (
    <div className="App">
      <div className="container">
        {number}
        <CardList />
      </div>
    </div>
  );
}

export default App;
