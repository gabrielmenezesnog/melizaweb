import { all, fork } from 'redux-saga/effects';
import { authSaga } from './sagas/usuario/UserSaga';

// Neste código, estamos usando fork para "clonar" cada
// saga e executá-la em paralelo. Dessa forma, o Redux Saga
// pode executar várias sagas simultaneamente, em vez de
// executá-las sequencialmente.

// Também exportamos o rootSaga como padrão. Isso permitirá
// importar a raiz da saga em nosso arquivo store.ts

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    // fork(PróximaSaga), etc...
  ]);
}
