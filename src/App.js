import React from "react";

import { GlobalStyle } from "./styles";

//components
import WatchList from "./components/WatchList";

function App() {
  return (
    <div>
      <GlobalStyle />
      <WatchList />
    </div>
  );
}

export default App;
