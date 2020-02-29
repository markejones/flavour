import { IAPICreatureFamiliesIndexResponse } from './types';

export async function getCreatureIndex(
  token: string
): Promise<IAPICreatureFamiliesIndexResponse> {
  return fetch(
    `https://us.api.blizzard.com/data/wow/creature-family/index?namespace=static-classic-us&access_token=${token}`
  )
    .then(res => res.json())
    .then((data: IAPICreatureFamiliesIndexResponse) => data);
}
