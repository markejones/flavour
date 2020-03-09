import { AchievementCategory } from "../../api/achievements";

export const GET_ACHIEVEMENT_CATEGORIES_REQUEST = "[Achievements] GET_ACHIEVEMENT_CATEGORIES_REQUEST";
export const GET_ACHIEVEMENT_CATEGORIES_RESPONSE = "[Achievements] GET_ACHIEVEMENT_CATEGORIES_RESPONSE";
export const GET_ACHIEVEMENT_CATEGORIES_ERROR = "[Achievements] GET_ACHIEVEMENT_CATEGORIES_ERROR";

interface GetAchievementCategoriesRequestAction {
  type: typeof GET_ACHIEVEMENT_CATEGORIES_REQUEST;
}

interface GetAchievementCategoriesResponseAction {
  type: typeof GET_ACHIEVEMENT_CATEGORIES_RESPONSE;
  payload: AchievementCategory[];
}

interface GetAchievementCategoriesErrorAction {
  type: typeof GET_ACHIEVEMENT_CATEGORIES_ERROR;
  payload: Error | null;
}

export type AchievementActionTypes =
  | GetAchievementCategoriesRequestAction
  | GetAchievementCategoriesResponseAction
  | GetAchievementCategoriesErrorAction;

export interface AchievementsState {
  categories: AchievementCategory[];
  error: Error | null;
}
