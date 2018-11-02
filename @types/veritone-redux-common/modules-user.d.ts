declare module 'veritone-redux-common' {
  import { Reducer, AnyAction } from 'redux';
  import { GetContextEffect } from 'redux-saga/effects';
  import { Application } from 'veritone-types';
  import { User, CallApiRequest, ApiCallingAction } from 'veritone-redux-common/models';
  import { UserState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace user {
      type Namespace = 'user';
      type UserStoreSlice = Pick<AppStore, Namespace>;

      const reducer: Reducer<UserState>;
      const namespace: Namespace;

      type FETCH_USER = 'vtn/user/FETCH_USER';
      type FETCH_USER_SUCCESS = 'vtn/user/FETCH_USER_SUCCESS';
      type FETCH_USER_FAILURE = 'vtn/user/FETCH_USER_FAILURE';

      type LOGIN = 'vtn/user/LOGIN';
      type LOGIN_SUCCESS = 'vtn/user/LOGIN_SUCCESS';
      type LOGIN_FAILURE = 'vtn/user/LOGIN_FAILURE';

      type LOGOUT = 'vtn/user/LOGOUT';
      type LOGOUT_SUCCESS = 'vtn/user/LOGOUT_SUCCESS';
      type LOGOUT_FAILURE = 'vtn/user/LOGOUT_FAILURE';

      type REFRESH_TOKEN = 'vtn/user/REFRESH_TOKEN';
      type REFRESH_TOKEN_SUCCESS = 'vtn/user/REFRESH_TOKEN_SUCCESS';
      type REFRESH_TOKEN_FAILURE = 'vtn/user/REFRESH_TOKEN_FAILURE';

      type FETCH_USER_APPLICATIONS = 'vtn/user/FETCH_USER_APPLICATIONS';
      type FETCH_USER_APPLICATIONS_SUCCESS = 'vtn/user/FETCH_USER_APPLICATIONS_SUCCESS';
      type FETCH_USER_APPLICATIONS_FAILURE = 'vtn/user/FETCH_USER_APPLICATIONS_FAILURE';

      type RESET_USER_PASSWORD = 'vtn/user/RESET_USER_PASSWORD';
      type RESET_USER_PASSWORD_SUCCESS = 'vtn/user/RESET_USER_PASSWORD_SUCCESS';
      type RESET_USER_PASSWORD_FAILURE = 'vtn/user/RESET_USER_PASSWORD_FAILURE';

      type UPDATE_CURRENT_USER_PROFILE = 'vtn/user/UPDATE_CURRENT_USER_PROFILE';
      type UPDATE_CURRENT_USER_PROFILE_SUCCESS = 'vtn/user/UPDATE_CURRENT_USER_PROFILE_SUCCESS';
      type UPDATE_CURRENT_USER_PROFILE_FAILURE = 'vtn/user/UPDATE_CURRENT_USER_PROFILE_FAILURE';

      function resetUserPasswordFetchingStatus(localState: UserStoreSlice, optionalRequestId: string): GetContextEffect;
      function resetUserPasswordFailureMessage(localState: UserStoreSlice, optionalRequestId: string): GetContextEffect;
      function updateCurrentUserProfileFetchingStatus(
        localState: UserStoreSlice,
        optionalRequestId: string,
      ): GetContextEffect;
      function updateCurrentUserProfileFailureMessage(
        localState: UserStoreSlice,
        optionalRequestId: string,
      ): GetContextEffect;

      function fetchUser(): ApiCallingAction<UserStoreSlice>;
      function login(req: { userName: string; password: string }): ApiCallingAction<UserStoreSlice>;
      function logout(): ApiCallingAction<UserStoreSlice>;
      function refreshApiToken(): ApiCallingAction<UserStoreSlice>;
      function fetchEnabledApps(): ApiCallingAction<UserStoreSlice>;

      function resetUserPassword<S, R>(
        email: string,
      ): (dispatch: (action: AnyAction) => void, getState: () => S) => Promise<R>;
      function updateCurrentUserProfile<S, R>(vals: {
        readonly firstName: string;
        readonly lastName: string;
        readonly imageUrl: string;
      }): (dispatch: (action: AnyAction) => void, getState: () => S) => Promise<R>;

      function isLoggingIn(state: UserStoreSlice): boolean;
      function loginFailed(state: UserStoreSlice): boolean;
      function loginFailureMessage(state: UserStoreSlice): string;
      function isFetching(state: UserStoreSlice): boolean;
      function fetchingFailed(state: UserStoreSlice): boolean;
      function selectUser(state: UserStoreSlice): User;
      function selectUserOrganizationId(state: UserStoreSlice): string;
      function selectUserOrganizationKvp(state: UserStoreSlice): Readonly<Record<string, string>>;
      function enabledAppsFailedLoading(state: UserStoreSlice): boolean;
      function isFetchingApps(state: UserStoreSlice): boolean;
      function enabledAppsFailureMessage(state: UserStoreSlice): string;
      function selectEnabledApps(state: UserStoreSlice): ReadonlyArray<Application>;
      function userIsAuthenticated(state: UserStoreSlice): boolean;
      function hasFeature(state: UserStoreSlice, featureName: string): boolean;
    }
  }
}
