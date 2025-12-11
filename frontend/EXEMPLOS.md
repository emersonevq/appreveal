# Exemplos de Uso

Exemplos práticos de como usar e estender o módulo frontend.

## ✅ Usando a Tela de Auth

### Integrado no App
```tsx
// app/_layout.tsx
import { AuthScreen } from '@/frontend';

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return <TabsLayout />;
}
```

## 🎨 Usando Componentes Individualmente

### AuthHeader
```tsx
import { AuthHeader } from '@/frontend';

export function MyCustomScreen() {
  return (
    <View>
      <AuthHeader 
        title="Configurações de Perfil"
        subtitle="Atualize suas informações"
      />
      {/* resto do conteúdo */}
    </View>
  );
}
```

### StepIndicator em Outro Contexto
```tsx
import { StepIndicator, FormSection } from '@/frontend';

export function OnboardingScreen() {
  const [step, setStep] = useState(1);

  return (
    <View className="flex-1 px-6 py-8">
      <StepIndicator currentStep={step} totalSteps={4} />
      <FormSection title={`Passo ${step}`}>
        {/* conteúdo do passo */}
      </FormSection>
    </View>
  );
}
```

### PasswordInput em Formulário
```tsx
import { PasswordInput } from '@/frontend';

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <View className="gap-4">
      <PasswordInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="Senha atual"
        error={errors.current}
      />
      <PasswordInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Nova senha"
        error={errors.new}
      />
    </View>
  );
}
```

## 🔐 Usando Validações

### Validar Email
```tsx
import { getValidationError } from '@/frontend';

const error = getValidationError('email', 'invalido');
// Retorna: "Email inválido"
```

### Validar Todas as Etapas
```tsx
import { 
  validateEmail,
  validatePassword,
  validateUsername,
  validateFullName,
  validatePhone 
} from '@/frontend';

function validateFormData(data) {
  const errors = {};

  if (!validateEmail(data.email)) {
    errors.email = 'Email inválido';
  }

  if (!validatePassword(data.password)) {
    errors.password = 'Mínimo 8 caracteres';
  }

  if (!validateUsername(data.username)) {
    errors.username = 'Username deve ter 3-20 caracteres alpanuméricos';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Telefone inválido';
  }

  return errors;
}
```

## 🪝 Usando useAuth Hook

### No Settings Screen
```tsx
import { useAuth } from '@/frontend';
import { Button } from '@/components/Button';

export default function SettingsScreen() {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>Logado como: {user?.fullName}</Text>
      <Text>Email: {user?.email}</Text>
      <Button onPress={logout}>Sair</Button>
    </View>
  );
}
```

### Acessar Dados do Usuário
```tsx
import { useAuth } from '@/frontend';

export function ProfileHeader() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Text>Não autenticado</Text>;
  }

  return (
    <View>
      <Text className="text-2xl font-bold">{user?.fullName}</Text>
      <Text className="text-gray-600">@{user?.username}</Text>
    </View>
  );
}
```

## 📦 Criando Novos Componentes Customizados

### Botão com Ícone
```tsx
// frontend/components/IconButton.tsx
import { Pressable, View } from 'react-native';
import { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  label?: string;
}

export function IconButton({ icon, onPress, label }: IconButtonProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="p-3 rounded-full active:bg-gray-100">
      {icon}
    </Pressable>
  );
}

// Usar:
import { IconButton } from '@/frontend/components/IconButton';
import { Heart } from 'lucide-react-native';

<IconButton 
  icon={<Heart size={24} color="red" />}
  onPress={() => console.log('Liked!')}
/>
```

### Card de Conversa
```tsx
// frontend/components/ChatCard.tsx
import { View, Text, Pressable, Image } from 'react-native';

interface ChatCardProps {
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
}

export function ChatCard({
  name,
  avatar,
  lastMessage,
  timestamp,
  unread,
}: ChatCardProps) {
  return (
    <Pressable className="flex-row items-center p-4 border-b border-gray-100">
      {avatar && (
        <Image
          source={{ uri: avatar }}
          className="w-12 h-12 rounded-full mr-3"
        />
      )}
      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-gray-900">{name}</Text>
          <Text className="text-xs text-gray-600">{timestamp}</Text>
        </View>
        <Text className="text-gray-600 text-sm mt-1">{lastMessage}</Text>
      </View>
      {unread && (
        <View className="bg-sky-500 rounded-full w-6 h-6 items-center justify-center ml-2">
          <Text className="text-white text-xs font-bold">{unread}</Text>
        </View>
      )}
    </Pressable>
  );
}
```

## 🔄 Extendendo Validações

### Adicionar Validação Customizada
```tsx
// frontend/utils/validation.ts
export const validateCPF = (cpf: string): boolean => {
  // Implementar lógica de validação de CPF
  const cleanCPF = cpf.replace(/\D/g, '');
  return cleanCPF.length === 11; // Simplificado
};

export const getValidationError = (field: string, value: string) => {
  // ... código existente ...
  case 'cpf':
    if (!value) return 'CPF é obrigatório';
    if (!validateCPF(value)) return 'CPF inválido';
    return undefined;
};
```

### Usar em Formulário
```tsx
import { getValidationError } from '@/frontend';

const cpfError = getValidationError('cpf', '12345678901');
```

## 📲 Integrando com Supabase (Exemplo)

```tsx
// frontend/modules/api/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'sua-url';
const supabaseKey = 'sua-chave';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signupUser(
  email: string,
  password: string,
  profile: { fullName: string; username: string }
) {
  // Criar usuário
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // Criar perfil
  const { error: profileError } = await supabase.from('profiles').insert({
    id: authData.user?.id,
    full_name: profile.fullName,
    username: profile.username,
  });

  if (profileError) throw profileError;

  return authData;
}
```

### Usar no Hook
```tsx
// frontend/hooks/useAuth.ts
import { signupUser } from '@/frontend/modules/api/supabase';

export function useAuth() {
  const signup = useCallback(async (data: SignUpData) => {
    setIsLoading(true);
    try {
      await signupUser(data.email!, data.password!, {
        fullName: data.fullName!,
        username: data.username!,
      });
      // Sucesso!
    } catch (error) {
      // Erro
    } finally {
      setIsLoading(false);
    }
  }, []);
}
```

## 🎯 Boas Práticas

### ✅ Faça
```tsx
// Componentes reutilizáveis e bem tipados
interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return <View>{/* ... */}</View>;
}
```

### ❌ Não Faça
```tsx
// Componentes muito genéricos ou sem tipos
export function Card(props) {
  return <View>{props.children}</View>;
}
```

### ✅ Faça
```tsx
// Separar lógica de validação em utils
const error = getValidationError('email', email);
```

### ❌ Não Faça
```tsx
// Colocar validação direto no componente
if (!email.includes('@')) {
  setError('Email inválido');
}
```

## 📚 Recursos Úteis

- [React Native Docs](https://reactnative.dev)
- [Expo Router](https://docs.expo.dev/router/introduction)
- [Lucide Icons](https://lucide.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [NativeWind](https://www.nativewind.dev)
