import React from "react";
import Error from "./index";

const setUp = (props) => shallow(<Error {...props} />);
const message = "Test Error";

describe("Error component", () => {
  it("should render Error component", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
  it("should render Error component message", () => {
    const component = setUp({ message });
    expect(component).toMatchSnapshot();
  });
});
