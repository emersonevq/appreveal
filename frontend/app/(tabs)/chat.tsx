import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { ConversationList } from '@/frontend/components/chat/ConversationList';
import { ChatMessage } from '@/frontend/components/chat/ChatMessage';
import { ChatInput } from '@/frontend/components/chat/ChatInput';
import { mockConversations } from '@/frontend/mocks/chats';
import type { ChatMessage as ChatMessageType } from '@/frontend/types/chat';

export default function ChatScreen() {
  const [selectedConversation, setSelectedConversation] = useState(
    mockConversations[0],
  );
  const [messages, setMessages] = useState<ChatMessageType[]>(selectedConversation.messages);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleSendMessage = (content: string) => {
    if (!editingMessageId) {
      const newMessage: ChatMessageType = {
        id: `msg_${Date.now()}`,
        conversationId: selectedConversation.id,
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
    // TODO: Implement clipboard copy
    console.log('Copy:', content);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingText('');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Mensagens</Text>
      </View>

      <View className="flex-1 flex-row">
        {/* Conversation List */}
        <View className="w-1/3 bg-white border-r border-gray-200">
          <ConversationList
            conversations={mockConversations}
            onConversationPress={(id) => {
              const conv = mockConversations.find((c) => c.id === id);
              if (conv) {
                setSelectedConversation(conv);
                setMessages(conv.messages);
                setEditingMessageId(null);
                setEditingText('');
              }
            }}
            selectedId={selectedConversation.id}
          />
        </View>

        {/* Chat */}
        <View className="flex-2 flex-col">
          {/* Chat Header */}
          <View className="px-6 py-4 border-b border-gray-200 bg-white">
            <Text className="text-xl font-bold text-gray-900">
              {selectedConversation.userFullName}
            </Text>
          </View>

          {/* Messages */}
          <ScrollView className="flex-1 px-6 py-4">
            {messages.map((message: ChatMessageType) => (
              <ChatMessage
                key={message.id}
                message={message}
                onEdit={
                  message.isOwn ? handleEditMessage : undefined
                }
                onDelete={
                  message.isOwn ? handleDeleteMessage : undefined
                }
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
      </View>
    </View>
  );
}
