declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { AllEffect } from 'redux-saga/effects';
  import { ConfirmationState, AppStore } from 'veritone-redux-common/stores';

  export namespace modules {
    export namespace confirmation {
      type Namespace = 'confirmation';
      type ConfirmationStoreSlice = Pick<AppStore, Namespace>;

      const namespace: Namespace;
      const reducer: Reducer<ConfirmationState>;
      function confirmationRootSaga(): IterableIterator<AllEffect>;
    }
  }
}
