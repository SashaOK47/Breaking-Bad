import PropTypes from "prop-types";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const Search = ({
  handleSubmit,
  handleChangeInput,
  inputValue,
  searchCharacters,
  isOpen,
}) => {
  return (
    <div className={style.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Поиск"
          onChange={handleChangeInput}
          value={inputValue}
        />

        <button type="submit">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5ZM12.0491 13.4633C10.7873 14.4274 9.21054 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.21054 14.4274 10.7873 13.4633 12.0491L16.7071 15.2929L15.2929 16.7071L12.0491 13.4633Z"
              fill="#F1B926"
            />
          </svg>
          <span>Найти</span>
        </button>
        <ul className={style.list}>
          {inputValue && isOpen
            ? searchCharacters.map((character) => (
                <li className={style.item} key={character.char_id}>
                  <Link
                    className={style.link}
                    to={`/character/${character.char_id}`}
                  >
                    <img
                      className={style.image}
                      src={character.img}
                      alt={character.name}
                    />
                    <span className={style.name}>{character.name}</span>
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </form>
    </div>
  );
};
Search.propTypes = {
  handleSubmit: PropTypes.func,
  handleChangeInput: PropTypes.func,
  inputValue: PropTypes.string,
  searchCharacters: PropTypes.array,
  isOpen: PropTypes.bool,
};
export default Search;
