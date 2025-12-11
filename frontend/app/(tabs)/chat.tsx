import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ConversationList } from '@/frontend/components/chat/ConversationList';
import { mockConversations } from '@/frontend/mocks/chats';

export default function ChatScreen() {
  const router = useRouter();

  const handleConversationPress = (conversationId: string) => {
    router.push({
      pathname: '/pages/chat/[id]',
      params: { id: conversationId },
    });
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
        <ConversationList
          conversations={mockConversations}
          onConversationPress={handleConversationPress}
          selectedId={null}
        />
      </ScrollView>
    </View>
  );
}
