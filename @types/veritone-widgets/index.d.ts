declare module 'veritone-widgets' {
  import React from 'react';
  import { Action } from 'redux';
  import { modules } from 'veritone-redux-common';
  import { ApiCallingAction } from 'veritone-redux-common/models';

  export type OAuthGrantRequest = Pick<
    OAuthLoginButtonPropTypes,
    'OAuthURI' | 'responseType' | 'scope' | 'clientId' | 'redirectUri'
  > & {
    onSuccess: OAuthLoginButtonPropTypes['onAuthSuccess'];
    onFailure: OAuthLoginButtonPropTypes['onAuthFailure'];
  };

  // ReturnType<OAuthLoginButtonPropTypes['onAuthSuccess']> | ReturnType<OAuthLoginButtonPropTypes['onAuthFailure']>;

  interface OAuthLoginButtonPropTypes {
    readonly requestOAuthGrant: (
      req: Pick<OAuthGrantRequest, 'OAuthURI' | 'onFailure' | 'onSuccess'>,
    ) => Action<modules.auth.REQUEST_OAUTH_GRANT> & {
      payload: Pick<OAuthGrantRequest, 'OAuthURI' | 'onFailure' | 'onSuccess'>;
    };
    readonly requestOAuthGrantImplicit: (
      req: OAuthGrantRequest,
    ) => Action<modules.auth.REQUEST_OAUTH_GRANT_IMPLICIT> & { payload: OAuthGrantRequest };

    readonly userIsAuthenticated: boolean;
    readonly mode?: 'implicit' | 'authCode';
    readonly onAuthSuccess: () => void;
    readonly onAuthFailure: () => void;
    readonly apiRoot: string;
    readonly OAuthURI?: string;
    // required params for implicit grant only:
    readonly responseType?: string;
    readonly scope?: string;
    readonly redirectUri?: string;
    readonly clientId?: string;
  }
  class OAuthLoginButton extends React.Component<OAuthLoginButtonPropTypes> {}

  interface AppBarPropTypes {
    readonly children?: React.ReactNode;
    readonly appSwitcher?: boolean;
    readonly profileMenu?: boolean;
    readonly backgroundColor?: string;
    readonly currentAppName?: string;
    readonly elevation?: number;
    readonly 'data-veritone-component'?: string;
    onLogout: () => ApiCallingAction<modules.user.UserStoreSlice>;
  }
  class AppBar extends React.Component<AppBarPropTypes> {}

  class MediaPlayer extends React.Component<any> {}
  class MediaPlayerControlBar extends React.Component<any> {}
}
