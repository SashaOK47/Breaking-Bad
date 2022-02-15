import React from "react";
import Search from "./component";

const handleChangeInput = jest.fn();
let inputValue = "";
const searchCharacters = [
  {
    char_id: 1,
    name: "Test",
    status: "test",
    img: "https://test.test",
    birthday: "12.12.12",
  },
  {
    char_id: 1,
    name: "Test2",
    status: "test2",
    img: "https://test2.test",
    birthday: "12.12.21",
  },
];
let isOpen = false;

const setUp = (props) => shallow(<Search {...props} />);

describe("Search component", () => {
  it("should render Search component", () => {
    const component = setUp({ searchCharacters, inputValue, isOpen });
    expect(component).toMatchSnapshot();
  });

  it("should render list block", () => {
    isOpen = true;
    inputValue = "Test";
    const component = setUp({
      searchCharacters,
      isOpen,
      inputValue,
    });
    expect(component).toMatchSnapshot();
  });

  it("worked out the method handleChangeInput", () => {
    const component = setUp({
      handleChangeInput,
    });
    component.find("input").simulate("change", { target: { value: "Test" } });
    expect(handleChangeInput).toHaveBeenCalled();
  });
});
