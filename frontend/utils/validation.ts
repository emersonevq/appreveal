export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+55)?[ -]?([0-9]{2})[ -]?([0-9]{4,5})[ -]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};

export const validateFullName = (fullName: string): boolean => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
  return nameRegex.test(fullName);
};

export const getValidationError = (
  field: string,
  value: string
): string | undefined => {
  switch (field) {
    case 'email':
      if (!value) return 'Email é obrigatório';
      if (!validateEmail(value)) return 'Email inválido';
      return undefined;
    case 'password':
      if (!value) return 'Senha é obrigatória';
      if (!validatePassword(value)) return 'Mínimo 8 caracteres';
      return undefined;
    case 'fullName':
      if (!value) return 'Nome completo é obrigatório';
      if (!validateFullName(value)) return 'Nome inválido';
      return undefined;
    case 'username':
      if (!value) return 'Usuário é obrigatório';
      if (!validateUsername(value)) return 'Usuário deve ter 3-20 caracteres';
      return undefined;
    case 'phone':
      if (!value) return 'Telefone é obrigatório';
      if (!validatePhone(value)) return 'Telefone inválido';
      return undefined;
    default:
      return undefined;
  }
};
