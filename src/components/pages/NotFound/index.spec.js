import React from "react";
import NotFound from "./index";

describe("NotFound component", () => {
  it("should render NotFound component", () => {
    const component = shallow(<NotFound location="/" />);
    expect(component).toMatchSnapshot();
  });
});
