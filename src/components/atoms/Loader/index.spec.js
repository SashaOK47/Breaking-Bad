import React from "react";
import Loader from "./index";

const setUp = (props) => shallow(<Loader {...props} />);
const small = true;

describe("Error component", () => {
  it("should render Loader component", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
  it("class is added small", () => {
    const component = setUp({ small });
    expect(component).toMatchSnapshot();
  });
});
