import React from "react";
import Character from "./component";

const character = {
  char_id: 1,
  name: "Test",
  birthday: "12-12-12",
  img: "https://test.test",
  status: "Test status",
  nickname: "Test Nickname",
};
const quote = "Test quote";
let isLoader = true;
let isLoaderQuote = true;

const setUp = (props) => shallow(<Character {...props} />);

describe("Character component", () => {
  it("Character render isLoader", () => {
    const component = setUp({ isLoader, character });
    expect(component).toMatchSnapshot();
  });
  it("Character render after isLoader", () => {
    isLoader = false;
    const component = setUp({ isLoader, character });
    expect(component).toMatchSnapshot();
  });
  it("should render isLoaderQuote", () => {
    isLoader = false;
    const component = setUp({ isLoader, character, isLoaderQuote, quote });
    expect(component).toMatchSnapshot();
  });
  it("Quote render after isLoaderQuote", () => {
    isLoader = false;
    isLoaderQuote = false;
    const component = setUp({ isLoader, character, isLoaderQuote, quote });
    expect(component).toMatchSnapshot();
  });
});
