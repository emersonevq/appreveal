import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Heart, MessageCircle, UserPlus, Share2, Trash2, ChevronLeft } from 'lucide-react-native';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'share';
  userName: string;
  action: string;
  target?: string;
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    userName: 'Maria Santos',
    action: 'curtiu seu post',
    target: 'Photo from yesterday',
    timestamp: '2 horas atrás',
    read: false,
  },
  {
    id: '2',
    type: 'follow',
    userName: 'Pedro Oliveira',
    action: 'começou a seguir você',
    timestamp: '3 horas atrás',
    read: false,
  },
  {
    id: '3',
    type: 'comment',
    userName: 'Ana Costa',
    action: 'comentou em seu post',
    target: 'Amazing sunset! 🌅',
    timestamp: '1 dia atrás',
    read: true,
  },
  {
    id: '4',
    type: 'share',
    userName: 'João Silva',
    action: 'compartilhou seu post',
    timestamp: '2 dias atrás',
    read: true,
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  const getNotificationIcon = (
    type: string,
  ): React.ComponentType<{ size: number; color: string }> => {
    switch (type) {
      case 'like':
        return Heart;
      case 'comment':
        return MessageCircle;
      case 'follow':
        return UserPlus;
      case 'share':
        return Share2;
      default:
        return Heart;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'like':
        return { color: '#ef4444', bg: 'bg-red-100' };
      case 'comment':
        return { color: '#3b82f6', bg: 'bg-blue-100' };
      case 'follow':
        return { color: '#f59e0b', bg: 'bg-amber-100' };
      case 'share':
        return { color: '#8b5cf6', bg: 'bg-purple-100' };
      default:
        return { color: '#6b7280', bg: 'bg-gray-100' };
    }
  };

  const handleDelete = (notificationId: string) => {
    console.log('Delete notification:', notificationId);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200 flex-row items-center gap-3">
        <Pressable
          onPress={() => router.back()}
          className="p-2 -ml-2"
        >
          <ChevronLeft size={24} color="#111827" />
        </Pressable>
        <View>
          <Text className="text-2xl font-bold text-gray-900">Notificações</Text>
          <Text className="text-xs text-gray-600 mt-0.5">
            {mockNotifications.filter((n) => !n.read).length} não lidas
          </Text>
        </View>
      </View>

      {/* Notifications List */}
      {mockNotifications.length > 0 ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 py-4 gap-3">
            {mockNotifications.map((notification) => {
              const IconComponent = getNotificationIcon(notification.type);
              const { color, bg } = getNotificationColor(notification.type);

              return (
                <Pressable
                  key={notification.id}
                  className={`rounded-2xl border border-gray-100 p-4 flex-row items-start gap-3 ${
                    notification.read ? 'bg-white' : 'bg-blue-50'
                  } active:opacity-70`}
                >
                  {/* Icon */}
                  <View className={`${bg} rounded-full p-3 mt-0.5`}>
                    <IconComponent size={20} color={color} />
                  </View>

                  {/* Content */}
                  <View className="flex-1">
                    <Text className="text-base font-bold text-gray-900">
                      {notification.userName}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {notification.action}
                    </Text>
                    {notification.target && (
                      <Text className="text-xs text-gray-500 mt-1">
                        "{notification.target}"
                      </Text>
                    )}
                    <Text className="text-xs text-gray-500 mt-2">
                      {notification.timestamp}
                    </Text>
                  </View>

                  {/* Delete Button */}
                  <Pressable
                    onPress={() => handleDelete(notification.id)}
                    className="p-2 active:bg-gray-100 rounded-full"
                  >
                    <Trash2 size={18} color="#9ca3af" />
                  </Pressable>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Heart size={48} color="#d1d5db" />
          <Text className="text-gray-600 text-center mt-4">
            Nenhuma notificação
          </Text>
          <Pressable
            onPress={() => router.back()}
            className="mt-4 bg-blue-500 rounded-lg px-6 py-2"
          >
            <Text className="text-white font-semibold">Voltar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
