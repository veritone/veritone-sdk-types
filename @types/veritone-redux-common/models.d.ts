declare module 'veritone-redux-common/models' {
  import { AnyAction, Action } from 'redux';
  import { modules } from 'veritone-redux-common';
  import { AppStore } from 'veritone-redux-common/stores';
  import { ApplicationPlatform, UserAcl } from 'veritone-types';

  export interface CallApiRequest<
    T1 extends string,
    T2 extends string,
    T3 extends string,
    S = any,
    V extends Record<string, any> = {}
  > {
    readonly actionTypes: [T1, T2, T3];
    readonly query: string;
    readonly variables: V;
    dispatch: (action: AnyAction) => void;
    getState: () => S;
    bailout?: (state: S) => boolean;
    readonly operationName?: string;
    readonly requestId?: string;
  }

  export interface CallApiActionResponse<T2, P, M, V extends Record<string, any> = {}> extends Action<T2> {
    readonly type: T2;
    readonly payload: P;
    readonly error?: boolean;
    readonly meta: M & {
      readonly variables: V;
      readonly operationName?: string;
      readonly query: string;
      readonly _internalRequestId: string;
      readonly _shouldTrackRequestsIndividually: boolean;
    };
  }

  export interface ApiCallingAction<S = any> extends Action<'@@redux-api-middleware/RSAA'> {
    '@@redux-api-middleware/RSAA': {
      readonly types: [string, string, string];
      readonly method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
      readonly headers?: Record<string, string> | (() => Record<string, string>);
      readonly credentials?: 'include' | 'same-origin' | 'omit';
      readonly body?: string | FormData;
      bailout?: boolean | ((state: S) => boolean);
      endpoint?: (state: AppStore[modules.config.Namespace]) => string;
      options?: Record<string, string> | (() => Record<string, string>);
    };
  }

  export interface Organization {
    readonly organizationId: string;
    readonly organizationName: string;
  }

  export interface User {
    readonly token: string;
    readonly userId: string;
    readonly userName: string;
    readonly email: string;
    readonly lastLoggedIn: string | null;
    readonly lastUpdated: string;
    readonly groups: ReadonlyArray<UserGroup>;
    readonly organization: Organization;
    readonly kvp: {
      readonly firstName?: string;
      readonly lastName?: string;
      readonly image?: string;
      readonly [key: string]: string | undefined;
    };
    readonly passwordResetRequired: boolean;
    readonly lastPasswordUpdated: string | null;
    readonly hasPassword: boolean;
    readonly applications: ReadonlyArray<string>;
    readonly applicationPlatforms: {
      readonly [guid: string]: ApplicationPlatform;
    };
    readonly authorizedOrganizationIds: ReadonlyArray<number>;
    readonly permissionMasks: ReadonlyArray<number>;
    readonly acls: ReadonlyArray<UserAcl> | null;
    readonly trials: ReadonlyArray<unknown>;
    readonly providerId: string | null;
    readonly providerScreenName: string | null;
    readonly providerUserId: string | null;
    readonly mfaDefaultOption: unknown | null;
    readonly tokenExpiration: string | null;
  }

  export interface UserGroup {
    readonly groupId: string;
    readonly groupName: string;
  }
}
