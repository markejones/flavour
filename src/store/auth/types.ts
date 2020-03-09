export const GET_TOKEN_RESPONSE = "[AUTH] GET_TOKEN_RESPONSE";
export const GET_TOKEN_ERROR = "[AUTH] GET_TOKEN_ERROR";

interface GetTokenResponseAction {
  type: typeof GET_TOKEN_RESPONSE;
  payload: string;
}

interface GetTokenErrorAction {
  type: typeof GET_TOKEN_ERROR;
  payload: Error;
}

export type AuthActionTypes = GetTokenResponseAction | GetTokenErrorAction;

export interface AuthState {
  token: string;
  error: Error | null;
}
