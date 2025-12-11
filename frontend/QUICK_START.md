# 🚀 Quick Start Guide

## Como as Funcionalidades Funcionam

### 1. Ver Próprio Perfil
```
Tab "Profile" → Exibe perfil próprio com:
  - Foto de capa e avatar
  - Botão "Editar Perfil"
  - 3 Scraps (deletáveis)
  - 2 Depoimentos (com ⭐⭐⭐⭐⭐)
  - 2 Posts próprios
  - 1 Post marcado em
```

### 2. Ver Perfil de Outro Usuário
```
Home → Clique em nome de usuário → Abre perfil público:
  - Mesmas informações mas sem editar
  - Botão "Enviar Mensagem" ao invés de editar
  - Scraps com "Responder Scrap"
  - Pode curtir posts
```

### 3. Enviar Mensagem
```
Tab "Chat" ou Perfil → Clique "Enviar Mensagem" →
Lista de conversas (esquerda) + Chat (direita):
  - Selecione conversa
  - Tipo mensagem
  - Clique enviar (▶)
```

### 4. Editar/Deletar Mensagem
```
No chat, na sua mensagem (azul à direita):
  - ✏️ Editar = Modo edição ativa
  - 🗑️ Deletar = Confirma e deleta para todos
  - 📋 Copiar = Copia para clipboard
```

### 5. Usar Tela Inicial
```
Home → 4 seções no topo:
  - Amigos (342) → Alert
  - Posts (48) → Alert
  - Mensagens (5) → Vai para Chat Tab
  - Notificações (0) → Alert
  
  Feed abaixo com posts curtíveis/comentáveis/compartilháveis
```

---

## Estrutura de Dados

### UserProfile
```typescript
{
  id: "1",
  fullName: "João Silva",
  avatar: "url",
  initials: "JS",
  coverImage: "url",
  bio: "Desenvolvedor...",
  location: "São Paulo, Brasil",
  friendsCount: 342,
  postsCount: 48,
  unreadMessages: 5,
}
```

### Post
```typescript
{
  id: "post1",
  userId: "2",
  userFullName: "Maria Santos",
  content: "Que dia lindo! 🌞",
  image: "url",
  createdAt: "2 horas atrás",
  likes: 45,
  comments: 8,
  shares: 3,
  liked: false,
  taggedUsers: ["João Silva"]
}
```

### ChatMessage
```typescript
{
  id: "msg1",
  conversationId: "conv1",
  userId: "2",
  userFullName: "Maria Santos",
  content: "Oi! Como você está?",
  createdAt: "2 horas atrás",
  editedAt?: "1 hora atrás",
  isOwn: false,
}
```

### Scrap
```typescript
{
  id: "scrap1",
  userId: "1",
  authorFullName: "Maria Santos",
  content: "João você é o melhor! 🎉",
  createdAt: "3 dias atrás",
}
```

### Testimonial
```typescript
{
  id: "test1",
  userId: "1",
  authorFullName: "Maria Santos",
  content: "João é um profissional extraordinário!",
  createdAt: "1 mês atrás",
}
```

---

## Componentes Principais

### ProfileCard
```tsx
import { ProfileCard } from '@/frontend/components/profile';

<ProfileCard
  user={mockCurrentUser}
  isOwnProfile={true}
  onEdit={handleEdit}
  onFriendClick={handleFriends}
/>
```
✅ Reutilizável
✅ Proteção contra edição
✅ Props bem tipadas

### ChatMessage
```tsx
import { ChatMessage } from '@/frontend/components/chat';

<ChatMessage
  message={message}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onCopy={handleCopy}
  showAvatar={true}
/>
```
✅ Própria mensagem (azul)
✅ Outra mensagem (cinza)
✅ Botões contextuais

### PostCard
```tsx
import { PostCard } from '@/frontend/components/home';

<PostCard
  post={post}
  onLike={handleLike}
  onComment={handleComment}
  onShare={handleShare}
  onUserPress={handleUserPress}
/>
```
✅ Feed de posts
✅ Interações completas
✅ Imagem opcional

### StatsBar
```tsx
import { StatsBar } from '@/frontend/components/home';

<StatsBar
  user={mockCurrentUser}
  onFriendsPress={() => {}}
  onPostsPress={() => {}}
  onMessagesPress={() => {}}
  onNotificationsPress={() => {}}
/>
```
✅ 4 seções clicáveis
✅ Badges de contagem
✅ Ícones coloridos

---

## Mock Data

### Importar
```typescript
import {
  mockCurrentUser,
  mockOtherUsers,
  mockPosts,
  mockUserPosts,
  mockConversations,
  mockScraps,
  mockTestimonials,
} from '@/frontend/mocks';
```

### Dados Disponíveis
- ✅ 1 usuário atual + 3 outros
- ✅ 4 posts no feed + 3 do usuário + 1 marcado
- ✅ 3 conversas com 5+ mensagens
- ✅ 3 scraps diferentes
- ✅ 2 depoimentos com 5 estrelas

---

## Fluxo de Navegação

