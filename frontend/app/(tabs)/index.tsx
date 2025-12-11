import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Users,
  MessageCircle,
  Bell,
  Heart,
  UserPlus,
  User,
} from 'lucide-react-native';
import { mockCurrentUser } from '@/frontend/mocks/users';

interface ShortcutItem {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  color: string;
  bgColor: string;
  route: string;
  count?: number;
}

export default function HomeScreen() {
  const router = useRouter();

  const shortcuts: ShortcutItem[] = [
    {
      id: 'chat',
      label: 'Bate-papo',
      description: 'Suas conversas',
      icon: MessageCircle,
      color: '#16a34a',
      bgColor: 'bg-green-100',
      route: '/pages/chat',
      count: 5,
    },
    {
      id: 'friends',
      label: 'Amigos',
      description: 'Seus amigos',
      icon: Users,
      color: '#3b82f6',
      bgColor: 'bg-blue-100',
      route: '/pages/friends',
      count: mockCurrentUser.friendsCount,
    },
    {
      id: 'notifications',
      label: 'Notificações',
      description: 'Novidades',
      icon: Bell,
      color: '#ef4444',
      bgColor: 'bg-red-100',
      route: '/pages/notifications',
      count: 0,
    },
    {
      id: 'requests',
      label: 'Solicitações',
      description: 'Pedidos de amizade',
      icon: UserPlus,
      color: '#f59e0b',
      bgColor: 'bg-amber-100',
      route: '/pages/friend-requests',
      count: 3,
    },
    {
      id: 'profile',
      label: 'Perfil',
      description: 'Seu perfil',
      icon: User,
      color: '#8b5cf6',
      bgColor: 'bg-purple-100',
      route: '/profile',
    },
    {
      id: 'favorites',
      label: 'Favoritos',
      description: 'Seus favoritos',
      icon: Heart,
      color: '#ec4899',
      bgColor: 'bg-pink-100',
      route: '/pages/favorites',
    },
  ];

  const handleShortcutPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Início</Text>
        <Text className="text-sm text-gray-600 mt-1">
          Bem-vindo, {mockCurrentUser.fullName.split(' ')[0]}!
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 24, paddingHorizontal: 24 }}
      >
        {/* Shortcuts Grid */}
        <View>
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Atalhos Rápidos
          </Text>
          <View className="flex-row flex-wrap gap-4 justify-between">
            {shortcuts.map((shortcut) => {
              const IconComponent = shortcut.icon;
              return (
                <Pressable
                  key={shortcut.id}
                  onPress={() => handleShortcutPress(shortcut.route)}
                  className={`flex-1 min-w-[45%] rounded-2xl border border-gray-100 overflow-hidden active:opacity-70`}
                  style={{ minHeight: 160 }}
                >
                  <View className="flex-1 bg-white p-4 justify-between">
                    {/* Icon and Badge */}
                    <View>
                      <View
                        className={`${shortcut.bgColor} rounded-full p-3 w-fit mb-3`}
                      >
                        <IconComponent size={24} color={shortcut.color} />
                      </View>

                      {shortcut.count !== undefined && shortcut.count > 0 && (
                        <View className="absolute top-3 right-3 bg-red-500 rounded-full w-6 h-6 items-center justify-center">
                          <Text className="text-white text-xs font-bold">
                            {shortcut.count > 99 ? '99+' : shortcut.count}
                          </Text>
                        </View>
                      )}
                    </View>

                    {/* Labels */}
                    <View>
                      <Text className="text-base font-bold text-gray-900 mb-1">
                        {shortcut.label}
                      </Text>
                      <Text className="text-xs text-gray-600">
                        {shortcut.description}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Stats Summary */}
        <View className="mt-8">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Resumo da Conta
          </Text>
          <View className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {[
              { label: 'Posts criados', value: mockCurrentUser.postsCount },
              {
                label: 'Mensagens não lidas',
                value: mockCurrentUser.unreadMessages,
              },
              { label: 'Amigos', value: mockCurrentUser.friendsCount },
            ].map((stat, index) => (
              <View
                key={index}
                className={`flex-row items-center justify-between px-4 py-3 ${
                  index < 2 ? 'border-b border-gray-100' : ''
                }`}
              >
                <Text className="text-gray-600">{stat.label}</Text>
                <Text className="text-lg font-bold text-gray-900">
                  {stat.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
