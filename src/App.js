import React from "react";
import { GlobalStyle } from "./styles";

//Data
import movies from "./movies";

//components
import WatchList from "./components/WatchList";

function App() {
  return (
    <div>
      <GlobalStyle />

      <WatchList movies={movies} />
    </div>
  );
}

export default App;
