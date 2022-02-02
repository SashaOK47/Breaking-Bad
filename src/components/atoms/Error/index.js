import PropTypes from "prop-types";
import style from "./styles.module.scss";

const Error = ({ message }) => {
  return <div className={style.error}>{message}</div>;
};
Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
