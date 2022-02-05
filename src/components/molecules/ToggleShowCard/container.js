import ToggleShowCard from "./component";
import { useSelector, useDispatch } from "react-redux";
import { toggleGridtoList } from "../../../store/actions/characters";

const ToggleShowCardContainer = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.characters.isGrid);
  const clickHandler = () => {
    dispatch(toggleGridtoList(false));
  };
  const enterHandler = (e) => {
    if (e.key !== "Enter") return;
    dispatch(toggleGridtoList(false));
  };
  const clickHandlerActive = () => {
    dispatch(toggleGridtoList(true));
  };
  const enterHandlerActive = (e) => {
    if (e.key !== "Enter") return;
    dispatch(toggleGridtoList(true));
  };

  return (
    <ToggleShowCard
      grid={grid}
      clickHandler={clickHandler}
      clickHandlerActive={clickHandlerActive}
      enterHandler={enterHandler}
      enterHandlerActive={enterHandlerActive}
    />
  );
};
export const container = ToggleShowCardContainer;
