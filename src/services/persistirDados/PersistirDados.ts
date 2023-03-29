import { AuthState } from '../../store/Types';

export const PersistirDados = {
  // LocalStorage - dados menos sensíveis
  localStorage: (user: AuthState) => {
    try {
      localStorage.setItem('userData', JSON.stringify(user));
    } catch (error) {
      throw new Error('Erro no login');
    }
  },
};
