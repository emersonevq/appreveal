# Frontend - Módulo de Autenticação

Estrutura modular e escalável para autenticação em aplicação de mensageiro instantâneo brasileira.

## 📂 Organização

```
frontend/
├── components/       # Componentes reutilizáveis de UI
├── screens/         # Telas completas (LoginScreen, etc)
├── hooks/           # Custom hooks (useAuth, etc)
├── types/           # Tipos TypeScript compartilhados
├── utils/           # Funções utilitárias (validação, etc)
└── modules/         # Estado, services, API (próximo)
```

## 🎨 Componentes Disponíveis

### AuthHeader
```tsx
import { AuthHeader } from '@/frontend';

<AuthHeader 
  title="Bem-vindo"
  subtitle="Crie sua conta para continuar"
/>
```

### StepIndicator
```tsx
<StepIndicator currentStep={1} totalSteps={3} />
```

### PasswordInput
```tsx
<PasswordInput
  value={password}
  onChangeText={setPassword}
  placeholder="Senha"
  error={errors.password}
/>
```

### SocialLoginButtons
```tsx
<SocialLoginButtons
  onGooglePress={() => handleGoogleLogin()}
  onGithubPress={() => handleGithubLogin()}
/>
```

## 🔐 Validações

Funções prontas para validar dados:

```tsx
import { 
  validateEmail,
  validatePassword,
  validateUsername,
  validatePhone,
  validateFullName,
  getValidationError
} from '@/frontend';

getValidationError('email', 'test@example.com'); // undefined (válido)
getValidationError('password', '123'); // "Mínimo 8 caracteres"
```

## 🪝 Hooks

### useAuth
```tsx
import { useAuth } from '@/frontend';

const { user, isAuthenticated, login, signup, logout } = useAuth();

await login({ email: 'user@example.com', password: '12345678' });
```

## 📝 Tipos

```tsx
import type { User, LoginData, SignUpData } from '@/frontend';
```

## 🚀 Próximos Passos

1. **Integração com Backend**
   - Implementar chamadas API em `hooks/useAuth.ts`
   - Conectar com Supabase/Neon para autenticação

2. **Estado Global**
   - Criar `modules/store/` com Context ou Zustand
   - Persistir autenticação com AsyncStorage

3. **Telas Adicionais**
   - Recuperação de senha
   - Verificação de email
   - Edição de perfil

4. **Home Screen**
   - Lista de conversas
   - Chat interface
   - Perfil do usuário

## 🎯 Princípios

- ✅ **Modular**: Fácil de manter e estender
- ✅ **Reutilizável**: Componentes independentes
- ✅ **Type-safe**: TypeScript em tudo
- ✅ **Português**: UI totalmente localizado
- ✅ **Moderno**: Icons Lucide, design limpo
