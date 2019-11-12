export class SagaRegistry {
  constructor() {
    this._emitChange = null;
    this._sagas = {};
  }

  getSagas() {
    return { ...this._sagas };
  }

  register(saga) {
    if (this._sagas[saga.name]) {
      return;
    }
    this._sagas = { ...this._sagas, [saga.name]: saga };
    if (this._emitChange) {
      this._emitChange(saga);
    }
  }

  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

export const sagaRegistry = new SagaRegistry();
