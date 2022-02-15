import React from "react";
import Footer from "./index";

describe("Footer Component", () => {
  it("should render Footer component", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
