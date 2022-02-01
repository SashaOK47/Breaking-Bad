import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";
import { Link } from "react-router-dom";

const CharactersPage = () => {
  return (
    <div>
      <Link to="/">Main Page</Link>
      <h1 style={{ textAlign: "center" }}>Characters Page</h1>
      <CardList />
    </div>
  );
};

export default CharactersPage;
