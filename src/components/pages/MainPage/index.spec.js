import React from "react";
import MainPage from "./index";

describe("MainPage component", () => {
  it("should render MainPage component", () => {
    const component = render(<MainPage />);
    expect(component).toMatchSnapshot();
  });
});
