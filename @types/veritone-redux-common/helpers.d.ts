/**
 * helpers namespace
 */
declare module 'veritone-redux-common' {
  import { Reducer, Middleware } from 'redux';
  import { GetContextEffect } from 'redux-saga/effects';
  import { CallApiRequest, ApiCallingAction } from 'veritone-redux-common/models';

  export namespace helpers {
    function callGraphQLApi<S, R>(req: CallApiRequest<S>): Promise<R>;
    function fetchGraphQLApi<S, R>(req: CallApiRequest<S>): Promise<R>;

    function createReducer<S>(initialState: S, handlers: Record<string, Reducer<S>>): Reducer<S>;
    function reduceReducers<S>(...reducers: Array<Reducer<S>>): Reducer<S>;

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

    const fetchingStatus: {
      fetching: 'FETCHING';
      failure: 'FAILURE';
      success: 'SUCCESS';
      default: 'DEFAULT'; // no action yet taken
    };
  }
}
