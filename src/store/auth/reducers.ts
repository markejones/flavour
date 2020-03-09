import { AuthState, AuthActionTypes, GET_TOKEN_RESPONSE, GET_TOKEN_ERROR } from "./types";

const initialState: AuthState = {
  error: null,
  token: null
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case GET_TOKEN_RESPONSE:
      return {
        token: action.payload,
        error: null
      };

    case GET_TOKEN_ERROR:
      return {
        error: action.payload,
        token: null
      };

    default:
      return state;
  }
};
