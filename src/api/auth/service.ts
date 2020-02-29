import { IAPIAuthenticationResponse } from './types';

export async function getToken(
  clientId: string,
  clientSecret: string
): Promise<string> {
  const formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  return fetch(
    `https://us.battle.net/oauth/token?client_id=${clientId}&client_secret=${clientSecret}`,
    {
      method: 'POST',
      body: formData
    }
  ).then((response: Response) => {
    return response
      .json()
      .then((data: IAPIAuthenticationResponse) => data.access_token);
  });
}
