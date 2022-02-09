import ToggleCountCard from "./component";
import { useSelector, useDispatch } from "react-redux";
import { UpdateItemsPerPage } from "../../../store/actions/characters";

const ToggleCountCardContainer = () => {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state) => state.characters.itemsPerPage);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const characters = useSelector((state) => state.characters.characters);

  let numbers = [];

  for (let i = 10; i <= 30; i++) {
    if (i % 5 == 0) {
      if (Math.ceil((currentPage - 1) * i) <= characters.length) {
        numbers.push(i);
      }
    }
  }

  const handleClick = (e) => {
    dispatch(UpdateItemsPerPage(Number(e.target.id)));
  };

  return (
    <ToggleCountCard
      numbers={numbers}
      handleClick={handleClick}
      itemsPerPage={itemsPerPage}
    />
  );
};
export const container = ToggleCountCardContainer;
