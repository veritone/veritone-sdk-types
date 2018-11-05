declare module 'veritone-redux-common' {
  import { Action, Reducer } from 'redux';
  import { ConfigState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace config {
      type Namespace = 'config';
      type ConfigStoreSlice = Pick<AppStore, Namespace>;

      const reducer: Reducer<ConfigState>;
      const namespace: Namespace;

      const SET_CONFIG = 'vtn/config/SET_CONFIG';

      function getConfig(state: ConfigStoreSlice): ConfigState;
      function setConfig(config: ConfigState): Action<typeof SET_CONFIG> & { payload: ConfigState };
    }
  }
}
