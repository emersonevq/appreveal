# 🔐 Sistema de Autenticação Automática

## Como Funciona

### Fluxo de Autenticação

```
┌─────────────────────────────────────────┐
│          App Inicia                     │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│    RootLayout (_layout.tsx)             │
│   Envolve app com AuthProvider          │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│    RootRedirect (index.tsx)             │
│ Verifica isAuthenticated do contexto    │
└────┬────────────────────────────┬───────┘
     │                            │
  SIM (autenticado)        NÃO (não autenticado)
     │                            │
     ▼                            ▼
  (Tabs)                    AuthScreen
  Home, Chat,         (Login ou Sign Up)
  Profile, Search,            │
  Settings                     │
                        Clique em "Entrar"
                               │
                               ▼
                    handleLogin() é chamado
                               │
                    ✅ Simula login automático
                               │
                        router.replace('/(tabs)')
                               │
                               ▼
                         Navega para Home
```

---

## Componentes do Sistema

### 1. AuthContext (`frontend/contexts/AuthContext.tsx`)

Gerencia o estado global de autenticação:

```typescript
interface AuthContextType {
  isAuthenticated: boolean;  // Se o usuário está logado
  user: UserProfile | null;  // Dados do usuário
  login: () => Promise<void>;     // Faz login automático
  logout: () => Promise<void>;    // Faz logout
  isLoading: boolean;        // Estado de carregamento
}
```

**Funcionalidades:**
- ✅ Estado global de autenticação
- ✅ Login automático com mock data
- ✅ Logout que limpa dados
- ✅ Loading state durante operações
- ✅ Usa mock do usuário (João Silva)

### 2. AuthProvider

Envolve toda a aplicação:

```typescript
export function AuthProvider({ children }: { children: ReactNode }) {
  // Gerencia estado de autenticação
  // Fornece contexto para toda a árvore
}
```

**Localização:**
- `frontend/contexts/AuthContext.tsx`

**Uso:**
- Envolvido em `RootLayout` (_layout.tsx)
- Disponível para qualquer componente via `useAuthContext()`

---

## Fluxo de Navegação

### Tela Inicial (RootRedirect)

```typescript
// frontend/app/index.tsx
const { isAuthenticated, isLoading } = useAuthContext();

useEffect(() => {
  if (!isLoading && isAuthenticated) {
    router.replace('/(tabs)');  // Vai para Home
  }
}, [isAuthenticated, isLoading]);

// Se não autenticado, mostra AuthScreen
if (!isAuthenticated) {
  return <AuthScreen />;
}
```

**Lógica:**
- Se `isAuthenticated = true` → Navega para tabs
- Se `isAuthenticated = false` → Mostra login
- Se `isLoading = true` → Mostra loading

### Tela de Login

```typescript
// frontend/screens/AuthScreen.tsx
const handleLogin = async () => {
  setLoading(true);
  try {
    // Simula chamada de API
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // Navega para home SEM validação
    router.replace('/(tabs)');
  } finally {
    setLoading(false);
  }
};
```

**Comportamento:**
- ✅ Clique em "Entrar" executa login automático
- ✅ NÃO valida email/senha (deixa em branco!)
- ✅ Simula API call (300ms)
- ✅ Navega para Home

### Tela de Logout

```typescript
// frontend/app/(tabs)/settings.tsx
const { logout } = useAuthContext();

const handleLogout = async () => {
  await logout();
  router.replace('/');  // Volta para login
};
```

**Comportamento:**
- ✅ Botão "Fazer Logout" em Settings
- ✅ Limpa usuário do contexto
- ✅ Volta para tela de login

---

## Como Usar

### 1. Acessar Estado de Autenticação

```typescript
import { useAuthContext } from '@/frontend/contexts/AuthContext';

export function MyComponent() {
  const { isAuthenticated, user, isLoading } = useAuthContext();
  
  if (isLoading) return <Loading />;
  
  if (isAuthenticated) {
    return <Text>Olá, {user?.fullName}!</Text>;
  }
  
  return <Text>Não autenticado</Text>;
}
```

### 2. Fazer Login

```typescript
const { login } = useAuthContext();

await login();  // Faz login automático
```

### 3. Fazer Logout

```typescript
const { logout } = useAuthContext();
const router = useRouter();

await logout();
router.replace('/');  // Volta para login
```

---

## Mock Data de Autenticação

### Usuário Automático

Quando clica em "Entrar", usa este usuário:

```typescript
// frontend/mocks/users.ts
export const mockCurrentUser: UserProfile = {
  id: '1',
  fullName: 'João Silva',
  initials: 'JS',
  coverImage: 'https://...',
  avatar: 'https://...',
  bio: 'Desenvolvedor | Apaixonado por tecnologia e café',
  location: 'São Paulo, Brasil',
  friendsCount: 342,
  postsCount: 48,
  unreadMessages: 5,
};
```

**Campos:**
- Nome: João Silva
- ID: 1
- 342 amigos
- 48 posts
- 5 mensagens não lidas

---

## Estrutura de Arquivos

