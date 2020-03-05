import { IAchievementCategoriesIndexResponse } from './types';

export async function getAchievementCategoriesIndex(
  token: string
): Promise<IAchievementCategoriesIndexResponse> {
  return fetch(
    `https://us.api.blizzard.com/data/wow/achievement-category/index?namespace=static-us&locale=en_GB&access_token=${token}`
  )
    .then(res => res.json())
    .then((data: IAchievementCategoriesIndexResponse) => data);
}
