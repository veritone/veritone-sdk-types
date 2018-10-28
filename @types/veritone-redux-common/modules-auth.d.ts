
declare module 'veritone-redux-common' {
  import { Action, Reducer } from 'redux';
  import { AllEffect } from 'redux-saga/effects';
  import { AppState, AuthState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace auth {
      const reducer: Reducer<AuthState>;
      const namespace: 'auth';
      const REQUEST_OAUTH_GRANT: 'REQUEST_OAUTH_GRANT';
      const REQUEST_OAUTH_GRANT_IMPLICIT: 'REQUEST_OAUTH_GRANT_IMPLICIT';
      const OAUTH_GRANT_FLOW_FAILED: 'OAUTH_GRANT_FLOW_FAILED';
      const OAUTH_GRANT_FLOW_SUCCESS: 'OAUTH_GRANT_FLOW_SUCCESS';
      const SET_SESSION_TOKEN: 'vtn/user/SET_SESSION_TOKEN';
      const SET_OAUTH_TOKEN: 'vtn/user/SET_OAUTH_TOKEN';
      const CHECK_AUTH_NO_TOKEN: 'vtn/user/CHECK_AUTH_NO_TOKEN';
      function authRootSaga(): IterableIterator<AllEffect>;
      function setSessionToken(token: string): Action<'vtn/user/SET_SESSION_TOKEN'> & { payload: string };
      function selectSessionToken(state: AppState): AuthState['sessionToken'];
      function setOAuthToken(token: string): Action<'vtn/user/SET_OAUTH_TOKEN'> & { payload: string };
      function checkAuthNoToken(): Action<'vtn/user/CHECK_AUTH_NO_TOKEN'> & { payload: string };
      function selectOAuthError(state: AppState): {
          code: AuthState['OAuthErrorCode'];
          description: AuthState['OAuthErrorDescription'];
        };
    }
  }
}
