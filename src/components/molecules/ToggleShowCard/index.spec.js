import React from "react";
import ToggleShowCard from "./component";

let grid = true;
const setUp = (props) => shallow(<ToggleShowCard {...props} />);

describe("ToggleShowCard component", () => {
  it("should render ToggleShowCard component", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
  it("with the transfer of prop grid", () => {
    const component = setUp({ grid });
    expect(component).toMatchSnapshot();
  });
});
