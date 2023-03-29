import { call, put, takeLatest } from 'redux-saga/effects';
import { userActionTypes } from '../../reducers/usuario/UserActionTypes';
import { loginRequest } from '../../../services/api/auth/Login';

import { UserActions } from '../../reducers/usuario/UserActions';
import { PersistirDados } from '../../../services/persistirDados/PersistirDados';

// yield é usado para pausar a execução de uma função geradora
// enquanto aguarda a conclusão de uma operação assíncrona, e
// para retornar valores para a função que a chamou.

// No contexto do Redux Saga, usamos a palavra-chave yield para
// pausar a execução de uma função quando ela está esperando a
// conclusão de uma operação assíncrona, como uma requisição de
// API. Enquanto a operação estiver em andamento, a execução da
// função é pausada e outras ações podem ser executadas, como
// atualizar o estado do aplicativo.

// Funções relacionadas a autenticação do usuário abaixo

function* loginSaga(action: {
  type: string;
  payload: { email: string; password: string };
}): any {
  try {
    // Fazer uma chamada para o servidor de autenticação aqui
    const response = yield call(
      loginRequest,
      action.payload.email,
      action.payload.password
    );
    console.log('resposta do login: ', response);
    yield put(UserActions.successfulLogin({ user: response, loggedIn: true }));

    // Salvando dados do usuário no navegador
    PersistirDados.localStorage({
      user: {
        id: response.id,
        name: response.name,
        email: response.email,
        accessToken: response.accessToken,
        tokenType: response.tokenType,
      },
      loggedIn: true,
    });
  } catch (error: any) {
    yield put(
      UserActions.signInFail({
        error: 'email ou senha inválidos',
        loggedIn: false,
      })
    );
  }
}

function* logout() {
  // yield call(api.logout);
  yield put({ type: userActionTypes.LOGGED_OUT });
}

export function* authSaga() {
  yield takeLatest(userActionTypes.LOGIN_USER, loginSaga);
  yield takeLatest(userActionTypes.LOGGED_OUT, logout);
}
