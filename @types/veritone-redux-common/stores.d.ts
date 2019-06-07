declare module 'veritone-redux-common/stores' {
  import { AnyAction } from 'redux';
  import { Application, Engine, EngineCategory } from 'veritone-types';
  import { modules } from 'veritone-redux-common';
  import { User } from 'veritone-redux-common/models';

  export interface AppStore<C = {}> {
    readonly [modules.auth.namespace]: AuthState;
    readonly [modules.config.namespace]: ConfigState;
    readonly [modules.confirmation.namespace]: ConfirmationState<C>;
    readonly [modules.engine.namespace]: EngineState;
    readonly [modules.uiState.namespace]: UiState;
    readonly [modules.user.namespace]: UserState;
  }

  export interface AuthState {
    readonly OAuthToken: null | string;
    readonly OAuthErrorCode: null | modules.auth.OAUTH_ERROR_CODES;
    readonly OAuthErrorDescription: null | string;
    readonly sessionToken: null | string;
  }

  export interface ConfirmationState {
    confirmations: { readonly [id: string]: any | undefined };
  }

  export interface EngineState {
    readonly enginesById: { readonly [id: string]: Engine };
    readonly isFetching: boolean;
    readonly fetchingFailed: boolean;
    readonly engineCategories: ReadonlyArray<EngineCategory>;
    readonly isFetchingCategories: boolean;
    readonly fetchingCategoriesFailed: boolean;
  }

  export interface UiState {
    readonly [key: string]: any | undefined;
  }

  export interface UserState {
    readonly user: User;
    readonly isFetching: boolean;
    readonly fetchingFailed: boolean;
    readonly isLoggingIn: boolean;
    readonly loginFailed: boolean;
    readonly loginFailureMessage?: string;
    readonly isFetchingApplications: boolean;
    readonly fetchApplicationsFailed: boolean;
    readonly fetchApplicationsFailureMessage?: string;
    readonly enabledApps: ReadonlyArray<Application>;
  }

  type ConfigStateExt = Record<string, string | number | boolean | undefined | ConfigStateExt>;

  export interface ConfigState<KV extends ConfigStateExt = {}> {
    readonly nodeEnv: string;
    readonly taskTablePartitionActiveDate: string;
    readonly jobTablePartitionActiveDate: string;
    readonly recordingAssetTablePartitionActiveDate: string;
    readonly recordingWeekConfig: {
      readonly weeklyIdsDateActive: string;
      readonly weekOffset: number;
    };
    readonly apiRoot: string;
    readonly switchAppRoute: string;
    readonly loginRoute: string;
    readonly auth: {
      readonly userTokenCookieName: string;
    };
    readonly mandrillAPIKey: string;
    readonly publicDnsZoneName: string;
    readonly jwt: {
      readonly secret: string;
      readonly ttl: string;
    };
    readonly segmentIoId: string;
    readonly segmentIoKey: string;
    readonly segmentWriteKey: string;
    readonly tdoRedactStateSchemaId: string;
    readonly graphQLEndpoint: string;
    readonly allowedOriginHosts: ReadonlyArray<string>;
    readonly log: {
      readonly console: {
        readonly color: boolean;
        readonly enable: boolean;
        readonly level: string;
      };
      readonly file: boolean;
      readonly fileName: string;
      readonly level: string;
      readonly 'log.console': boolean;
      readonly 'log.consoleColor': boolean;
      readonly 'log.file': boolean;
      readonly 'log.level': string;
      readonly 'log.profile': boolean;
      readonly 'log.remote': boolean;
      readonly loggly: {
        readonly enable: boolean;
      };
      readonly profile: boolean;
    };
    readonly newRelic: {
      readonly enable: boolean;
      readonly errorCollectorIgnoreCodes: string;
      readonly licenseKey: string;
      readonly logLevel: string;
    };
    readonly requireComplexPassword: boolean;
    readonly pendoKey: string;
    readonly port: number;
    readonly skipMiddleware: boolean;
    readonly aiware: {
      readonly enabled: boolean;
      readonly organizationApplicationId: string;
    };
    readonly mediaFormats: ReadonlyArray<string>;
    readonly services: {
      readonly coreAdminUri: string;
    };
  }
}
