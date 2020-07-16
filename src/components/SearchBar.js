import React from "react";

//Style
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a movie 🍿..
      "
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};
export default SearchBar;
