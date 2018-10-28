declare module 'veritone-redux-common' {
  import { Reducer, AnyAction } from 'redux';
  import { GetContextEffect } from 'redux-saga/effects';
  import { Application } from 'veritone-types';
  import { User, UserState, AppState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace user {
      const FETCH_USER: 'vtn/user/FETCH_USER';
      const FETCH_USER_SUCCESS: 'vtn/user/FETCH_USER_SUCCESS';
      const FETCH_USER_FAILURE: 'vtn/user/FETCH_USER_FAILURE';

      const LOGIN: 'vtn/user/LOGIN';
      const LOGIN_SUCCESS: 'vtn/user/LOGIN_SUCCESS';
      const LOGIN_FAILURE: 'vtn/user/LOGIN_FAILURE';

      const LOGOUT: 'vtn/user/LOGOUT';
      const LOGOUT_SUCCESS: 'vtn/user/LOGOUT_SUCCESS';
      const LOGOUT_FAILURE: 'vtn/user/LOGOUT_FAILURE';

      const REFRESH_TOKEN: 'vtn/user/REFRESH_TOKEN';
      const REFRESH_TOKEN_SUCCESS: 'vtn/user/REFRESH_TOKEN_SUCCESS';
      const REFRESH_TOKEN_FAILURE: 'vtn/user/REFRESH_TOKEN_FAILURE';

      const FETCH_USER_APPLICATIONS: 'vtn/user/FETCH_USER_APPLICATIONS';
      const FETCH_USER_APPLICATIONS_SUCCESS: 'vtn/user/FETCH_USER_APPLICATIONS_SUCCESS';
      const FETCH_USER_APPLICATIONS_FAILURE: 'vtn/user/FETCH_USER_APPLICATIONS_FAILURE';

      const RESET_USER_PASSWORD: 'vtn/user/RESET_USER_PASSWORD';
      const RESET_USER_PASSWORD_SUCCESS: 'vtn/user/RESET_USER_PASSWORD_SUCCESS';
      const RESET_USER_PASSWORD_FAILURE: 'vtn/user/RESET_USER_PASSWORD_FAILURE';

      const UPDATE_CURRENT_USER_PROFILE: 'vtn/user/UPDATE_CURRENT_USER_PROFILE';
      const UPDATE_CURRENT_USER_PROFILE_SUCCESS: 'vtn/user/UPDATE_CURRENT_USER_PROFILE_SUCCESS';
      const UPDATE_CURRENT_USER_PROFILE_FAILURE: 'vtn/user/UPDATE_CURRENT_USER_PROFILE_FAILURE';

      const reducer: Reducer<UserState>;
      const namespace: 'user';

      function resetUserPasswordFetchingStatus<S>(localState: S, optionalRequestId: string): GetContextEffect;
      function resetUserPasswordFailureMessage<S>(localState: S, optionalRequestId: string): GetContextEffect;
      function updateCurrentUserProfileFetchingStatus<S>(localState: S, optionalRequestId: string): GetContextEffect;
      function updateCurrentUserProfileFailureMessage<S>(localState: S, optionalRequestId: string): GetContextEffect;

      function fetchUser(): {};
      function login(req: { userName: string; password: string }): {};
      function refreshApiToken(): {};
      function fetchEnabledApps(): {};
      function resetUserPassword<S, R>(
        email: string,
      ): (dispatch: (action: AnyAction) => void, getState: () => S) => Promise<R>;
      function updateCurrentUserProfile<S, R>(vals: {
        readonly firstName: string;
        readonly lastName: string;
        readonly imageUrl: string;
      }): (dispatch: (action: AnyAction) => void, getState: () => S) => Promise<R>;
      function isLoggingIn(state: AppState): boolean;
      function loginFailed(state: AppState): boolean;
      function loginFailureMessage(state: AppState): string;
      function isFetching(state: AppState): boolean;
      function fetchingFailed(state: AppState): boolean;
      function selectUser(state: AppState): User;
      function selectUserOrganizationId(state: AppState): string;
      function selectUserOrganizationKvp(state: AppState): Readonly<Record<string, string>>;
      function enabledAppsFailedLoading(state: AppState): boolean;
      function isFetchingApps(state: AppState): boolean;
      function enabledAppsFailureMessage(state: AppState): string;
      function selectEnabledApps(state: AppState): ReadonlyArray<Application>;
      function userIsAuthenticated(state: AppState): boolean;
      function hasFeature(state: AppState, featureName: string): boolean;
    }
  }
}
