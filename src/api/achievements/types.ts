import { IAPIResponse } from '../types';

export interface IAchievementCategory {
  key: {
    href: string;
  };
  name: string;
  id: number;
}

export interface IAchievementCategoriesIndexResponse extends IAPIResponse {
  categories: IAchievementCategory[];
}
