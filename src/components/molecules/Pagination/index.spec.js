import React from "react";
import Pagination from "./component";

const arrOfCurrButtons = [1, 2, 3, "..."];
const currentPage = 1;
const handlerBtnNext = jest.fn();
const handlerBtnPrev = jest.fn();
const handleClick = jest.fn();

const setUp = (props) => shallow(<Pagination {...props} />);

describe("Pagination component", () => {
  it("should render Pagination component", () => {
    const component = setUp({
      arrOfCurrButtons,
      currentPage,
      handlerBtnNext,
      handlerBtnPrev,
      handleClick,
    });
    expect(component).toMatchSnapshot();
  });
});
