import { APIResponse } from "../types";

export interface AchievementCategory {
  key: {
    href: string;
  };
  name: string;
  id: number;
}

export interface AchievementCategoriesIndexResponse extends APIResponse {
  categories: AchievementCategory[];
}
