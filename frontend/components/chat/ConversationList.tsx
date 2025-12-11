import { View, Text, Pressable, FlatList } from 'react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { Conversation } from '@/frontend/types/chat';

interface ConversationListProps {
  conversations: Conversation[];
  onConversationPress: (conversationId: string) => void;
  selectedId?: string;
}

export function ConversationList({
  conversations,
  onConversationPress,
  selectedId,
}: ConversationListProps) {
  return (
    <FlatList
      data={conversations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onConversationPress(item.id)}
          className={`flex-row items-center gap-3 px-4 py-3 border-b border-gray-100 active:bg-gray-50 ${
            selectedId === item.id ? 'bg-blue-50' : ''
          }`}
        >
          <View className="relative">
            <Avatar
              source={
                item.userAvatar ? { uri: item.userAvatar } : undefined
              }
              initials={item.userInitials}
              size="md"
            />

            {item.unreadCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">
                  {item.unreadCount > 9 ? '9+' : item.unreadCount}
                </Text>
              </View>
            )}
          </View>

          <View className="flex-1">
            <Text
              className={`font-semibold ${
                item.unreadCount > 0
                  ? 'text-gray-900'
                  : 'text-gray-700'
              }`}
            >
              {item.userFullName}
            </Text>

            <Text
              className={`text-sm mt-0.5 line-clamp-1 ${
                item.unreadCount > 0
                  ? 'text-gray-700'
                  : 'text-gray-600'
              }`}
            >
              {item.lastMessage}
            </Text>
          </View>

          <View className="items-end">
            <Text className="text-xs text-gray-500">
              {item.lastMessageTime}
            </Text>

            {item.unreadCount > 0 && (
              <View className="w-2 h-2 rounded-full bg-blue-500 mt-1" />
            )}
          </View>
        </Pressable>
      )}
      scrollEnabled={true}
    />
  );
}
