
declare module 'veritone-redux-common' {
  import { Reducer } from 'redux';
  import { AllEffect } from 'redux-saga/effects';
  import { ConfirmationState } from 'veritone-redux-common/models';

  export namespace modules {
    export namespace confirmation {
      const namespace: 'confirmation';
      const reducer: Reducer<ConfirmationState>;
      function confirmationRootSaga(): IterableIterator<AllEffect>;
    }
  }
}
