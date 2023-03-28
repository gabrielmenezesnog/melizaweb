import { userActionTypes } from './UserActionTypes';

// Creators é um objeto que contém várias funções.

// Cada uma dessas funções é uma action creator, que é uma função
// que retorna uma ação.

// Cada ação é definida como uma função que retorna um objeto
// com uma propriedade type e um payload opcional. O type é
// definido como um valor de userActionTypes, e o payload pode
// conter dados adicionais que serão usados pelo reducer.

// Exemplo: se a função Creators.loginUser for chamada, o tipo será LOGIN_USER
// e o payload será email, password e o token passados

export const UserActions = {
  // Esta função é chamada quando um usuário tenta fazer login na aplicação.
  // Ela recebe três parâmetros: email, password e token. Em seguida, retorna
  // um objeto com um tipo de ação LOGIN_USER e um payload contendo as informações
  // do usuário que está tentando fazer login, como o email.
  loginUser: (email: string, password: string) => ({
    type: userActionTypes.LOGIN_USER,
    payload: { email, password },
  }),

  signInFail: (error: any) => ({
    // Esta função é chamada quando ocorre uma falha na autenticação do usuário.
    // Ela recebe um parâmetro error, que é uma string que descreve o erro que
    // ocorreu. Em seguida, ela retorna um objeto com um tipo de ação SIGN_IN_FAIL
    // e um payload contendo a mensagem de erro.
    type: userActionTypes.SIGN_IN_FAIL,
    payload: { error },
  }),

  successfulLogin: (user: any) => ({
    // Esta função é chamada quando um usuário é autenticado com sucesso.
    // Ela recebe um parâmetro user, que é um objeto contendo informações
    // do usuário autenticado, como nome, sobrenome, email, etc. Em seguida,
    // retorna um objeto com um tipo de ação SUCCESSFUL_LOGIN e um payload
    // contendo as informações do usuário autenticado.
    type: userActionTypes.SUCCESSFUL_LOGIN,
    payload: { user },
  }),

  loggedOut: () => ({
    // Esta função é chamada quando um usuário faz logout da aplicação. Ela
    // não recebe nenhum parâmetro e simplesmente retorna um objeto com um
    // tipo de ação LOGGED_OUT.
    type: userActionTypes.LOGGED_OUT,
  }),
};
