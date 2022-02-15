import React from "react";
import CharactersSearch from "./component";

let charactersSearch = [
  {
    char_id: 1,
    name: "Test Test",
    birthday: "12-12-2012",
    img: "test.test",
    status: "Test status",
    nickname: "Test nickname",
  },
  {
    char_id: 2,
    name: "Test Test",
    birthday: "11-11-2011",
    img: "https://test2.test",
    status: "Test2 status",
    nickname: "Test2 nickname",
  },
];

let searchResult = "Test";
const found = "Найдено";

const setUp = (props) => shallow(<CharactersSearch {...props} />);

describe("Character component", () => {
  it("should render CharactersSearch component", () => {
    const component = setUp({ charactersSearch, found, searchResult });
    expect(component).toMatchSnapshot();
  });
  it("should render no result", () => {
    charactersSearch = [];
    searchResult = "123";
    const component = setUp({ charactersSearch, found, searchResult });
    expect(component).toMatchSnapshot();
  });
});
