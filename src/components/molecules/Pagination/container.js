import Pagination from "./component";
import { UpdateCurrentPage } from "../../../store/actions/characters";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.characters.currentPage);
  const itemsPerPage = useSelector((state) => state.characters.itemsPerPage);
  const characters = useSelector((state) => state.characters.characters);

  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  const handleClick = (e) => {
    if (Number(e.target.textContent)) {
      dispatch(UpdateCurrentPage(Number(e.target.textContent)));
    }
  };
  const handlerBtnPrev = () => {
    if (currentPage > 1) {
      dispatch(UpdateCurrentPage(currentPage - 1));
    }
  };
  const handlerBtnNext = () => {
    if (currentPage < numberOfPages.length) {
      dispatch(UpdateCurrentPage(currentPage + 1));
    }
  };

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentPage >= 1 && currentPage <= 2) {
      // 1 2
      tempNumberOfPages = [1, 2, 3, "...", numberOfPages.length];
    } else if (currentPage === 3) {
      //3
      const sliced = numberOfPages.slice(0, 4);
      tempNumberOfPages = [...sliced, "...", numberOfPages.length];
    } else if (currentPage === 4) {
      //4
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, "...", numberOfPages.length];
    } else if (currentPage > numberOfPages.length - 3) {
      // 5, 6, 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, "...", ...sliced];
    }
    // 1     1 2 3  ... 7
    // 2     1 2 3 4 ... 7
    // 3     1 2 3 4 ... 7
    // 4     1 2 3 4 5 ... 7
    // 5     1 ... 4 5 6 7
    // 6     1 ... 4 5 6 7
    // 7     1 ... 4 5 6 7
    setArrOfCurrButtons(tempNumberOfPages);
    dispatch(UpdateCurrentPage(currentPage));
  }, [currentPage, itemsPerPage]);

  return (
    <Pagination
      arrOfCurrButtons={arrOfCurrButtons}
      currentPage={currentPage}
      handleClick={handleClick}
      handlerBtnNext={handlerBtnNext}
      handlerBtnPrev={handlerBtnPrev}
    />
  );
};
export const container = PaginationContainer;
