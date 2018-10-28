
declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { UiState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace uiState {
      type Namespace = 'ui-state';
      type EngineStoreSlice = Pick<AppStore, Namespace>;

      const reducer: Reducer<UiState>;
      const namespace: Namespace;
    }
  }
}
