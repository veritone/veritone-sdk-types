declare module 'veritone-redux-common/models' {
  import { AnyAction, Action } from 'redux';
  import { modules } from 'veritone-redux-common';
  import { AppStore } from 'veritone-redux-common/stores';

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
    type: T2;
    payload: P;
    error?: boolean;
    meta: M & {
      variables: V;
      operationName?: string;
      query: string;
      _internalRequestId: string;
      _shouldTrackRequestsIndividually: boolean;
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
