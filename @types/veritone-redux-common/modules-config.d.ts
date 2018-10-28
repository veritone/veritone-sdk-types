declare module 'veritone-redux-common' {
  import { Action, Reducer } from 'redux';
  import { Config, AppState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace config {
      const reducer: Reducer<Config>;
      const namespace: 'config';
      const SET_CONFIG: 'vtn/config/SET_CONFIG';
      function getConfig(state: AppState): Config;
      function setConfig(config: Config): Action<'vtn/config/SET_CONFIG'> & { payload: Config };
    }
  }
}
