import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Achievements } from "./achievements";
import { store } from "./store";
import { Button } from "./shared/button";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/achievements">Achievements</Link>
        </nav>
        <Switch>
          <Route path="/achievements">
            <Button onClick={() => console.log("hello from button")} />
            <Achievements />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
