# Arquitetura Frontend

Documentação da arquitetura modular da aplicação de mensageiro instantâneo.

## 🏗️ Fluxo de Autenticação

```
RootLayout (app/_layout.tsx)
    ↓
   [Autenticado?]
   ↙️            ↘️
Não           Sim
 ↓              ↓
AuthScreen    (tabs) Layout
 ├─ Login       ├─ index (Home)
 │  ├─ Email    ├─ search
 │  ├─ Senha    ├─ profile
 │  └─ Social   └─ settings
 └─ SignUp (3 etapas)
    ├─ Email
    ├─ Senha
    └─ Perfil
```

## 📊 Estrutura de Pastas Futura

```
frontend/
├── components/
│   ├── auth/           # Componentes de autenticação
│   ├── chat/           # Componentes de chat
│   ├── common/         # Componentes compartilhados
│   └── layout/         # Layout components
├── screens/
│   ├── auth/           # Telas de autenticação
│   ├── chat/           # Telas de chat
│   ├── profile/        # Telas de perfil
│   └── settings/       # Telas de configurações
├── modules/
│   ├── auth/           # Lógica de autenticação
│   ├── chat/           # Lógica de chat
│   ├── user/           # Gerenciar usuários
│   └── api/            # Chamadas de API
├── hooks/
│   ├── useAuth.ts      # Autenticação
│   ├── useChat.ts      # Chat (futuro)
│   └── useUser.ts      # Usuário (futuro)
├── types/
│   ├── auth.ts         # Tipos de auth
│   ├── chat.ts         # Tipos de chat (futuro)
│   └── user.ts         # Tipos de usuário (futuro)
├── utils/
│   ├── validation.ts   # Validações
│   ├── formatting.ts   # Formatação (futuro)
│   └── storage.ts      # AsyncStorage (futuro)
└── assets/             # Imagens, ícones (futuro)
```

## 🔄 Fluxo de Dados

### Login
```
AuthScreen (login mode)
    ↓
Input: email, password
    ↓
validateStep()
    ↓
handleLogin()
    ↓
useAuth.login()
    ↓
API Call (TODO)
    ↓
setUser() → isAuthenticated = true
    ↓
RootLayout detecta autenticação
    ↓
Renderiza (tabs)
```

### SignUp
```
AuthScreen (signup mode)
    ↓
Step 1: Email
    ↓
Step 2: Senha
    ↓
Step 3: Perfil
    ↓
handleSignUp()
    ↓
useAuth.signup()
    ↓
API Call (TODO)
    ↓
setUser() → isAuthenticated = true
    ↓
Renderiza (tabs)
```

## 🎯 Integração com Backend (TODO)

### Supabase (Recomendado)
```tsx
// frontend/modules/api/auth.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(URL, KEY);

export async function loginWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signupWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}
```

### Usar no Hook
```tsx
// frontend/hooks/useAuth.ts
import { loginWithEmail, signupWithEmail } from '@/frontend/modules/api/auth';

const login = useCallback(async (data: LoginData) => {
  setIsLoading(true);
  try {
    const { data: authData, error } = await loginWithEmail(
      data.email,
      data.password
    );
    if (error) throw error;
    // setUser(authData.user);
  } finally {
    setIsLoading(false);
  }
}, []);
```

## 🎨 Design System

### Cores
- **Primária**: Sky Blue (#0ea5e9)
- **Fundo**: White (#ffffff)
- **Texto**: Gray-900 (#111827)
- **Secundário**: Gray-600 (#4b5563)

### Icons
- Email: Mail
- Senha: Lock
- Telefone: Phone
- Usuário: User
- Social: Chrome (Google), Github

### Componentes Base
- `Button` - Variantes: primary, secondary, outline, ghost
- `Input` - Com suporte a ícones e erros
- `PasswordInput` - Com toggle de visibilidade

## 📱 Responsividade

Toda a aplicação usa:
- **Tailwind CSS** com NativeWind
- **Flex layout** para flexibilidade
- **ScrollView** para conteúdo grande
- **Testado em diferentes tamanhos** de tela

## 🔒 Segurança

- ✅ Senhas validadas (mín. 8 caracteres)
- ✅ Emails validados
- ✅ Usernames com regex
- ✅ Sem armazenar senhas no estado
- 🚧 JWT tokens (TODO)
- 🚧 Refresh tokens (TODO)
- 🚧 Secure storage (TODO)

## 🚀 Próximas Prioridades

1. **Conectar Backend**
   - [ ] Implementar Supabase
   - [ ] Testes de autenticação
   - [ ] Persistência de sessão

2. **Chat Screen**
   - [ ] Lista de conversas
   - [ ] Mensagens em tempo real
   - [ ] Upload de mídia

3. **Perfil**
   - [ ] Editar perfil
   - [ ] Avatar upload
   - [ ] Status online

4. **Busca**
   - [ ] Buscar usuários
   - [ ] Histórico de buscas
   - [ ] Sugestões

5. **Settings**
   - [ ] Notificações
   - [ ] Privacidade
   - [ ] Tema (dark/light)
