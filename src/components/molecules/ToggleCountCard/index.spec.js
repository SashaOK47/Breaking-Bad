import React from "react";
import ToggleCountCard from "./component";

const numbers = [10, 15, 20, 25];
const itemsPerPage = 15;
const handleClick = jest.fn();

const setUp = (props) => shallow(<ToggleCountCard {...props} />);

describe("ToggleCountCard component", () => {
  it("should render ToggleCountCard component", () => {
    const component = setUp({
      numbers,
      itemsPerPage,
      handleClick,
    });
    expect(component).toMatchSnapshot();
  });
});
