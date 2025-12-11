export interface SignUpData {
  step: 'email' | 'password' | 'profile';
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  username?: string;
  phone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  username?: string;
  phone?: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  username: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
}
