declare module 'veritone-redux-common' {
  import { Action, Reducer } from 'redux';
  import { ConfigState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace config {
      type Namespace = 'config';
      type ConfigStoreSlice<C> = Pick<AppStore<C>, Namespace>;

      const reducer: Reducer<ConfigState<any>>;
      const namespace: Namespace;

      const SET_CONFIG = 'vtn/config/SET_CONFIG';

      function getConfig<C>(state: ConfigStoreSlice<C>): ConfigState<C>;
      function setConfig<C>(config: ConfigState<C>): Action<typeof SET_CONFIG> & { payload: ConfigState<C> };
    }
  }
}
