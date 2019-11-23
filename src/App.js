import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/Homepage";
import Panel from "./pages/Panel";
import BandInfo from "./pages/BandInfo";
import UserInfo from "./pages/UserInfo";
import NewBand from "./pages/NewBand";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/panel" component={Panel} />
          <Route path="/bandinfo/:id" component={BandInfo} />
          <Route path="/userinfo" component={UserInfo} />
          <Route path="/newband" component={NewBand} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
