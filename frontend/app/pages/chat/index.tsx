import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ConversationList } from '@/frontend/components/chat/ConversationList';
import { mockConversations } from '@/frontend/mocks/chats';

export default function ChatListScreen() {
  const router = useRouter();

  const handleConversationPress = (conversationId: string) => {
    router.push(`/pages/chat/${conversationId}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Mensagens</Text>
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
