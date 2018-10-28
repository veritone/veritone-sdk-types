declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { EngineState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace engine {
      const namespace: 'engine';
      const reducer: Reducer<EngineState>;
    }
  }
}
