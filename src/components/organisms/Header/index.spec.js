import React from "react";
import Header from "./index";

describe("Header Component", () => {
  it("should render Header component", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
