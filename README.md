# React Native Expo App

App completo React Native com Expo, TypeScript e Tailwind CSS (NativeWind).

## 🚀 Tecnologias

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Tipagem estática para JavaScript
- **NativeWind** - Tailwind CSS para React Native
- **Expo Router** - Navegação baseada em arquivos
- **Lucide Icons** - Biblioteca de ícones

## 📁 Estrutura do Projeto

```
├── app/
│   ├── (tabs)/           # Navegação por tabs
│   │   ├── _layout.tsx   # Configuração das tabs
│   │   ├── index.tsx     # Tela Home
│   │   ├── search.tsx    # Tela de Busca
│   │   ├── profile.tsx   # Tela de Perfil
│   │   └── settings.tsx  # Tela de Configurações
│   ├── _layout.tsx       # Layout raiz
│   └── +not-found.tsx    # Tela de erro 404
├── components/           # Componentes reutilizáveis
│   ├── Button.tsx        # Botão customizável
│   ├── Card.tsx          # Card container
│   ├── Input.tsx         # Campo de input
│   ├── Avatar.tsx        # Avatar de usuário
│   ├── Badge.tsx         # Badge/etiqueta
│   └── index.ts          # Exports dos componentes
├── hooks/                # Custom hooks
│   ├── useDebounce.ts    # Hook para debounce
│   ├── useToggle.ts      # Hook para toggle
│   ├── useAsync.ts       # Hook para operações async
│   └── useFrameworkReady.ts
├── utils/                # Funções utilitárias
│   ├── format.ts         # Formatação de dados
│   └── validation.ts     # Validações
├── types/                # Definições de tipos TypeScript
│   └── index.ts
├── constants/            # Constantes
│   └── theme.ts          # Tema (cores, espaçamentos)
├── assets/               # Imagens e recursos
├── tailwind.config.js    # Configuração Tailwind
├── global.css            # Estilos globais
└── babel.config.js       # Configuração Babel

```

## 🎨 Componentes Disponíveis

### Button
Botão customizável com variantes e tamanhos.

```tsx
import { Button } from '@/components';

<Button variant="primary" size="md" onPress={() => {}}>
  Clique aqui
</Button>
```

### Card
Container para agrupar conteúdo.

```tsx
import { Card } from '@/components';

<Card variant="elevated">
  <Text>Conteúdo do card</Text>
</Card>
```

### Input
Campo de entrada com suporte a ícones e validação.

```tsx
import { Input } from '@/components';
import { Mail } from 'lucide-react-native';

<Input
  label="Email"
  placeholder="Digite seu email"
  leftIcon={<Mail size={20} />}
  error="Email inválido"
/>
```

### Avatar
Exibe foto ou iniciais do usuário.

```tsx
import { Avatar } from '@/components';

<Avatar initials="JD" size="lg" />
```

### Badge
Etiqueta para status ou categorias.

```tsx
import { Badge } from '@/components';

<Badge variant="success">Ativo</Badge>
```

## 🪝 Custom Hooks

### useDebounce
Adiciona debounce a valores.

```tsx
import { useDebounce } from '@/hooks/useDebounce';

const debouncedSearch = useDebounce(searchTerm, 500);
```

### useToggle
Gerencia estado booleano.

```tsx
import { useToggle } from '@/hooks/useToggle';

const [isOpen, toggle, setIsOpen] = useToggle(false);
```

### useAsync
Gerencia operações assíncronas.

```tsx
import { useAsync } from '@/hooks/useAsync';

const { data, loading, error, execute } = useAsync(fetchData);
```

## 🛠️ Utilitários

### Formatação
- `formatDate()` - Formata datas
- `formatTime()` - Formata horários
- `formatNumber()` - Formata números (1K, 1M)
- `formatCurrency()` - Formata valores monetários
- `truncateText()` - Trunca texto longo

### Validação
- `isValidEmail()` - Valida email
- `isValidPhone()` - Valida telefone
- `isValidUrl()` - Valida URL
- `isStrongPassword()` - Valida senha forte
- `isEmpty()` - Verifica se está vazio

## 🎨 Tailwind CSS

Use classes Tailwind diretamente nos componentes:

```tsx
<View className="flex-1 bg-white p-6">
  <Text className="text-2xl font-bold text-gray-900">
    Olá Mundo
  </Text>
</View>
```

## 📱 Navegação

O app usa navegação por tabs com 4 telas principais:
- **Home** - Tela inicial
- **Search** - Busca
- **Profile** - Perfil do usuário
- **Settings** - Configurações

## 🚀 Como usar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Execute no seu dispositivo/emulador usando o Expo Go

## 📝 Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build:web` - Build para web
- `npm run lint` - Lint do código
- `npm run typecheck` - Verificação de tipos TypeScript

## 🎯 Características

- ✅ Navegação por tabs
- ✅ Tailwind CSS (NativeWind)
- ✅ TypeScript configurado
- ✅ Componentes reutilizáveis
- ✅ Custom hooks
- ✅ Funções utilitárias
- ✅ Sistema de temas
- ✅ Validações prontas
- ✅ Formatação de dados
- ✅ Ícones Lucide
