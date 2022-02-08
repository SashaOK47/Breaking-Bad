import PropTypes from "prop-types";
import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import ToggleShowCard from "../../molecules/ToggleShowCard";
import Pagination from "../../molecules/Pagination";
import ToggleCountCard from "../../molecules/ToggleCountCard";

const CardList = ({ characters, isLoader, grid }) => {
  let catalog = style.catalog;
  if (!grid) {
    catalog += ` ${style.list}`;
  }

  const card = characters.map((character) => (
    <Card character={character} key={character.char_id} grid={grid} />
  ));
  return (
    <div className={style.cardList}>
      <div className={catalog}>
        <div className={style.wrapper}>
          <h2 className={style.title}>Каталог</h2>
          <ToggleShowCard />
        </div>
        <div className={style.heading}>
          <p className={style.status}>Статус</p>
          <p className={style.name}>Имя</p>
          <p className={style.birthday}>Дата рождения</p>
        </div>
        <div className={style.catalogList}>{isLoader ? <Loader /> : card}</div>
      </div>
      {!isLoader ? (
        <div className={style.filter}>
          <Pagination />
          <ToggleCountCard />
        </div>
      ) : null}
    </div>
  );
};
CardList.propTypes = {
  characters: PropTypes.array,
  isLoader: PropTypes.bool,
  grid: PropTypes.bool,
};
export default CardList;
