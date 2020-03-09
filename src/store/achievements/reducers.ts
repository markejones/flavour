import {
  AchievementsState,
  AchievementActionTypes,
  GET_ACHIEVEMENT_CATEGORIES_REQUEST,
  GET_ACHIEVEMENT_CATEGORIES_RESPONSE,
  GET_ACHIEVEMENT_CATEGORIES_ERROR
} from "./types";

const initialState: AchievementsState = {
  error: null,
  categories: []
};

export const achievementsReducer = (state = initialState, action: AchievementActionTypes): AchievementsState => {
  switch (action.type) {
    case GET_ACHIEVEMENT_CATEGORIES_REQUEST:
      return {
        error: null,
        ...state
      };

    case GET_ACHIEVEMENT_CATEGORIES_RESPONSE:
      return {
        error: null,
        categories: action.payload
      };

    case GET_ACHIEVEMENT_CATEGORIES_ERROR:
      return {
        error: action.payload,
        ...state
      };

    default:
      return state;
  }
};
