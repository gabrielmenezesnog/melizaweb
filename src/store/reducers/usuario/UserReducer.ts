import { Reducer } from '@reduxjs/toolkit';

// ActionTypes
import { userActionTypes } from './UserActionTypes';

// Interfaces
import { AuthState } from '../../Types';

const initialState: AuthState = {
  user: null,
  loggedIn: false,
};

// Reducer para a autenticação do usuário
export const userReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case userActionTypes.LOGIN_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case userActionTypes.SUCCESSFUL_LOGIN:
      return Object.assign({}, state, {
        user: action.payload.user.user,
        loggedIn: true,
      });
    case userActionTypes.SIGN_IN_FAIL:
      return Object.assign({}, state, {
        loggedIn: false,
      });
    case userActionTypes.LOGGED_OUT:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};
export default userReducer;
