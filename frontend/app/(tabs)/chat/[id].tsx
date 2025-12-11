import { View, Text, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { ChatMessage } from '@/frontend/components/chat/ChatMessage';
import { ChatInput } from '@/frontend/components/chat/ChatInput';
import { mockConversations } from '@/frontend/mocks/chats';
import type { ChatMessage as ChatMessageType } from '@/frontend/types/chat';

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const conversation = mockConversations.find((c) => c.id === id);

  const [messages, setMessages] = useState<ChatMessageType[]>(
    conversation?.messages || [],
  );
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  if (!conversation) {
    return (
      <View className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-600">Conversa não encontrada</Text>
        <Pressable
          onPress={() => router.back()}
          className="mt-4 bg-blue-500 rounded-lg px-6 py-2"
        >
          <Text className="text-white font-semibold">Voltar</Text>
        </Pressable>
      </View>
    );
  }

  const handleSendMessage = (content: string) => {
    if (!editingMessageId) {
      const newMessage: ChatMessageType = {
        id: `msg_${Date.now()}`,
        conversationId: conversation.id,
        userId: '1',
        userFullName: 'João Silva',
        userInitials: 'JS',
        content,
        createdAt: 'Agora',
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
    } else {
      setMessages(
        messages.map((msg: ChatMessageType) =>
          msg.id === editingMessageId
            ? { ...msg, content, editedAt: 'Agora' }
            : msg,
        ),
      );
      setEditingMessageId(null);
      setEditingText('');
    }
  };

  const handleEditMessage = (messageId: string) => {
    const message = messages.find((m) => m.id === messageId);
    if (message) {
      setEditingMessageId(messageId);
      setEditingText(message.content);
    }
  };

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter((m: ChatMessageType) => m.id !== messageId));
  };

  const handleCopyMessage = (content: string) => {
    console.log('Copy:', content);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingText('');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-4 px-6 pb-4 bg-white border-b border-gray-200 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2 flex-1">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <ChevronLeft size={24} color="#111827" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">
              {conversation.userFullName}
            </Text>
            <Text className="text-xs text-gray-600">Online</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <ScrollView className="flex-1 px-6 py-4">
        {messages.map((message: ChatMessageType) => (
          <ChatMessage
            key={message.id}
            message={message}
            onEdit={message.isOwn ? handleEditMessage : undefined}
            onDelete={message.isOwn ? handleDeleteMessage : undefined}
            onCopy={handleCopyMessage}
            showAvatar={true}
          />
        ))}
      </ScrollView>

      {/* Input */}
      <ChatInput
        onSend={handleSendMessage}
        isEditing={!!editingMessageId}
        editingText={editingText}
        onCancelEdit={handleCancelEdit}
      />
    </View>
  );
}
