import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Panel from "./pages/Panel";
import BandInfo from "./pages/BandInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/panel" component={Panel} />
          <Route path="/bandinfo" component={BandInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
