declare module 'veritone-redux-common/models' {
  import { AnyAction } from 'redux';
  import { modules } from 'veritone-redux-common';
  import { AppStore } from 'veritone-redux-common/stores';

  export interface CallApiRequest<S = any> {
    readonly actionTypes: [string, string, string];
    readonly query: string;
    readonly variables: Record<string, string>;
    dispatch: (action: AnyAction) => void;
    getState: () => S;
    bailout?: (state: S) => boolean;
    readonly operationName?: string;
    readonly requestId?: string;
  }

  export interface ApiCallingAction<S = any> {
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
