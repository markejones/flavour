import * as React from "react";
import * as ReactDOM from "react-dom";
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

  return <div>{token ? <Achievements token={token} /> : <div>loading...</div>}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
