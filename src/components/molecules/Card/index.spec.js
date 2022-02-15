import React from "react";
import Card from "./index";

const character = {
  char_id: 1,
  name: "Test",
  status: "test",
  img: "https://test.test",
  birthday: "12.12.12",
};
const grid = true;

const setUp = (props) => shallow(<Card {...props} />);

describe("Card component", () => {
  it("should render Card component", () => {
    const component = setUp({ character });
    expect(component).toMatchSnapshot();
  });

  it("class is added list", () => {
    const component = setUp({ character, grid });
    expect(component).toMatchSnapshot();
  });
});
