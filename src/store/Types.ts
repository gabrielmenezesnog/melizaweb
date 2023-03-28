export interface AuthState {
  user: User | null;
  loggedIn: boolean;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  password: string;
  tokenType: string;
  accessToken: string;
}
