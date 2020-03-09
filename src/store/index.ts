import { createStore, combineReducers, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
