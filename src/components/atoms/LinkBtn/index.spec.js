import React from "react";
import LinkBtn from "./index";

const setUp = (props) => shallow(<LinkBtn {...props} />);

describe("Error component", () => {
  it("should render LinkBtn component", () => {
    const component = setUp({ location: "/characters" });
    expect(component).toMatchSnapshot();
  });
});
