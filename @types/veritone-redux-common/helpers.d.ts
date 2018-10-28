/**
 * helpers namespace
 */
declare module 'veritone-redux-common' {
  import { Reducer, Middleware } from 'redux';
  import { GetContextEffect } from 'redux-saga/effects';
  import { CallApiRequest } from 'veritone-redux-common/models';

  export namespace helpers {
    function callGraphQLApi<S, V extends Record<string, any>, R>(req: CallApiRequest<S, V>): Promise<R>;
    function fetchGraphQLApi<R, O>(): Promise<O>;
    function createReducer<S>(initialState: S, handlers: Record<string, Reducer<S>>): Reducer<S>;
    function reduceReducers<S>(...reducers: Array<Reducer<S>>): Reducer<S>;
    const promiseMiddleware: {
      main(): Middleware;
      WAIT_FOR_ACTION: symbol;
      ERROR_ACTION: symbol;
      CALLBACK_ARGUMENT: symbol;
      CALLBACK_ERROR_ARGUMENT: symbol;
    };

    function createReducer<S>(initialState: S, handlers: { [handler: string]: Reducer<S> }): Reducer;
    function reduceReducers<S>(...reducers: Reducer<S>[]): Reducer<S>;
    function handleApiCall(call: {
      types: [string, string, string];
    }): {
      reducer: Reducer;
      selectors: {
        fetchingStatus: <S>(localState: S, optionalRequestId: string) => GetContextEffect;
        fetchingStatusByRequestId: <S>(localState: S) => GetContextEffect;
        fetchingFailureMessage: <S>(localState: S, optionalRequestId: string) => GetContextEffect;
        fetchingFailureMessagesByRequestId: <S>(localState: S) => GetContextEffect;
      };
      _key: string;
    };
    const fetchingStatus: {
      fetching: 'FETCHING';
      failure: 'FAILURE';
      success: 'SUCCESS';
      default: 'DEFAULT'; // no action yet taken
    };
  }
}
