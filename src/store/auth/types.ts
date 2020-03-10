export const GET_TOKEN_REQUEST = "[AUTH] GET_TOKEN_REQUEST";
export const GET_TOKEN_RESPONSE = "[AUTH] GET_TOKEN_RESPONSE";
export const GET_TOKEN_ERROR = "[AUTH] GET_TOKEN_ERROR";

interface GetTokenRequestAction {
  type: typeof GET_TOKEN_REQUEST;
}

interface GetTokenResponseAction {
  type: typeof GET_TOKEN_RESPONSE;
  payload: string;
}

interface GetTokenErrorAction {
  type: typeof GET_TOKEN_ERROR;
  payload: Error;
}

export type AuthActionTypes = GetTokenRequestAction | GetTokenResponseAction | GetTokenErrorAction;

export interface AuthState {
  token: string;
  error: Error | null;
}
