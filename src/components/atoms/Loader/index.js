import PropTypes from "prop-types";
import style from "./styles.module.scss";

const Loader = ({ small }) => {
  let loader = style.loader;
  if (small) {
    loader += ` ${style.small}`;
  }
  return <div className={loader}></div>;
};
Loader.propTypes = {
  small: PropTypes.bool,
};
export default Loader;