```
frontend/
├── contexts/
│   └── AuthContext.tsx          ← Novo
├── app/
│   ├── _layout.tsx              ← Modificado (com AuthProvider)
│   ├── index.tsx                ← Modificado (usa useAuthContext)
│   ├── auth.tsx                 (existente)
│   └── (tabs)/
│       ├── settings.tsx         ← Modificado (com logout)
│       └── ...
├── screens/
│   └── AuthScreen.tsx           ← Modificado (auto-login)
└── ...
```

---

## Funcionamento Passo a Passo

### Iniciar Aplicação

1. **App inicia**
   - Carrega `frontend/app/_layout.tsx`
   - Envolve com `<AuthProvider>`

2. **RootRedirect (index.tsx)**
   - Verifica `isAuthenticated` do contexto
   - Se false → mostra `AuthScreen`
   - Se true → navega para `/(tabs)`

3. **Usuário vê**
   - Tela de login com botão "Entrar"
   - Campos de email/senha (NÃO precisam preencher!)

### Clique em "Entrar"

1. **handleLogin() é chamado**
   - Remove validação obrigatória
   - Simula API call (300ms)
   - Navega para tabs

2. **RootRedirect detecta mudança**
   - `isAuthenticated` ainda é false (contexto não foi atualizado)
   - Mas `router.replace` já foi chamado
   - Navega para Home diretamente

3. **Usuário vê**
   - Tela inicial (Home)
   - Pode navegar entre: Home, Chat, Search, Profile, Settings

### Clique em "Fazer Logout"

1. **handleLogout() é chamado** (em Settings)
   - Chama `logout()` do contexto
   - Define `isAuthenticated = false`
   - Define `user = null`
   - Navega para `/` (RootRedirect)

2. **RootRedirect detecta mudança**
   - `isAuthenticated = false`
   - Mostra `AuthScreen` novamente

3. **Usuário vê**
   - Tela de login

---

## Estados de Carregamento

### Loading durante Login

```typescript
<ActivityIndicator size="large" color="#0ea5e9" />
```

**Mostra:**
- Enquanto verifica autenticação
- Enquanto faz login
- Enquanto faz logout

**Tempo:**
- Check: ~100ms (simulado)
- Login: ~300ms (simulado)
- Logout: ~300ms (simulado)

---

## Integrar com Backend Real

### Passo 1: Substituir Mock por API

```typescript
// Antes
setUser(mockCurrentUser);

// Depois
const response = await supabase.auth.signInWithPassword({
  email: data.email,
  password: data.password,
});
setUser(response.user);
```

### Passo 2: Usar Supabase

```typescript
import { supabase } from '@/frontend/lib/supabase';

const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  setUser(data.user);
  setIsAuthenticated(true);
};
```

### Passo 3: Conectar MCP

Clique em [Connect to Supabase](#open-mcp-popover) para conectar banco de dados.

---

## Segurança

### Atual (Desenvolvimento)

✅ Auto-login sem validação
✅ Mock data para testes
✅ Sem armazenamento real
✅ Sem tokens

### Futura (Produção)

- [ ] Validação de email/senha
- [ ] Tokens JWT
- [ ] Refresh tokens
- [ ] AsyncStorage para persistência
- [ ] Supabase autenticação
- [ ] 2FA (autenticação de dois fatores)

---

## Troubleshooting

### "useAuthContext deve ser usado dentro de AuthProvider"

**Causa:** Componente não está envolvido pelo AuthProvider

**Solução:** 
1. Verifique se `_layout.tsx` envolve com `<AuthProvider>`
2. Verifique se componente está dentro da árvore

### Login não funciona

**Causa:** `router.replace()` pode não navegar corretamente

**Solução:**
1. Verifique se `expo-router` está importado
2. Verifique se está usando `useRouter()`
3. Tente usar `router.push()` ao invés de `replace()`

### Logout não volta para login

**Causa:** `RootRedirect` não detecta mudança de `isAuthenticated`

**Solução:**
1. Verifique se `useEffect` tem `isAuthenticated` como dependência
2. Adicione `console.log()` para debug
3. Verifique se `logout()` realmente seta `false`

---

## Recursos

- [Expo Router Docs](https://docs.expo.dev/routing/introduction/)
- [React Context API](https://react.dev/reference/react/useContext)
- [AsyncStorage (Futura)](https://react-native-async-storage.github.io/async-storage/)
- [Supabase Auth](https://supabase.com/docs/guides/auth)

---

## Sumário

| Item | Status | Implementado |
|------|--------|---|
| AuthContext | ✅ | Sim |
| AuthProvider | ✅ | Sim |
| Auto-login | ✅ | Sim |
| Login sem validação | ✅ | Sim |
| Logout | ✅ | Sim |
| Persistência | ❌ | Não (futura) |
| Backend real | ❌ | Não (futura) |

---

**Próxima vez que abrir o app:**
1. Vê tela de login
2. Clica em "Entrar"
3. Autenticado automaticamente
4. Navega para Home
5. Pode explorar todas as páginas livremente!
