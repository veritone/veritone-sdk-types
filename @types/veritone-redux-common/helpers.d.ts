/**
 * helpers namespace
 */
declare module 'veritone-redux-common' {
  import { Reducer } from 'react';
  import { AnyAction, Action, Middleware } from 'redux';
  import { GetContextEffect } from 'redux-saga/effects';
  import { CallApiRequest, ApiCallingAction } from 'veritone-redux-common/models';

  export namespace helpers {
    function callGraphQLApi<
      T1 extends string,
      T2 extends string,
      T3 extends string,
      S = any,
      V extends Record<string, any> = {},
      R = any
    >(req: CallApiRequest<T1, T2, T3, S, V>): Promise<R>;

    function fetchGraphQLApi<
      T1 extends string,
      T2 extends string,
      T3 extends string,
      S = any,
      V extends Record<string, any> = {},
      R = any
    >(req: CallApiRequest<T1, T2, T3, S, V>): Promise<R>;

    interface FsaAction<P = unknown, M = unknown> extends AnyAction, Action {
      type: string;
      payload: P;
      meta: M;
    }

    function createReducer<S>(initialState: S, handlers: Record<string, Reducer<S, FsaAction>>): Reducer<S, FsaAction>;
    function reduceReducers<S>(...reducers: Array<Reducer<S, FsaAction>>): Reducer<S, FsaAction>;

    const promiseMiddleware: {
      main(): Middleware;
      WAIT_FOR_ACTION: symbol;
      ERROR_ACTION: symbol;
      CALLBACK_ARGUMENT: symbol;
      CALLBACK_ERROR_ARGUMENT: symbol;
    };

    function handleApiCall<S>(
      req: Pick<ApiCallingAction<S>['@@redux-api-middleware/RSAA'], 'types'>,
    ): {
      reducer: Reducer<S>;
      selectors: {
        fetchingStatus: (localState: S, optionalRequestId: string) => GetContextEffect;
        fetchingStatusByRequestId: (localState: S) => GetContextEffect;
        fetchingFailureMessage: (localState: S, optionalRequestId: string) => GetContextEffect;
        fetchingFailureMessagesByRequestId: (localState: S) => GetContextEffect;
      };
      _key: string;
    };

    function commonHeaders(state: modules.auth.AuthStoreSlice): Headers;
    function getCredentialsMode(): 'include' | 'omit';

    const fetchingStatus: {
      fetching: 'FETCHING';
      failure: 'FAILURE';
      success: 'SUCCESS';
      default: 'DEFAULT'; // no action yet taken
    };
  }
}
