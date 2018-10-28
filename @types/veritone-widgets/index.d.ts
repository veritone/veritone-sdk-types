declare module 'veritone-widgets' {
  import React from 'react';

  interface OAuthLoginButtonPropTypes {
    readonly children: React.ReactNode;
    readonly clientId: string;
    readonly redicertUri: string;
  }
  const OAuthLoginButton: React.PureComponent<OAuthLoginButtonPropTypes>;

  interface AppBarPropTypes {
    readonly children: React.ReactNode;
    appSwitcher: boolean;
    profileMenu: boolean;
    backgroundColor: string;
    currentAppName: string;
    onLogout: () => void;
    elevation: number;
    'data-veritone-component': string;
  }
  const AppBar: React.PureComponent<AppBarPropTypes>;
}
