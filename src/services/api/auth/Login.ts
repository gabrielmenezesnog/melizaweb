// Interface usuário
import { api } from '../Axios';

export async function loginRequest(email: string, password: string) {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    console.log('email: ', email, 'senha: ', password);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro no login');
  }
}
