import CardList from "./component";
import { useSelector } from "react-redux";

const CardListContainer = () => {
  const persons = useSelector((state) => state.persons.persons);
  return <CardList persons={persons} />;
};
export const container = CardListContainer;
// export default CardListContainer;
