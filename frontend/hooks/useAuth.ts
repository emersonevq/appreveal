import { useState, useCallback } from 'react';
import type { User, LoginData, SignUpData } from '@/frontend/types/auth';

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginData) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (data: LoginData) => {
    setIsLoading(true);
    try {
      // TODO: Implement API call
      console.log('Login:', data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (data: SignUpData) => {
    setIsLoading(true);
    try {
      // TODO: Implement API call
      console.log('Signup:', data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      // TODO: Implement API call
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };
}
