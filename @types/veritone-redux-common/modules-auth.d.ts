declare module 'veritone-redux-common' {
  import { Action, Reducer } from 'redux';
  import { AllEffect } from 'redux-saga/effects';
  import { AppStore, AuthState } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace auth {
      type Namespace = 'auth';
      type AuthStoreSlice = Pick<AppStore, Namespace>;

      const reducer: Reducer<AuthState>;
      const namespace: Namespace;

      const REQUEST_OAUTH_GRANT = 'REQUEST_OAUTH_GRANT';
      const REQUEST_OAUTH_GRANT_IMPLICIT = 'REQUEST_OAUTH_GRANT_IMPLICIT';
      const OAUTH_GRANT_FLOW_FAILED = 'OAUTH_GRANT_FLOW_FAILED';
      const OAUTH_GRANT_FLOW_SUCCESS = 'OAUTH_GRANT_FLOW_SUCCESS';
      const SET_SESSION_TOKEN = 'vtn/user/SET_SESSION_TOKEN';
      const SET_OAUTH_TOKEN = 'vtn/user/SET_OAUTH_TOKEN';
      const CHECK_AUTH_NO_TOKEN = 'vtn/user/CHECK_AUTH_NO_TOKEN';

      enum OAUTH_ERROR_CODES {
        UNAUTHORIZED_CLIENT = 'unauthorized_client',
      }

      function authRootSaga(): IterableIterator<AllEffect>;
      function setSessionToken(token: string): Action<typeof SET_SESSION_TOKEN> & { payload: string };
      function selectSessionToken(state: AuthStoreSlice): AuthState['sessionToken'];
      function setOAuthToken(token: string): Action<typeof SET_OAUTH_TOKEN> & { payload: string };
      function selectOAuthToken(state: AuthStoreSlice): AuthState['OAuthToken'];
      function checkAuthNoToken(): Action<typeof CHECK_AUTH_NO_TOKEN> & { payload: string };
      function selectOAuthError(
        state: AuthStoreSlice,
      ): {
        code: AuthState['OAuthErrorCode'];
        description: AuthState['OAuthErrorDescription'];
      };
    }
  }
}
