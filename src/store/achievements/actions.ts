import {
  AchievementActionTypes,
  GET_ACHIEVEMENT_CATEGORIES_REQUEST,
  GET_ACHIEVEMENT_CATEGORIES_RESPONSE,
  GET_ACHIEVEMENT_CATEGORIES_ERROR
} from "./types";
import { AchievementCategory, fetchAchievementCategoriesIndex } from "../../api/achievements";
import { AppThunk } from "..";
import { Dispatch } from "redux";

export const getAchievementCategoriesRequest = (): AchievementActionTypes => ({
  type: GET_ACHIEVEMENT_CATEGORIES_REQUEST
});

export const getAchievementCategoriesResponse = (categories: AchievementCategory[]): AchievementActionTypes => ({
  type: GET_ACHIEVEMENT_CATEGORIES_RESPONSE,
  payload: categories
});

export const getAchievementCategoriesError = (error: Error) => ({
  type: GET_ACHIEVEMENT_CATEGORIES_ERROR,
  payload: error
});

export const getAchievementCategories = (token: string): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getAchievementCategoriesRequest());
      const index = await fetchAchievementCategoriesIndex(token);
      dispatch(getAchievementCategoriesResponse(index.categories));
    } catch (e) {
      dispatch(getAchievementCategoriesError(e));
    }
  };
};
