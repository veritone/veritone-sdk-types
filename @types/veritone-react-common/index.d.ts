declare module 'veritone-react-common' {
  import React from 'react';

  const appBarHeight: number;
  const topBarHeight: number;

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

  const FilePicker: React.PureComponent<any>;
  const ProgressDialog: React.PureComponent<any>;
  const TobBar: React.PureComponent<any>;
}
