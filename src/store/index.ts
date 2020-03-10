import { createStore, combineReducers, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer } from "./auth/reducers";
import { achievementsReducer } from "./achievements/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  achievements: achievementsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
