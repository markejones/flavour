import { GET_TOKEN_ERROR, GET_TOKEN_RESPONSE, AuthActionTypes, GET_TOKEN_REQUEST } from "./types";
import { Dispatch } from "redux";
import { fetchToken } from "../../api/auth";
import { AppThunk } from "..";

export const getTokenRequest = (): AuthActionTypes => ({
  type: GET_TOKEN_REQUEST
});

export const getTokenResponse = (token: string): AuthActionTypes => ({
  type: GET_TOKEN_RESPONSE,
  payload: token
});

export const getTokenError = (error: Error): AuthActionTypes => ({
  type: GET_TOKEN_ERROR,
  payload: error
});

export const getToken = (credentials: { clientId: string; clientSecret: string }): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTokenRequest());
      const token = await fetchToken(credentials.clientId, credentials.clientSecret);
      dispatch(getTokenResponse(token));
    } catch (e) {
      dispatch(getTokenError(e));
    }
  };
};
