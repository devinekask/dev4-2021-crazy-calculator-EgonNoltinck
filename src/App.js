import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar/Navbar";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/" exact strict>
            <Home />
          </Route>
          <Route>
            <p>Not found</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
