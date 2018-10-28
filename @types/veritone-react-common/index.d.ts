declare module 'veritone-react-common' {
  import React from 'react';

  interface AppContainerPropTypes {
    children: React.ReactNode;
    leftOffset: number;
    topBarOffset: boolean;
    appBarOffset: boolean;
    appFooterOffset: 'short' | 'tall';
    classes: {
      root: string;
      inner: string;
    };
  }
  const AppContainer: React.PureComponent<AppContainerPropTypes>;
}
