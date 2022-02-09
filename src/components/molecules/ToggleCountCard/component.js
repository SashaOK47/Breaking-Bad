// import PropTypes from "prop-types";
import style from "./styles.module.scss";

const ToggleCountCard = ({ numbers, handleClick, itemsPerPage }) => {
  return (
    <div className={style.countCard}>
      <ul>
        {numbers.map((number) => {
          return (
            <li
              className={itemsPerPage == number ? style.active : null}
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ToggleCountCard;
