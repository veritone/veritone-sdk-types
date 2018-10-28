declare module 'veritone-redux-common/models' {
  import { AnyAction } from 'redux';
  import { Application, Engine, EngineCategory } from 'veritone-types';
  import { modules } from 'veritone-redux-common';

  export interface CallApiRequest<S = AppState, V extends Record<string, any> = {}> {
    readonly actionTypes: [string, string, string];
    readonly query: string;
    readonly variables: V;
    readonly body?: FormData;
    dispatch: (action: AnyAction) => void;
    getState: () => S;
    bailout?: (state: S) => boolean;
    readonly operationName?: string;
    readonly requestId?: string;
  }

  export interface AppState {
    readonly [modules.auth.namespace]: AuthState;
    readonly [modules.config.namespace]: Partial<Config>;
    readonly [modules.confirmation.namespace]: ConfirmationState;
    readonly [modules.engine.namespace]: EngineState;
    readonly [modules.uiState.namespace]: UiState;
    readonly [modules.user.namespace]: UserState;
  }

  export interface AuthState {
    readonly OAuthToken: null | string;
    readonly OAuthErrorCode: null | string;
    readonly OAuthErrorDescription: null | string;
    readonly sessionToken: null | string;
  }

  export interface ConfirmationState {
    confirmations: { readonly [id: string]: any | undefined };
  }

  export interface EngineState {
    readonly enginesById: { [id: string]: Engine };
    readonly isFetching: boolean;
    readonly fetchingFailed: boolean;
    readonly engineCategories: ReadonlyArray<EngineCategory>;
    readonly isFetchingCategories: boolean;
    readonly fetchingCategoriesFailed: boolean;
  }

  export interface UiState {
    readonly [key: string]: any | undefined;
  }

  export interface UserState {
    readonly user: User;
    readonly isFetching: boolean;
    readonly fetchingFailed: boolean;
    readonly isLoggingIn: boolean;
    readonly loginFailed: boolean;
    readonly loginFailureMessage?: string;
    readonly isFetchingApplications: boolean;
    readonly fetchApplicationsFailed: boolean;
    readonly fetchApplicationsFailureMessage?: string;
    readonly enabledApps: ReadonlyArray<Application>;
  }

  export interface Config {
    readonly apiRoot: string;
    readonly switchAppRoute: string;
    readonly loginRoute: string;
    readonly graphQLEndpoint: string;
    readonly OAuthClientID: string;
    readonly faceRecognitionCategory: string;
    readonly redactEngineId: string;
    readonly eventSchemaId: string;
    readonly licensePlatesRecognitionEngineId: string;
    readonly downloadEngineId: string;
    readonly segmentWriteKey: string;
    readonly opticalTrackingEngine: string;
    readonly useOAuthGrant: boolean;
    readonly redactDetectionEngineId: string;
    readonly webstreamAdapterEngineId: string;
    readonly dtoSdoSchemaId: string;
  }

  export interface Organization {
    readonly organizationId: string;
    readonly organizationName: string;
  }

  export interface User {
    readonly userId: string;
    readonly userName: string;
    readonly groups: ReadonlyArray<UserGroup>;
    readonly organization: Organization;
  }

  export interface UserGroup {
    readonly groupId: string;
    readonly groupName: string;
  }
}
