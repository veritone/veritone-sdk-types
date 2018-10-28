declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { EngineState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace engine {
      type Namespace = 'engine';
      type EngineStoreSlice = Pick<AppStore, Namespace>;

      const namespace: Namespace;
      const reducer: Reducer<EngineState>;
    }
  }
}
