import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";

import { getToken } from "./api/auth/service";
import { Achievements } from "./achievements";

const App = () => {
  const [token, setToken] = React.useState<string>();

  React.useEffect(() => {
    async function getAPIToken(): Promise<void> {
      const token = await getToken(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

      setToken(token);
    }

    getAPIToken();
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/achievements">Achievements</Link>
      </nav>
      <Switch>
        <Route path="/achievements">
          <Achievements token={token} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
