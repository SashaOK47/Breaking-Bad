import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Character from "./component";
import Error from "../../atoms/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  getRandomQuoteByCharacterFromAPI,
  getRandomQuoteFromAPI,
} from "../../../store/actions/quotes";

const CharacterContainer = ({ isLoader, character }) => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.characters.isError);
  const quoteCharacter = useSelector((state) => state.quotes.quoteCharacter);
  const randomQuote = useSelector((state) => state.quotes.randomQuote);
  const isLoaderQuote = useSelector((state) => state.quotes.isLoaderQuote);
  const isErrorQuote = useSelector((state) => state.quotes.isErrorQuote);
  const name = character.name;

  useEffect(() => {
    if (character) {
      dispatch(getRandomQuoteByCharacterFromAPI(name));
    }
    dispatch(getRandomQuoteFromAPI());
  }, [name]);

  const quote = quoteCharacter ? quoteCharacter.quote : randomQuote.quote;

  return isError || isErrorQuote ? (
    <Error message={isError || isErrorQuote} />
  ) : (
    <Character
      character={character}
      isLoader={isLoader}
      quote={quote}
      isLoaderQuote={isLoaderQuote}
    />
  );
};

CharacterContainer.propTypes = {
  character: PropTypes.object,
  isLoader: PropTypes.bool,
};
export const container = CharacterContainer;
