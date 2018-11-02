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

      type REQUEST_OAUTH_GRANT = 'REQUEST_OAUTH_GRANT';
      type REQUEST_OAUTH_GRANT_IMPLICIT = 'REQUEST_OAUTH_GRANT_IMPLICIT';
      type OAUTH_GRANT_FLOW_FAILED = 'OAUTH_GRANT_FLOW_FAILED';
      type OAUTH_GRANT_FLOW_SUCCESS = 'OAUTH_GRANT_FLOW_SUCCESS';
      type SET_SESSION_TOKEN = 'vtn/user/SET_SESSION_TOKEN';
      type SET_OAUTH_TOKEN = 'vtn/user/SET_OAUTH_TOKEN';
      type CHECK_AUTH_NO_TOKEN = 'vtn/user/CHECK_AUTH_NO_TOKEN';

      function authRootSaga(): IterableIterator<AllEffect>;
      function setSessionToken(token: string): Action<SET_SESSION_TOKEN> & { payload: string };
      function selectSessionToken(state: AuthStoreSlice): AuthState['sessionToken'];
      function setOAuthToken(token: string): Action<'vtn/user/SET_OAUTH_TOKEN'> & { payload: string };
      function checkAuthNoToken(): Action<'vtn/user/CHECK_AUTH_NO_TOKEN'> & { payload: string };
      function selectOAuthError(
        state: AuthStoreSlice,
      ): {
        code: AuthState['OAuthErrorCode'];
        description: AuthState['OAuthErrorDescription'];
      };
    }
  }
}
