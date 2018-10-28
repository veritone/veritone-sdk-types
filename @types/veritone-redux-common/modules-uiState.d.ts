
declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { UiState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace uiState {
      const reducer: Reducer<UiState>;
      const namespace: 'ui-state';
    }
  }
}
