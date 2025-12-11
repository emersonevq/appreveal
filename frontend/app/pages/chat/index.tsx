import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
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
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200 flex-row items-center gap-3">
        <Pressable
          onPress={() => router.back()}
          className="p-2 -ml-2"
        >
          <ChevronLeft size={24} color="#111827" />
        </Pressable>
        <View>
          <Text className="text-2xl font-bold text-gray-900">Mensagens</Text>
          <Text className="text-xs text-gray-600 mt-0.5">{mockConversations.length} conversas</Text>
        </View>
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
