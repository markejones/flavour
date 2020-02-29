import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getToken } from './api/auth/service';
import { getCreatureIndex } from './api/creature/service';
import {
  IAPICreatureFamiliesIndexResponse,
  IAPICreatureFamily
} from './api/creature/types';

const App = () => {
  const [token, setToken] = React.useState<string>();
  const [creatures, setCreatures] = React.useState<
    IAPICreatureFamiliesIndexResponse
  >();

  React.useEffect(() => {
    async function getAPIToken(): Promise<void> {
      const response = await getToken(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET
      );
      console.log(response);
      setToken(response);
    }

    getAPIToken();
  }, []);

  const loadCreatures = () => {
    getCreatureIndex(token).then(res => {
      setCreatures(res);
    });
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={loadCreatures}>Click me</button>
      <div>
        {creatures &&
          creatures.creature_families.map((family: IAPICreatureFamily) => (
            <div key={family.id}>{family.name.en_GB}</div>
          ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
