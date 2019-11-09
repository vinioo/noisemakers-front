import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'

function App() {
  return <>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </BrowserRouter>
  </>;
}

export default App;
