declare module 'veritone-react-common' {
  import React from 'react';
  import { InputProps } from '@material-ui/core/Input';
  import { SelectProps } from '@material-ui/core/Select';

  const appBarHeight: number;
  const topBarHeight: number;

  interface AppContainerPropTypes {
    readonly children?: React.ReactNode;
    readonly leftOffset?: number;
    readonly topBarOffset?: boolean;
    readonly appBarOffset?: boolean;
    readonly appFooterOffset?: 'short' | 'tall';
    readonly classes?: {
      readonly root?: string;
      readonly inner?: string;
    };
  }
  class AppContainer extends React.Component<AppContainerPropTypes> {}

  class FilePicker extends React.Component<AppContainerPropTypes> {}
  class ProgressDialog extends React.Component<AppContainerPropTypes> {}

  interface TopBarPropTypes {
    appBarOffset?: boolean;
    elevation?: number;
    leftOffset?: number;
    menuButton?: boolean;
    backButton?: boolean;
    selected?: boolean;
    rightMenu?: boolean;
    leftText?: string;
    rightMenuItems: ReadonlyArray<{
      label?: string;
      handler: () => void;
    }>;
    rightIconButtons: ReadonlyArray<React.ReactNode>;
    onRequestOpenMenu: (event: MouseEvent) => void;
    onClickBackButton: (event: MouseEvent) => void;
  }
  class TopBar extends React.Component<TopBarPropTypes> {}

  namespace formComponents {
    class Input extends React.Component<InputProps> {}
    class Select extends React.Component<SelectProps> {}
  }
}
