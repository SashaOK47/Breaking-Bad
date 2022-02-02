import React from "react";
import PropTypes from "prop-types";
import Character from "./component";
import Error from "../../atoms/Error";
import { useSelector } from "react-redux";

const CharacterContainer = ({ character, isLoader }) => {
  const isError = useSelector((state) => state.characters.isError);

  return isError ? (
    <Error message={isError} />
  ) : (
    <Character character={character} isLoader={isLoader} />
  );
};

CharacterContainer.propTypes = {
  character: PropTypes.object,
  isLoader: PropTypes.bool,
};
export const container = CharacterContainer;
