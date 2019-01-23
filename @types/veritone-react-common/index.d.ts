declare module 'veritone-react-common' {
  import React from 'react';
  import { InputProps } from '@material-ui/core/Input';
  import { SelectProps } from '@material-ui/core/Select';

  const appBarHeight: number;
  const topBarHeight: number;

  interface AppContainerPropTypes {
    children?: React.ReactNode;
    leftOffset?: number;
    topBarOffset?: boolean;
    appBarOffset?: boolean;
    appFooterOffset?: 'short' | 'tall';
    classes?: {
      root?: string;
      inner?: string;
    };
  }
  class AppContainer extends React.Component<AppContainerPropTypes> {}

  interface FilePickerPropTypes {
    accept?: string[] | string;
    multiple?: boolean;
    width?: number;
    height?: number;
    onPickFiles?: Function;
    onRequestClose?: Function;
    allowUrlUpload?: boolean;
  }
  class FilePicker extends React.Component<FilePickerPropTypes> {}

  interface ProgressDialogPropTypes {
    percentComplete?: number;
    progressMessage?: string;
    height?: number;
    width?: number;
    completeStatus?: 'success' | 'failure' | 'warning';
  }
  class ProgressDialog extends React.Component<ProgressDialogPropTypes> {}

  interface TopBarPropTypes {
    appBarOffset?: boolean;
    elevation?: number;
    leftOffset?: number;
    menuButton?: boolean;
    backButton?: boolean;
    selected?: boolean;
    rightMenu?: boolean;
    leftText?: string;
    rightMenuItems?: ReadonlyArray<{
      label?: string;
      handler: () => void;
    }>;
    rightIconButtons?: ReadonlyArray<React.ReactNode>;
    onRequestOpenMenu?: (event: MouseEvent) => void;
    onClickBackButton?: (event: MouseEvent) => void;
  }
  class TopBar extends React.Component<TopBarPropTypes> {}

  namespace formComponents {
    const Input: (props: InputProps) => JSX.Element;
    const Select: (props: SelectProps) => JSX.Element;
  }
}
