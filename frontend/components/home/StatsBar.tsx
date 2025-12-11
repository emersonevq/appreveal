import { View, Pressable, Text } from 'react-native';
import { Users, MessageCircle, Bell, FileText } from 'lucide-react-native';
import type { UserProfile } from '@/frontend/types/user';

interface StatsBarProps {
  user: UserProfile;
  onFriendsPress: () => void;
  onPostsPress: () => void;
  onMessagesPress: () => void;
  onNotificationsPress: () => void;
}

export function StatsBar({
  user,
  onFriendsPress,
  onPostsPress,
  onMessagesPress,
  onNotificationsPress,
}: StatsBarProps) {
  return (
    <View className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <View className="flex-row items-stretch">
        {/* Friends */}
        <Pressable
          onPress={onFriendsPress}
          className="flex-1 flex-row items-center justify-center gap-3 py-4 px-3 border-r border-gray-100 active:bg-gray-50"
        >
          <View className="bg-blue-100 rounded-full p-2.5">
            <Users size={20} color="#3b82f6" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">
              {user.friendsCount}
            </Text>
            <Text className="text-xs text-gray-600">
              {user.friendsCount === 1 ? 'Amigo' : 'Amigos'}
            </Text>
          </View>
        </Pressable>

        {/* Posts */}
        <Pressable
          onPress={onPostsPress}
          className="flex-1 flex-row items-center justify-center gap-3 py-4 px-3 border-r border-gray-100 active:bg-gray-50"
        >
          <View className="bg-purple-100 rounded-full p-2.5">
            <FileText size={20} color="#a855f7" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">
              {user.postsCount}
            </Text>
            <Text className="text-xs text-gray-600">
              {user.postsCount === 1 ? 'Post' : 'Posts'}
            </Text>
          </View>
        </Pressable>

        {/* Messages */}
        <Pressable
          onPress={onMessagesPress}
          className="flex-1 flex-row items-center justify-center gap-3 py-4 px-3 border-r border-gray-100 active:bg-gray-50 relative"
        >
          <View className="bg-green-100 rounded-full p-2.5">
            <MessageCircle size={20} color="#16a34a" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">
              {user.unreadMessages}
            </Text>
            <Text className="text-xs text-gray-600">
              {user.unreadMessages === 1 ? 'Msg' : 'Msgs'}
            </Text>
          </View>

          {user.unreadMessages > 0 && (
            <View className="absolute top-2 right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
              <Text className="text-white text-xs font-bold">
                {user.unreadMessages > 9 ? '9+' : user.unreadMessages}
              </Text>
            </View>
          )}
        </Pressable>

        {/* Notifications */}
        <Pressable
          onPress={onNotificationsPress}
          className="flex-1 flex-row items-center justify-center gap-3 py-4 px-3 active:bg-gray-50"
        >
          <View className="bg-red-100 rounded-full p-2.5">
            <Bell size={20} color="#ef4444" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">0</Text>
            <Text className="text-xs text-gray-600">Notif.</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
