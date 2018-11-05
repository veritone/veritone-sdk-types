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
    requestOAuthGrant?: (
      req: Pick<OAuthGrantRequest, 'OAuthURI' | 'onFailure' | 'onSuccess'>,
    ) => Action<typeof modules.auth.REQUEST_OAUTH_GRANT> & {
      payload: Pick<OAuthGrantRequest, 'OAuthURI' | 'onFailure' | 'onSuccess'>;
    };
    requestOAuthGrantImplicit?: (
      req: OAuthGrantRequest,
    ) => Action<typeof modules.auth.REQUEST_OAUTH_GRANT_IMPLICIT> & { payload: OAuthGrantRequest };

    userIsAuthenticated?: boolean;
    onAuthSuccess?: () => void;
    onAuthFailure?: () => void;
    apiRoot?: string;
    mode?: 'implicit' | 'authCode';
    OAuthURI?: string;
    // required params for implicit grant only:
    responseType?: string;
    scope?: string;
    redirectUri?: string;
    clientId?: string;
  }
  class OAuthLoginButton extends React.Component<OAuthLoginButtonPropTypes> {}

  interface AppBarPropTypes {
    children?: React.ReactNode;
    appSwitcher?: boolean;
    profileMenu?: boolean;
    backgroundColor?: string;
    currentAppName?: string;
    elevation?: number;
    'data-veritone-component'?: string;
    onLogout: () => ApiCallingAction<modules.user.UserStoreSlice>;
  }
  class AppBar extends React.Component<AppBarPropTypes> {}

  class MediaPlayer extends React.Component<any> {}
  class MediaPlayerControlBar extends React.Component<any> {}
}