```
App Start
  ↓
Root Layout (Verifica autenticação)
  ↓
Tabs Layout (Home, Chat, Search, Profile, Settings)
  ├─ Home (index.tsx)
  │  ├─ StatsBar + Feed de Posts
  │  └─ Clique usuário → user-profile.tsx
  ├─ Chat (chat.tsx) NEW
  │  ├─ ConversationList (esquerda)
  │  ├─ Chat principal (direita)
  │  └─ ChatMessage + ChatInput
  ├─ Profile (profile.tsx)
  │  ├─ ProfileCard próprio
  │  ├─ ScrapsList
  │  ├─ TestimonialsList
  │  └─ PostsList
  └─ Perfil Público (user-profile.tsx) NEW
     ├─ ProfileCard outro usuário
     ├─ ScrapsList (responder)
     ├─ TestimonialsList
     └─ PostsList
```

---

## Adicionar Nova Feature

### 1. Criar Tipo
```typescript
// frontend/types/my-feature.ts
export interface MyFeature {
  id: string;
  name: string;
  // ... props
}
```

### 2. Criar Mock
```typescript
// frontend/mocks/my-feature.ts
export const mockMyFeatures: MyFeature[] = [
  { id: '1', name: 'Example', ... }
];
```

### 3. Criar Componente
```typescript
// frontend/components/my-feature/MyComponent.tsx
import type { MyFeature } from '@/frontend/types/my-feature';

export function MyComponent({ feature }: { feature: MyFeature }) {
  return <View>{/* ... */}</View>;
}
```

### 4. Exportar
```typescript
// frontend/components/my-feature/index.ts
export { MyComponent } from './MyComponent';
```

### 5. Usar em Tela
```typescript
import { MyComponent } from '@/frontend/components/my-feature';
import { mockMyFeatures } from '@/frontend/mocks';

export default function MyScreen() {
  return <MyComponent feature={mockMyFeatures[0]} />;
}
```

---

## Integrar com Backend

### 1. Substituir Mocks
```typescript
// Antes
import { mockPosts } from '@/frontend/mocks';
const posts = mockPosts;

// Depois
const posts = await fetchPostsFromAPI();
```

### 2. Usar Supabase
```typescript
import { supabase } from '@/frontend/lib/supabase';

const { data, error } = await supabase
  .from('posts')
  .select('*')
  .limit(10);
```

### 3. Adicionar Loading
```typescript
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetchData()
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

---

## Debugging

### Ver Console
```typescript
console.log('Mensagem:', message);
console.warn('Aviso:', warning);
console.error('Erro:', error);
```

### Alerts para Testes
```typescript
import { Alert } from 'react-native';

Alert.alert('Título', 'Mensagem', [
  { text: 'OK', onPress: () => {} }
]);
```

### Verificar Props
```typescript
export function MyComponent(props: MyComponentProps) {
  console.log('Props:', props); // Debug
  return <View>{/* ... */}</View>;
}
```

---

## Performance

### Memo para Componentes
```typescript
import { memo } from 'react';

export const ChatMessage = memo(function ChatMessage(props) {
  return <View>{/* ... */}</View>;
});
```

### Lazy Loading
```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./Heavy'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### List Optimization
```typescript
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Item item={item} />}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
/>
```

---

## Estilos com Tailwind

### Classes Úteis
```
Espaçamento: gap-2, gap-3, gap-4, px-6, py-4
Cores: bg-blue-500, text-gray-900, border-gray-200
Sizing: w-full, h-48, flex-1, flex-2
Flex: flex-row, items-center, justify-between
Rounded: rounded-full, rounded-2xl, rounded-lg
Shadow: shadow-sm, active:shadow-md
Opacity: opacity-70, active:opacity-50
```

### Responsive
```typescript
className="px-4 md:px-6 lg:px-8" // Web responsive
// Mobile-first no React Native
```

---

## Icons (Lucide)

### Usar
```typescript
import { Heart, MessageCircle, Share2, User } from 'lucide-react-native';

<Heart size={24} color="#ef4444" fill="#ef4444" />
<MessageCircle size={20} color="#6b7280" />
<Share2 size={18} color="#3b82f6" />
<User size={48} color="#ffffff" />
```

### Props
- `size` - Tamanho (16, 20, 24, 48, etc)
- `color` - Cor (hex ou nome)
- `fill` - Preenchimento (para ícones sólidos)
- `strokeWidth` - Espessura da linha

---

## Troubleshooting

### Erro: "Module not found"
```
Verifique o path: @/frontend/... (com @/)
Crie arquivo: touch file.tsx
Exporte em index.ts
```

### Erro: "Type is not assignable"
```
Adicione type annotation: const arr: MyType[] = [];
Ou use inferência: const arr = [] as const;
```

### Componente não renderiza
```
Verifique:
- Componente exportado?
- Props corretas?
- Sem erros no console?
- TouchableOpacity vs Pressable?
```

### Chat não atualiza
```
Use setState, não mutação direta
setMessages([...messages, newMsg])
Não: messages.push(newMsg)
```

---

## Recursos

- 📚 [Documentação Completa](./FEATURES.md)
- 🗺️ [Guia de Navegação](./NAVIGATION.md)
- 📋 [Resumo de Build](./BUILD_SUMMARY.md)
- 📱 [React Native Docs](https://reactnative.dev)
- ⚛️ [Expo Docs](https://docs.expo.dev)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🎯 [Lucide Icons](https://lucide.dev)

---

**Dúvidas? Veja FEATURES.md para documentação completa!**
