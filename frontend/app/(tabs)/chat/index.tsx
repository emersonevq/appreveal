import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { mockConversations } from '@/frontend/mocks/chats';
import {
  friendsStatusList,
  getStatusColor,
} from '@/frontend/mocks/friends-status';

export default function ChatListScreen() {
  const router = useRouter();

  const handleConversationPress = (conversationId: string) => {
    router.push({
      pathname: '/pages/chat/[id]',
      params: { id: conversationId },
    });
  };

  // Get friend status for each conversation
  const getConversationStatus = (userId: string) => {
    return friendsStatusList.find((f) => f.userId === userId);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-4 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">Mensagens</Text>
        <Text className="text-xs text-gray-600 mt-0.5">
          {mockConversations.length} conversas
        </Text>
      </View>

      {/* Conversation List */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-4 gap-2">
          {mockConversations.map((conversation) => {
            const friendStatus = getConversationStatus(conversation.userId);
            const statusColor = friendStatus
              ? getStatusColor(friendStatus.status)
              : '#9ca3af';

            return (
              <Pressable
                key={conversation.id}
                onPress={() => handleConversationPress(conversation.id)}
                className="bg-white rounded-lg p-3 flex-row items-center gap-3 active:bg-gray-50 border border-gray-100"
              >
                {/* Avatar with Status */}
                <View className="relative">
                  <View className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      source={{ uri: conversation.userAvatar }}
                      className="w-full h-full"
                    />
                  </View>
                  {friendStatus && (
                    <View
                      style={{ backgroundColor: statusColor }}
                      className="w-3.5 h-3.5 rounded-full absolute bottom-0 right-0 border-2 border-white"
                    />
                  )}
                </View>

                {/* Conversation Info */}
                <View className="flex-1 min-w-0">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-semibold text-gray-900 text-sm flex-1">
                      {conversation.userFullName}
                    </Text>
                    {friendStatus?.status === 'online' && (
                      <Text className="text-xs text-green-600">●</Text>
                    )}
                    {friendStatus?.status === 'busy' && (
                      <Text className="text-xs text-red-600">●</Text>
                    )}
                    {friendStatus?.status === 'away' && (
                      <Text className="text-xs text-amber-600">●</Text>
                    )}
                  </View>

                  {/* Currently Playing */}
                  {friendStatus?.currentlyPlaying ? (
                    <Text className="text-xs text-gray-600 mt-0.5 line-clamp-1">
                      {friendStatus.currentlyPlaying.emoji}{' '}
                      {friendStatus.currentlyPlaying.title}
                    </Text>
                  ) : (
                    <Text className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                      {conversation.lastMessage}
                    </Text>
                  )}
                </View>

                {/* Time */}
                <Text className="text-xs text-gray-500">
                  {conversation.lastMessageTime}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
